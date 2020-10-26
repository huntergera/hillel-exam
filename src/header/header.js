import html from "./index.html";
import "./style.scss";
class Header {
    constructor() {
    }

    render() {
        const container = document.createElement("div");
        container.innerHTML = html;

        document.body.appendChild(container.firstChild);
    }
}

export default Header;
