import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import {getFilms, setFilmsToLocalStorage} from "../localstorage/localstorage";
import {setEditedFilmsToLocalStorage} from "../../localstorage-utils"

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
        this.movie = renderTemplate(html,movie)
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

                    setEditedFilmsToLocalStorage({
                        film: newFilm,
                        id: this.id
                    });
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
