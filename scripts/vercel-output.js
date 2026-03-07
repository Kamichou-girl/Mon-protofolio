/**
 * Prepare Build Output API for Vercel so that:
 * 1. Static files are served first (filesystem)
 * 2. All other routes fall back to index.html (SPA)
 * This fixes the MIME type error (JS requested but HTML returned).
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const staticSrc = path.join(root, 'dist', 'portfolio', 'browser');
const outDir = path.join(root, '.vercel', 'output');
const staticDir = path.join(outDir, 'static');

if (!fs.existsSync(staticSrc)) {
  console.error('vercel-output: dist/portfolio/browser not found. Run ng build first.');
  process.exit(1);
}

// Clean and create .vercel/output/static
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true });
}
fs.mkdirSync(staticDir, { recursive: true });

// Copy all built files to .vercel/output/static
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      copyRecursive(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}
copyRecursive(staticSrc, staticDir);

// Build Output API v3 config: filesystem first, then SPA fallback
const config = {
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/index.html' }
  ]
};
fs.writeFileSync(
  path.join(outDir, 'config.json'),
  JSON.stringify(config, null, 2),
  'utf8'
);

console.log('vercel-output: .vercel/output ready (Build Output API v3, handle: filesystem)');
