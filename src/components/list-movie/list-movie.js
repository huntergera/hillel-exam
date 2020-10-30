import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import movies from "../../movies.json";
import {getHistory} from "../../app-history";

const history = getHistory();

class ListMovie {
    constructor() {
        this.listMovie = renderTemplate(html, { movies } );
    }

    filmOpen(event) {
        if (event.target.dataset.id = "more"){
            event.preventDefault();
            history.push(event.target.href);
        }
    }

    render() {
        this.listMovie.addEventListener("click", this.filmOpen.bind(this));
        return this.listMovie
    }
}

export default ListMovie;
