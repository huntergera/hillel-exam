import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import {getFilms, setFilmsToLocalStorage} from "../localstorage/localstorage";
import {v4 as uuidv4} from "uuid";

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
        this.likePlus = movie.likePlus || 0;
        this.likeMinus = movie.likeMinus || 0;
        this.isLiked = movie.isLiked || "";
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
            composer: this.composer,
            likePlus: this.likePlus,
            likeMinus: this.likeMinus,
            isLiked: this.isLiked
        })
    }

    setDisabledButtons(likeButtons) {
        for(let button of likeButtons) {
            button.disabled = true;
        }
    }

    addLike(likeButtons) {
        for(let button of likeButtons) {
            button.addEventListener("click", (event) => {
                if (button.contains(event.target)) {
                    button.dataset.count++

                    const newFilm = {
                        likePlus: this.movie.querySelector(".btn-like").dataset.count || "0",
                        likeMinus: this.movie.querySelector(".btn-dislike").dataset.count || "0",
                        isLiked: true,
                    };

                    this.setDisabledButtons(likeButtons);

                    const filmsArray = getFilms();
                    const filmEdited = filmsArray.find(movie => movie.id === this.id);
                    if (filmEdited) {
                        Object.assign(filmEdited, newFilm)
                    } else {
                        filmsArray.push(newFilm);
                    }

                    setFilmsToLocalStorage(filmsArray);
                }
            })
        }
    }

    render() {
        const likeButtons = this.movie.querySelectorAll(".btn-text");
        this.addLike(likeButtons);
        if (this.isLiked) {
            this.setDisabledButtons(likeButtons)
        }

        return this.movie
    }
}

export default Movie;
