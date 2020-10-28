import template from "lodash.template";

export function renderTemplate(html, data) {
    const tmpl = template(html);
    const string = tmpl(data);
    console.log(string)

    const container = document.createElement("div");
    container.innerHTML = string;

    return container.firstChild;
}