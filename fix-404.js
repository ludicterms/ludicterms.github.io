const fs = require('fs');
const path = require('path');

const fileToPatch = path.join(__dirname, 'build', '404.html');

try {
  if (fs.existsSync(fileToPatch)) {
    let content = fs.readFileSync(fileToPatch, 'utf8');
    fs.writeFileSync(fileToPatch, content, 'utf8');
    console.log('--- 404 Layout Reset Complete ---');
  }
} catch (e) {
  console.error('Failed to patch 404 layout:', e);
}