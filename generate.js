const fs = require("fs");
const hljs = require("highlight.js");
const { readdir } = require("fs").promises;
const md = require("markdown-it");

const pagesFolder = "pages";
const resultFolder = "docs";

// Create the Markdown renderer.
const mit = md({
    html: true,
    breaks: true,
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            return '<pre class="hljs"><code>' +
               hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
               '</code></pre>';
        }
        return '';
    }
});

// Move the base.html and styles.css files to the docs folder.
for (const file of ["base.html", "styles.css"]) {
    fs.copyFileSync(`${__dirname}/${file}`, `${__dirname}/${resultFolder}/base/${file}`);
}

const baseHtml = fs.readFileSync(`${__dirname}/${resultFolder}/base/base.html`, "utf-8");

async function* getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = dir + "/" + dirent.name;
        if (dirent.isDirectory()) {
            yield* getFiles(res);
        } else {
            yield res;
        }
    }
}

async function run() {
    for await (fileentry of getFiles(pagesFolder)) {
        const file = String(fileentry.replace(pagesFolder + "/", ""));
        const md = fs.readFileSync(pagesFolder + "/" + file, "utf-8");
        const html = mit.render(md);

        // Generate the relative path to the base/ folder.
        const subfolderCount = (file.match(new RegExp("/", "g")) || []).length;
        let subfolder = "base/";
        for (let i = 0; i < subfolderCount; i++)
            subfolder = "../" + subfolder;

        // Write the file and replace all placeholders.
        fs.writeFileSync(
            resultFolder + "/" + file.replace(".md", ".html"),
            baseHtml
                .replace("{{ content }}", html)
                .replace("{{ title }}", file)
                .replace("{{ relativeDir }}", subfolder)
        );
    }
}

run();
