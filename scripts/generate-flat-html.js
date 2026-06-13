const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');

const skipDirs = ['static'];

try {
  const entries = fs.readdirSync(BUILD_DIR, { withFileTypes: true });
  let count = 0;

  entries.forEach(entry => {
    if (!entry.isDirectory()) return;
    if (skipDirs.includes(entry.name)) return;

    const indexPath = path.join(BUILD_DIR, entry.name, 'index.html');
    if (!fs.existsSync(indexPath)) return;

    const flatPath = path.join(BUILD_DIR, `${entry.name}.html`);
    fs.copyFileSync(indexPath, flatPath);
    count++;
  });

  console.log(`✅ Flat HTML: ${count} files generated`);
} catch (err) {
  console.error('❌ Flat HTML error:', err.message);
}