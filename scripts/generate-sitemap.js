// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// List all your public URLs here
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'yearly', priority: 0.5 },
];

async function buildSitemap() {
  // `hostname` is prepended to each URL
  const stream = new SitemapStream({ hostname: 'https://cursedwardenlabs.com' });
  const writeStream = createWriteStream('public/sitemap.xml');
  streamToPromise(stream.pipe(writeStream));  // ← write to public/sitemap.xml
  pages.forEach(page => stream.write(page));
  stream.end();
}

buildSitemap().catch(console.error);
