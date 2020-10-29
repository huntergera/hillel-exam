import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import { getHistory } from "../../app-history";

const history = getHistory();

class Header {
    constructor() {
        this.header = renderTemplate(html);
    }

    allFilmsOnClick(event) {
        if (event.target.classList.contains("all-movies")){
            event.preventDefault();
            history.push(event.target.href);
        }

    }

    render() {
        this.header.addEventListener("click", this.allFilmsOnClick.bind(this));
        return this.header;
    }
}

export default Header;
