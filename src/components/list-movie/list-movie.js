import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import movies from "../../movies.json"

class ListMovie {
    constructor() {
        this.listMovie = renderTemplate(html, { movies } );
        console.log(this.listMovie)
    }

    render() {
        return this.listMovie;
    }
}

export default ListMovie;
