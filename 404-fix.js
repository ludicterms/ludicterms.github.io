const fs = require('fs');
const path = require('path');

const fileToPatch = path.join(__dirname, 'build', '404.html');

try {
  if (fs.existsSync(fileToPatch)) {
    let content = fs.readFileSync(fileToPatch, 'utf8');

    // This CSS block overrides the rigid spacing, centers the elements, 
    // and adjusts the button width so text never spills out.
    const customStyles = `
<style>
  .euaJAU {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    width: 100% !important;
    max-width: 600px !important;
    margin: 100px auto !important;
    box-sizing: border-box !important;
  }
  .euaJAU h1 { font-size: 120px !important; color: #006838 !important; margin: 0 !important; letter-spacing: 5px !important; }
  .euaJAU h3 { font-size: 45px !important; margin: 0 !important; }
  .euaJAU h4 { font-size: 30px !important; margin: 0 !important; }
  
  /* Fix the button boundaries and ensure the phrase fits */
  .btnDark.centered, .bVtFAk a {
    width: auto !important;
    min-width: 180px !important;
    height: auto !important;
    padding: 12px 24px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
  }
</style>
`;

    // Inject our rules right before the head element closes
    content = content.replace('</head>', `${customStyles}</head>`);

    fs.writeFileSync(fileToPatch, content, 'utf8');
    console.log('--- 404 Layout Reset Complete ---');
  }
} catch (e) {
  console.error('Failed to patch 404 layout:', e);
}