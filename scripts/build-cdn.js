const fs = require("fs");
const path = require("path");

const INPUT = path.join(__dirname, "../index.html");
const OUTPUT = path.join(__dirname, "../dist/index.html");

const CDN_BASE =
  "https://cdn.jsdelivr.net/gh/RizqullahY/scrape-result-reader-simple-web";

let html = fs.readFileSync(INPUT, "utf8");

// replace JS lokal
html = html.replace(
  /src=["']\.\/js\/(.*?)["']/g,
  `src="${CDN_BASE}/js/$1"`
);

// replace CSS lokal
html = html.replace(
  /href=["']\.\/src\/(.*?)["']/g,
  `href="${CDN_BASE}/src/$1"`
);

// pastikan folder dist ada
fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });

// tulis hasil
fs.writeFileSync(OUTPUT, html);

console.log("✅ index.html berhasil dikonversi ke CDN version");
