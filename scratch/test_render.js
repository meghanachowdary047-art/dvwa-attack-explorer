const fs = require('fs');
const path = require('path');

// Mock browser DOM environment
global.window = {
  location: { hash: '#/' },
  addEventListener: () => {},
  scrollTo: () => {}
};

global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

const elements = {};
global.document = {
  getElementById: (id) => {
    if (!elements[id]) {
      elements[id] = {
        innerText: '',
        innerHTML: '',
        className: '',
        addEventListener: () => {},
        getContext: () => ({
          clearRect: () => {},
          beginPath: () => {},
          arc: () => {},
          fill: () => {},
          stroke: () => {},
          moveTo: () => {},
          lineTo: () => {}
        })
      };
    }
    return elements[id];
  },
  addEventListener: () => {}
};

global.lucide = {
  createIcons: () => {}
};

global.tailwind = {
  config: {}
};

global.requestAnimationFrame = () => {};

try {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Extract and combine the JavaScript script contents
  const regex = /<script>([\s\S]*?)<\/script>/gi;
  let match;
  let blockCount = 0;

  // Combine the script blocks
  let code = '';
  while ((match = regex.exec(html)) !== null) {
    blockCount++;
    code += match[1] + '\n';
  }

  // Execute the combined code
  code += `
    global.updateHeaderCounters = updateHeaderCounters;
    global.renderPage = renderPage;
  `;
  eval(code);
  console.log(`[EVAL PASS] Evaluated ${blockCount} script blocks successfully.`);

  // Trigger the render
  console.log("\nTriggering updateHeaderCounters()...");
  updateHeaderCounters();
  console.log("Triggering renderPage()...");
  renderPage();

  console.log("\n--- Render Results ---");
  console.log("nav-home className:", elements['nav-home'].className);
  console.log("explored-counter innerText:", elements['explored-counter'].innerText);
  console.log("router-view innerHTML length:", elements['router-view'].innerHTML.length);
  
  if (elements['router-view'].innerHTML.length > 0) {
    console.log("router-view innerHTML preview:\n", elements['router-view'].innerHTML.substring(0, 500) + "...");
  } else {
    console.log("WARNING: router-view innerHTML is empty!");
  }

} catch (err) {
  console.error("Runtime error during evaluation:");
  console.error(err);
}
