import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";

class Footer {
    constructor() {
        this.footer = renderTemplate(html)
    }

    render() {
        return this.footer;
    }
}

export default Footer;
