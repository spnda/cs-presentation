const fs = require("fs");
const { readdir } = require("fs").promises;
const { resolve } = require("path");
const md = require("markdown-it");

const pagesFolder = "pages";
const resultFolder = "docs";

const mit = md({
    html: true,
    breaks: true,
});

const baseHtml = fs.readFileSync("base/base.html", "utf-8");

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
        for (let i = 0; i <= subfolderCount; i++)
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
