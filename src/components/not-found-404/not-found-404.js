import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";

class NotFound {
    constructor() {
        this.notFound = renderTemplate(html)
    }

    render() {
        return this.notFound;
    }
}

export default NotFound;