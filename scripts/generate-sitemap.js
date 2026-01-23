const fs = require('fs');
const path = require('path');

// 10 products currently available
const products = [
  'mbp14-m5-16-512',
  'mbp14-m5-16-1tb',
  'mbp14-m5-24-1tb',
  'mbp14-m4pro-24-512',
  'mbp14-m4pro-24-1tb',
  'mbp14-m4max-36-1tb',
  'mbp16-m4pro-24-512',
  'mbp16-m4pro-48-512',
  'mbp16-m4max-36-1tb',
  'mbp16-m4max-48-1tb'
];

// 35 countries with complete price data
const countries = [
  'US', 'CA', 'GB', 'CZ', 'MX',
  'TH', 'HK', 'JP', 'MY', 'SG',
  'VN', 'TW', 'AE', 'AU', 'NZ',
  'KR', 'IN', 'PL', 'LU', 'CN',
  'PH', 'DE', 'AT', 'FR', 'ES',
  'NL', 'IT', 'PT', 'IE', 'DK',
  'SE', 'NO', 'TR', 'CL', 'BR'
];

// Your production URL
const baseUrl = 'https://global-tech-price.vercel.app';

const currentDate = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/vat-refund-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- Product x Country Pages (350 total) -->
`;

let pageCount = 0;

products.forEach(productId => {
  countries.forEach(country => {
    sitemap += `  <url>
    <loc>${baseUrl}/products/${productId}/${country}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    pageCount++;
  });
});

sitemap += `</urlset>`;

// Write to public folder for Next.js
const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemap);

console.log(`✅ Sitemap generated successfully!`);
console.log(`   Total pages: ${pageCount + 3} (3 static + ${pageCount} product pages)`);
console.log(`   Location: public/sitemap.xml`);
console.log(`\n⚠️  Don't forget to update the baseUrl in scripts/generate-sitemap.js with your actual domain!`);
