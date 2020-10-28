import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import movies from "../../movies.json"

class ListMovie {
    constructor() {
        this.listMovie = renderTemplate(html, movies);
    }

    render() {
        console.log(this.listMovie)
        return this.listMovie;
    }
}

export default ListMovie;
