import html from "./index.html";
import "./style.scss";
class Header {
    constructor() {

    }

    render() {
        const container = document.createElement("div");
        container.innerHTML = html;
    }

    urlChange() {
        history.pushState(document.location, 'All movies','/#list');
    }
}

export default Header;
