import fs from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://andreapoltronieri.com';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'monthly' },
  { url: '/resume', priority: '0.8', changefreq: 'monthly' },
  { url: '/projects', priority: '0.8', changefreq: 'monthly' },
  { url: '/publications', priority: '0.9', changefreq: 'monthly' },
  { url: '/contact', priority: '0.5', changefreq: 'yearly' },
];

function SitemapXML() {
  return null;
}

export async function getServerSideProps({ res }) {
  const publicationsPath = path.join(process.cwd(), 'data', 'publications.json');
  const publicationsData = JSON.parse(await fs.readFile(publicationsPath));

  const publicationUrls = publicationsData.map((pub) => ({
    url: `/publications?publication=${pub.id}`,
    priority: '0.7',
    changefreq: 'yearly',
  }));

  const allPages = [...staticPages, ...publicationUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default SitemapXML;
