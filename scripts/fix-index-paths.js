/**
 * Post-build: ensure script and link tags in index.html use absolute paths (leading /)
 * so that on Vercel, when serving index.html for /projects etc., the browser requests
 * /main-xxx.js instead of /projects/main-xxx.js and gets the real file.
 */
const fs = require('fs');
const path = require('path');

// Use project root (for Vercel: cwd is project root when npm run build runs)
const projectRoot = process.cwd();
const indexPath = path.join(projectRoot, 'dist', 'portfolio', 'browser', 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('fix-index-paths: index.html not found at', indexPath);
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf8');
// Add leading slash to script src and link href when they are relative (no protocol, no leading /)
html = html.replace(
  /(src|href)=["'](?![/#])([^"']*)["']/gi,
  (_, attr, url) => `${attr}="/${url}"`
);
// Fail build if any script/link still has a relative asset path (would cause MIME error on Vercel)
const bad = html.match(/(?:src|href)=["'](?!\/|https?:|#)([^"']*\.(?:js|css|ico))["']/gi);
if (bad && bad.length) {
  console.error('fix-index-paths: ERROR - relative asset paths still present (will cause MIME error):', bad);
  process.exit(1);
}
fs.writeFileSync(indexPath, html);
console.log('fix-index-paths: updated index.html to use absolute asset paths');
