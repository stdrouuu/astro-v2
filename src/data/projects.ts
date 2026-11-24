import type { ImageMetadata } from 'astro';
import stockinfoCover from '../assets/projects/stockinfo-preview.webp';
import bisachordCover from '../assets/projects/bisachord.webp';
import memeinCover from '../assets/projects/memein2.webp';
import triggCover from '../assets/projects/trigg2.webp';
import labvoraCover from '../assets/projects/labvora-site.webp';
import plantiqCover from '../assets/projects/plantiq-erd.webp';
import statusBarCover from '../assets/projects/windows-status-bar.webp';
import statusBarDetail from '../assets/projects/windows-status-bar-wide.webp';

export type ProjectCategory = 'Client' | 'Independent' | 'Academic';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  period: string;
  summary: string;
  context: string;
  contribution?: string;
  highlights: string[];
  stack: string[];
  cover?: { src: ImageMetadata; alt: string };
  detailCover?: { src: ImageMetadata; alt: string };
  mark: string;
  tone: 'blue' | 'rose' | 'slate';
  code?: string;
  demo?: string;
}

export const projectCategories: ProjectCategory[] = ['Client', 'Independent', 'Academic'];

export const projects: Project[] = [
  {
    slug: 'stockinfo',
    title: 'StockInfo',
    category: 'Client',
    period: 'Mar–Jun 2026',
    summary: 'A warehouse inventory system that brings stock movements, physical counts, and reporting into one workflow.',
    context: 'Built with a team for a building materials business near Tanjung Duren, Jakarta. The system gives warehouse staff a place to record daily stock changes and gives managers the tools to reconcile counts and export reports.',
    contribution: 'I led project planning, worked with the team to define the scope and choose the stack, and set up our repository workflow. I also built Blade templates and styled the interface with Tailwind CSS.',
    highlights: [
      'Track incoming and outgoing stock, products, categories, and suppliers in one system.',
      'Run physical stock counts and reconcile the results against recorded inventory.',
      'Separate day-to-day staff access from admin-only reporting and user management.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    cover: { src: stockinfoCover, alt: 'StockInfo sign-in screen with separate Admin and Staff options' },
    mark: 'SI',
    tone: 'blue',
    code: 'https://github.com/stdrouuu/StockInfo',
  },
  {
    slug: 'bisachord',
    title: 'BisaChord',
    category: 'Independent',
    period: 'Jul 2026–present',
    summary: 'An offline-ready music tool for converting numbered notation to chords and transposing it to any key.',
    context: 'BisaChord makes it easier to prepare and share chord charts. The conversion runs locally in the browser, and musicians can install the app on a phone or desktop to use it offline.',
    highlights: [
      'Convert between numbered notation and chord symbols and transpose across all 12 keys.',
      'Look up diatonic chords and scale degrees while arranging a song.',
      'Copy a monospaced chart for chat apps and keep work in local browser storage.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'PWA'],
    cover: { src: bisachordCover, alt: 'BisaChord app icon on a soft pink background' },
    mark: 'BC',
    tone: 'rose',
  },
  {
    slug: 'memein',
    title: 'Memein',
    category: 'Independent',
    period: 'Aug 2025',
    summary: 'A browser-based meme editor with popular templates and a customizable canvas.',
    context: 'Memein brings template discovery and editing into one web app. Start with a familiar format, then arrange text and images directly on the canvas.',
    highlights: [
      'Browse templates fetched from Imgflip.',
      'Place and customize elements on a React Konva canvas.',
      'Edit in both light and dark themes with GSAP feedback for interface transitions.',
    ],
    stack: ['Next.js', 'TypeScript', 'React Konva', 'GSAP'],
    cover: { src: memeinCover, alt: 'Light and dark previews of the Memein website' },
    mark: 'MI',
    tone: 'rose',
    code: 'https://github.com/stdrouuu/memein-next',
    demo: 'https://memein.vercel.app/',
  },
  {
    slug: 'windows-status-bar',
    title: 'Windows Status Bar',
    category: 'Independent',
    period: '2026',
    summary: 'A slim Windows status bar with a live clock, active window title, and quick system controls.',
    context: 'I built this standalone Windows status bar in Rust for my daily workflow and configured its widgets in YAML.',
    contribution: 'I designed the layout and configured the widgets in YAML. I kept the clock centered and grouped the window title and system controls on the right.',
    highlights: [
      'Read the time at a glance with a centered clock that updates every second.',
      'See the focused window title, including the active browser tab when its title is shown by the browser.',
      'Check volume and notifications and reach the power menu from the same bar.',
    ],
    stack: ['Rust', 'YAML'],
    cover: { src: statusBarCover, alt: 'Herdr with BioInsite selected, a clock, and right-side status controls over the desktop wallpaper' },
    detailCover: { src: statusBarDetail, alt: 'Full-width Windows status bar with a centered clock and controls aligned to the right' },
    mark: 'WS',
    tone: 'slate',
  },
  {
    slug: 'trigg',
    title: 'Trigg',
    category: 'Academic',
    period: 'Feb–Apr 2026',
    summary: 'A full-stack game storefront with a customer catalog, checkout flow, and admin dashboard.',
    context: 'Trigg models the customer and store-manager sides of a game shop. Customers can browse and buy games, and administrators get dedicated screens for running the store.',
    highlights: [
      'Browse a responsive catalog, save favorites, and manage a shopping cart.',
      'Handle checkout and customer complaints in the storefront.',
      'Manage store operations from a dedicated admin dashboard.',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript'],
    cover: { src: triggCover, alt: 'Trigg storefront homepage with a dark game catalog design' },
    mark: 'TR',
    tone: 'slate',
    code: 'https://github.com/stdrouuu/Trigg',
  },
  {
    slug: 'labvora',
    title: 'Labvora',
    category: 'Academic',
    period: 'Apr–Jul 2026',
    summary: 'An Android app for booking laboratory tests, scheduling appointments, and viewing results.',
    context: 'Four computer science students built Labvora for a lecturer as the client. The app brings appointment booking and access to lab results together in one Android experience.',
    highlights: [
      'Browse lab tests and schedule appointments from the app.',
      'Access lab results through the same mobile interface.',
      'Use Jetpack Compose for the interface and Retrofit for API integration.',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'MySQL'],
    cover: { src: labvoraCover, alt: 'Screenshot of the Labvora website homepage' },
    mark: 'LV',
    tone: 'blue',
    code: 'https://github.com/stdrouuu/Labvora-Android',
  },
  {
    slug: 'plantiq',
    title: 'PlantIQ',
    category: 'Academic',
    period: 'May–Jun 2025',
    summary: 'A team prototype for planning farm activities and keeping digital harvest records.',
    cover: { src: plantiqCover, alt: 'PlantIQ entity relationship diagram for farm, plant, sensor, and weather data' },
    context: 'PlantIQ was developed by a team of eight computer science students. The prototype explores how growers could plan recurring activities and track crop conditions and harvests in the same app.',
    highlights: [
      'Plan planting, irrigation, and harvest activities.',
      'Keep harvest records available for later review.',
      'Explore a single view of weather, crop conditions, and soil health.',
    ],
    stack: ['Oracle', 'MySQL'],
    mark: 'PI',
    tone: 'slate',
  },
];
