import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import movies from "../../movies.json"

class Movie {
    constructor() {
        this.movie = renderTemplate(html, { movies } );
    }

    render() {
        return this.movie
    }
}

export default Movie;
