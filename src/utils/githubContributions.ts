export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

/**
 * Fetches contributions for a user, using primary live source (with private contributions)
 * and automatic fallback if the primary source is unreachable.
 */
export async function fetchUserContributions(username: string = 'stdrouuu'): Promise<ContributionDay[]> {
  // 1. Try gh-calendar.rschristian.dev (reflects live GitHub changes including private contributions immediately)
  try {
    const res = await fetch(`https://gh-calendar.rschristian.dev/user/${username}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data?.contributions)) {
        const flat: any[] = Array.isArray(data.contributions[0]) ? data.contributions.flat() : data.contributions;
        return flat.map((c: any) => ({
          date: c.date,
          count: Number(c.count ?? 0),
          level: Number(c.intensity ?? c.level ?? 0)
        }));
      }
    }
  } catch (err) {
    console.warn('Failed to fetch from gh-calendar, trying fallback:', err);
  }

  // 2. Fallback to jogruber API
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data?.contributions)) {
        return data.contributions.map((c: any) => ({
          date: c.date,
          count: Number(c.count ?? 0),
          level: Number(c.level ?? c.intensity ?? 0)
        }));
      }
    }
  } catch (err) {
    console.error('All GitHub contribution APIs failed:', err);
  }

  return [];
}

/**
 * Aligns contribution days to end on targetDate (default: current system date).
 * Ensures:
 * 1. No future dates beyond targetDate are shown.
 * 2. If the API is slightly behind (e.g. timezone difference), missing days up to targetDate are padded.
 * 3. Keeps a complete rolling ~52-53 weeks (~365-371 days) starting on a Sunday.
 */
export function alignContributionsToDate(
  contributions: ContributionDay[],
  targetDate: Date = new Date()
): ContributionDay[] {
  if (!contributions || !contributions.length) return [];

  // Format targetDate as YYYY-MM-DD in user's local system time
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const day = String(targetDate.getDate()).padStart(2, '0');
  const targetDateStr = `${year}-${month}-${day}`;

  // 1. Filter out any dates strictly beyond targetDate
  let list = contributions.filter((c) => c.date <= targetDateStr);

  // 2. Pad missing days up to targetDate if API hasn't generated today yet
  if (list.length > 0) {
    let lastDateStr = list[list.length - 1].date;
    while (lastDateStr < targetDateStr) {
      const parts = lastDateStr.split('-').map(Number);
      const nextDate = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2] + 1));
      lastDateStr = nextDate.toISOString().slice(0, 10);
      list.push({ date: lastDateStr, count: 0, level: 0 });
    }
  }

  // 3. Ensure we keep rolling ~52-53 weeks ending on targetDate, starting on a Sunday
  if (list.length > 371) {
    list = list.slice(list.length - 371);
    while (list.length > 350) {
      const parts = list[0].date.split('-').map(Number);
      const dt = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
      if (dt.getUTCDay() === 0) break;
      list.shift();
    }
  }

  return list;
}

/**
 * Generates the GitHub contribution SVG matching the exact style and layout.
 */
export function generateSvg(contributions: ContributionDay[]): string {
  if (!contributions || !contributions.length) return '';
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [y, m, d] = contributions[0].date.split('-').map(Number);
  const startDate = new Date(Date.UTC(y, m - 1, d));
  const startDayOfWeek = startDate.getUTCDay(); // 0: Sun, 1: Mon, ...

  let lastMonth = -1;
  const monthLabels: Array<{ name: string; x: number; week: number }> = [];
  const rects: string[] = [];
  let maxWeek = 0;

  contributions.forEach((day, index) => {
    const [, cm] = day.date.split('-').map(Number);
    const cellIndex = startDayOfWeek + index;
    const weekIndex = Math.floor(cellIndex / 7);
    const dayOfWeek = cellIndex % 7;
    if (weekIndex > maxWeek) maxWeek = weekIndex;

    // Month label
    if (cm - 1 !== lastMonth) {
      const lastLabelWeek = monthLabels.length ? monthLabels[monthLabels.length - 1].week : -99;
      if (weekIndex - lastLabelWeek >= 2) {
        monthLabels.push({ name: monthNames[cm - 1], x: 28 + weekIndex * 12, week: weekIndex });
        lastMonth = cm - 1;
      }
    }

    const x = 28 + weekIndex * 12;
    const y = 20 + dayOfWeek * 12;

    rects.push(
      `<rect class="github-cell" data-score="${day.level}" data-date="${day.date}" data-count="${day.count}" x="${x}" y="${y}" width="10" height="10" rx="2"></rect>`
    );
  });

  const totalWidth = 28 + (maxWeek + 1) * 12 + 4;

  return `<svg viewBox="0 0 ${totalWidth} 110" width="${totalWidth}" height="110" xmlns="http://www.w3.org/2000/svg">
  <text class="day-label" x="0" y="40">Mon</text>
  <text class="day-label" x="0" y="64">Wed</text>
  <text class="day-label" x="0" y="89">Fri</text>
  ${monthLabels.map((ml) => `<text class="month-label" x="${ml.x}" y="10">${ml.name}</text>`).join('\n  ')}
  ${rects.join('\n  ')}
</svg>`;
}
