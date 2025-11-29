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

// Service pages
const servicePages = [
  'fencing',
  'fence-repairs',
  'decking',
  'gates',
  'sheds',
  'garden-rooms',
  'custom-fence-construction-irvine',
  'wood-fence-installation-irvine',
  'fence-replacement-irvine',
  'garden-fence-installation-irvine',
  'composite-fencing-installation-irvine',
  'chainlink-fencing-installation-irvine',
  'timber-decking-irvine',
  'composite-decking-irvine',
  'wooden-decking-irvine',
  'wooden-fencing-irvine',
  'composite-fencing-irvine',
  'chainlink-fencing-irvine',
  'nylofor-fencing-irvine',
  'concrete-fencing-irvine',
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

// Category pages
const categoryPages = [
  'fence-contractor-irvine',
  'deck-builder-irvine',
  'shed-builder-irvine',
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
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
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

