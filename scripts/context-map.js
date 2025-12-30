const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../apps');
const OUTPUT = path.join(__dirname, '../CONTEXT.md');

function scan(dir) {
  const files = fs.readdirSync(dir);
  let results = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file === 'node_modules' || file === '.next') continue;
      results = results.concat(scan(fullPath));
    } else {
      if (file.endsWith('use-case.ts')) {
        results.push({ type: 'UseCase', path: fullPath });
      } else if (file.includes('repository')) {
        results.push({ type: 'Repository', path: fullPath });
      }
    }
  }
  return results;
}

const items = scan(ROOT);
const content = `# System Context Map\n\nGenerated: ${new Date().toISOString()}\n\n` +
  items.map(i => `- [${i.type}] ${path.relative(path.join(__dirname, '..'), i.path)}`).join('\n');

fs.writeFileSync(OUTPUT, content);
console.log(`Context map generated at ${OUTPUT}`);
