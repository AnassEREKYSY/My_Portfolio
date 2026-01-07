/**
 * Sitemap generator for SEO
 * This can be used to generate a sitemap.xml file
 * For production, consider using a build script or server-side generation
 */

export const sitemapRoutes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/experience', priority: '0.9', changefreq: 'monthly' },
  { path: '/projects', priority: '0.9', changefreq: 'weekly' },
  { path: '/skills', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' }
];

export function generateSitemap(baseUrl: string = 'https://anass-erekysy.dev'): string {
  const urls = sitemapRoutes.map(route => {
    return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}





