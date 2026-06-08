const fs = require('fs');
const path = require('path');

// 1. Define your website's live URL
const BASE_URL = 'https://ludicterms.github.io'; 

// 2. Point to your compiled static build folder
const BUILD_DIR = path.join(__dirname, 'build');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      // Clean up the path to create a clean URL string
      let relativePath = path.relative(BUILD_DIR, filePath)
        .replace(/\\/g, '/') // Fix Windows backslashes
        .replace('index.html', ''); // Remove index.html for clean URLs
      
      fileList.push(relativePath);
    }
  });

  return fileList;
}

try {
  const htmlFiles = getHtmlFiles(BUILD_DIR);
  
  // 3. Build the XML structure
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${htmlFiles.map(urlPath => `  <url>
    <loc>${BASE_URL}/${urlPath}</loc>
    <changefreq>weekly</changefreq>
    <priority>${urlPath === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // 4. Save sitemap.xml directly into your build folder
  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemapXml);
  console.log(`✅ Success: sitemap.xml generated with ${htmlFiles.length} links!`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
}