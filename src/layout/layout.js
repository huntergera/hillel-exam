import html from "./index.html";
import "./style.scss";
class Layout {
    constructor(child) {
        this.header = header
    }

    render() {
        this.header.render()
        const container = document.createElement("div");
        container.innerHTML = html;

        document.body.appendChild(container.firstChild);
    }
}

export default Layout;
