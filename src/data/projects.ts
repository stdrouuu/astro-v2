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
  cover?: { src: string; alt: string };
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
    cover: { src: '/img/stockinfo-preview.webp', alt: 'StockInfo sign-in screen with separate Admin and Staff options' },
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
    cover: { src: '/img/bisachord.webp', alt: 'BisaChord app icon on a soft pink background' },
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
    cover: { src: '/img/memein2.webp', alt: 'Light and dark previews of the Memein website' },
    mark: 'MI',
    tone: 'rose',
    code: 'https://github.com/stdrouuu/memein-next',
    demo: 'https://memein.vercel.app/',
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
    cover: { src: '/img/trigg2.webp', alt: 'Trigg storefront homepage with a dark game catalog design' },
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
    cover: { src: '/img/labvora-preview.webp', alt: 'Labvora logo and wordmark' },
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
    context: 'PlantIQ was developed by a team of eight computer science students. The prototype explores how growers could plan recurring activities and track crop conditions and harvests in the same app.',
    highlights: [
      'Plan planting, irrigation, and harvest activities.',
      'Keep harvest records available for later review.',
      'Explore a single view of weather, crop conditions, and soil health.',
    ],
    stack: [],
    mark: 'PI',
    tone: 'slate',
  },
];

export const featuredProject = projects[0];
export const selectedProjects = projects.filter(({ slug }) => ['bisachord', 'memein', 'trigg', 'labvora'].includes(slug));
