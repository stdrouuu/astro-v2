(function () {
  let saved;
  try {
    saved = localStorage.getItem('theme');
  } catch {
    // Use the system theme when storage is unavailable.
  }

  const isDark = saved === 'dark' ||
    (saved !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', isDark);
  document.getElementById('theme-color-meta')?.setAttribute('content', isDark ? '#181818' : '#F7F5F0');
})();
