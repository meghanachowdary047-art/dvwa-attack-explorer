const fs = require('fs');
const path = require('path');

try {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Extract all content between <script> and </script> tags (case-insensitive, non-greedy)
  const regex = /<script>([\s\S]*?)<\/script>/gi;
  let match;
  let blockCount = 0;
  let hasErrors = false;

  while ((match = regex.exec(html)) !== null) {
    blockCount++;
    const js = match[1];
    
    // Ignore the sound effects block and particle canvas block (which are simple) if needed,
    // but validating all is safer.
    try {
      new Function(js);
      console.log(`[PASS] Script block ${blockCount} is syntactically valid.`);
    } catch (e) {
      hasErrors = true;
      console.error(`[FAIL] Syntax error in script block ${blockCount}:`);
      console.error(e.message);
      
      // Let's print the first few lines of the error stack
      console.error(e.stack);
    }
  }

  if (!hasErrors) {
    console.log("All script blocks parsed successfully. No syntax errors detected.");
  }
} catch (err) {
  console.error("Failed to run syntax validation:", err);
}
