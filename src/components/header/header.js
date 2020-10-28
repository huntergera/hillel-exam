import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import { getHistory } from "../../app-history";

const history = getHistory();

class Header {
    constructor() {
        this.header = renderTemplate(html);
        this.allFilmsButton = document.querySelector(".all-movies")
    }

    allFilmsOnClick(event) {
        if (event.target.tagName !== "A") return;

        event.preventDefault();
        history.push(event.target.href);
    }

    render() {
        this.allFilmsButton.addEventListener("click", this.allFilmsOnClick.bind(this));
        return this.header;
    }
}

export default Header;
