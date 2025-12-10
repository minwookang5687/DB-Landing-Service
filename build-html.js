// build-html.js
const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");
const glob = require("glob");

const MINIFY_CMD = `--collapse-whitespace --conservative-collapse --remove-comments --remove-optional-tags --minify-css true --minify-js true`;

// 📌 모든 *-row.html 파일 패턴 포함
const patterns = [
  "*-row.html",
  "*-*-row.html",
  "*-*-*-row.html"
];

patterns.forEach(pattern => {
  const files = glob.sync(pattern);

  files.forEach(file => {
    const base = path.basename(file);               
    const outName = base.replace("-row.html", ".html"); 
    const outPath = path.join(path.dirname(file), outName);

    console.log(`➡️  압축: ${file} → ${outPath}`);

    execSync(
      `html-minifier-terser ${file} -o ${outPath} ${MINIFY_CMD}`,
      { stdio: "inherit" }
    );
  });
});

console.log("✅ HTML auto build 완료");
