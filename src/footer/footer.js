import html from "./index.html";
import "./style.scss";
class Footer {
    constructor() {
    }

    render() {
        const container = document.createElement("div");
        container.innerHTML = html;
    }
}

export default Footer;
