import type { APIRoute } from 'astro';

const siteUrl = 'https://www.ayrshirefencinggroup.com';

// All static pages
const staticPages = [
  '',
  '/about',
  '/contact',
  '/services',
  '/projects',
];

// Main service category pages
const mainServicePages = [
  'fencing',
  'fence-repairs',
  'decking',
  'gates',
  'sheds',
  'garden-rooms',
];

// Fence Contractor services (Primary Category)
const fenceContractorServices = [
  'aluminium-fence-installation-irvine',
  'chain-link-fence-installation-irvine',
  'custom-fence-construction-irvine',
  'deer-fencing-and-ranch-rail-installation-irvine',
  'dog-fence-installation-irvine',
  'fence-design-irvine',
  'fence-installation-irvine',
  'iron-fence-installation-irvine',
  'pool-fence-installation-irvine',
  'privacy-fence-installation-irvine',
  'security-fencing-and-metal-cage-installation-irvine',
  'vinyl-fence-installation-irvine',
  'wood-fence-installation-irvine',
  'fence-repair-irvine',
  'fence-replacement-irvine',
  'garden-fence-installation-irvine',
  'composite-fencing-installation-irvine',
  'concrete-fence-installation-irvine',
  'decorative-panels-irvine',
  'domestic-and-commercial-fencing-irvine',
  'metal-fencing-irvine',
  'metal-fence-installation-irvine',
  'gate-installation-irvine',
];

// Contractor services
const contractorServices = [
  'deck-construction-irvine',
  'patio-construction-irvine',
];

// Deck Builder services
const deckBuilderServices = [
  'composite-decks-irvine',
  'deck-cleaning-irvine',
  'deck-design-irvine',
  'deck-installation-irvine',
  'deck-painting-irvine',
  'deck-railing-repair-irvine',
  'deck-refinishing-irvine',
  'deck-remodelling-irvine',
  'deck-repair-irvine',
  'deck-replacement-irvine',
  'patio-decks-irvine',
  'timber-decking-irvine',
];

// Shed Builder services
const shedBuilderServices = [
  'cabin-design-and-building-irvine',
  'custom-shed-design-irvine',
  'shed-installation-irvine',
  'storage-shed-design-and-building-irvine',
];

// Landscape Designer services
const landscapeDesignerServices = [
  'landscape-installations-irvine',
  'outdoor-step-construction-irvine',
  'patio-design-irvine',
];

// Construction Company services
const constructionCompanyServices = [
  'repairs-and-maintenance-irvine',
];

// Additional services
const additionalServices = [
  'garden-room-installation-irvine',
];

// Legacy service pages (keeping for backward compatibility)
const legacyServicePages = [
  'composite-decking-irvine',
  'wooden-decking-irvine',
  'wooden-fencing-irvine',
  'composite-fencing-irvine',
  'chainlink-fencing-irvine',
  'nylofor-fencing-irvine',
  'concrete-fencing-irvine',
];

// All service pages combined
const servicePages = [
  ...mainServicePages,
  ...fenceContractorServices,
  ...contractorServices,
  ...deckBuilderServices,
  ...shedBuilderServices,
  ...landscapeDesignerServices,
  ...constructionCompanyServices,
  ...additionalServices,
  ...legacyServicePages,
];

// Project pages
const projectPages = [
  'wooden-gate-and-fencing',
  'fencing-project-two',
  'wooden-fencing',
  'decking-project-four',
  'decking-project-five',
  'decking-project-six',
];

// Category pages (matching GBP categories)
const categoryPages = [
  'fence-contractor-irvine',
  'contractor-irvine',
  'deck-builder-irvine',
  'shed-builder-irvine',
  'garage-builder-irvine',
  'general-contractor-irvine',
  'landscape-designer-irvine',
  'landscape-architect-irvine',
  'construction-company-irvine',
];

function generateSitemap(): string {
  const allPages = [
    ...staticPages,
    ...servicePages.map(slug => `/service/${slug}`),
    ...projectPages.map(slug => `/project/${slug}`),
    ...categoryPages,
  ];

  const urls = allPages.map(page => {
    const url = `${siteUrl}${page}`;
    // Set priority based on page type
    let priority = '0.8';
    if (page === '') {
      priority = '1.0';
    } else if (page === '/services' || mainServicePages.includes(page.replace('/service/', ''))) {
      priority = '0.9';
    } else if (categoryPages.includes(page)) {
      priority = '0.85';
    } else if (page.startsWith('/project/')) {
      priority = '0.7';
    }
    
    // Set change frequency based on page type
    let changefreq = 'monthly';
    if (page === '' || page === '/projects') {
      changefreq = 'weekly';
    } else if (page.startsWith('/project/')) {
      changefreq = 'monthly';
    }
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const GET: APIRoute = () => {
  const sitemap = generateSitemap();
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};


