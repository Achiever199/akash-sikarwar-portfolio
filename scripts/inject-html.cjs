const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../dist/client/assets');
const files = fs.readdirSync(assetsDir);

const js = files.find(f => f.startsWith('index-') && f.endsWith('.js') && !f.includes('bdMChdF0'));
const css = files.find(f => f.endsWith('.css'));
const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Akash Sikarwar — Software Developer & ML Enthusiast</title>
    <meta name="description" content="Portfolio of Akash Sikarwar — Full Stack Developer, ML Enthusiast at MMMUT Gorakhpur." />
    <link rel="stylesheet" href="/assets/${css}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${mainJs}"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(__dirname, '../dist/client/index.html'), html);
console.log('✅ index.html injected with:', mainJs, css);
