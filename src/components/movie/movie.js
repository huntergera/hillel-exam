import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";

class Movie {
    constructor(movie) {
        this.id = movie.id || "";
        this.image = movie.image || "";
        this.title = movie.title || "";
        this.titleOriginal = movie.titleOriginal || "";
        this.text = movie.text || "";
        this.rating = movie.rating || "";
        this.year = movie.year || "";
        this.country = movie.country || "";
        this.slogan = movie.slogan || "";
        this.director = movie.director || "";
        this.scenario = movie.scenario || "";
        this.producer = movie.producer || "";
        this.operator = movie.operator || "";
        this.composer = movie.composer || "";
        this.movie = renderTemplate(html,{
            id: this.id,
            image: this.image,
            title: this.title,
            titleOriginal: this.titleOriginal,
            text: this.text,
            rating: this.rating,
            year: this.year,
            country: this.country,
            slogan: this.slogan,
            director: this.director,
            scenario: this.scenario,
            producer: this.producer,
            operator: this.operator,
            composer: this.composer
        })
    }

    render() {
        const main = document.querySelector("main");
        main.appendChild(this.movie);
    }
}

export default Movie;
