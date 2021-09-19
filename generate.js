const fs = require("fs");
const md = require("markdown-it");

const mit = md({
    html: true,
    breaks: true,
});

const baseHtml = fs.readFileSync("base/base.html", "utf-8");

for (file of fs.readdirSync("pages")) {
    const md = fs.readFileSync("pages/" + file, "utf-8");
    const html = mit.render(md);

    fs.writeFileSync(
        "generated/" + file.replace(".md", ".html"),
        baseHtml.replace("{{ content }}", html)
    );
}
