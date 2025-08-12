// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

// List all your public URLs here with SEO-optimized priorities
const pages = [
  { 
    url: '/', 
    changefreq: 'weekly', 
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0] // Today's date
  },
  { 
    url: '/about', 
    changefreq: 'monthly', 
    priority: 0.9,
    lastmod: '2024-07-22' // Last profile update
  },
  { 
    url: '/services', 
    changefreq: 'weekly', 
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/contact', 
    changefreq: 'monthly', 
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
];

function generateSitemap() {
  const hostname = 'https://cursedwardenlabs.com';
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach(page => {
    xml += `
  <url>
    <loc>${hostname}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  // Ensure build directory exists
  const buildDir = path.join(__dirname, '../build');
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }

  // Write sitemap to build directory
  const sitemapPath = path.join(buildDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  
  console.log('Sitemap generated successfully at:', sitemapPath);
}

generateSitemap();
