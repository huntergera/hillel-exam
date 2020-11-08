import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import {getHistory} from "../../app-history";
import ModalForm from "../modal-form/modal-form";

const history = getHistory();

class MovieCard {
    constructor(movie) {
        this.id = movie.id || "";
        this.image = movie.image || "";
        this.title = movie.title || "";
        this.text = movie.text || "";
        this.rating = movie.rating || "";
        this.movie = renderTemplate(html,{
            id: this.id,
            image: this.image,
            title: this.title,
            text: this.text,
            rating: this.rating
        })
    }

    openFilm(event) {
        event.preventDefault();
        console.log("Open film")
    }

    deleteFilm(event) {
        event.preventDefault();
        console.log("Delete film")
    }

    editFilm() {
        const editMovie = new ModalForm();
        editMovie.render();
    }

    render() {
        const main = document.querySelector("main");
        main.appendChild(this.movie);

        const editButton = this.movie.querySelector(".btn-edit");
        editButton.addEventListener("click", this.editFilm.bind(this))

        const openButton = this.movie.querySelector(".more");
        openButton.addEventListener("click", this.openFilm.bind(this))

        const deleteButton = this.movie.querySelector(".btn-delete");
        deleteButton.addEventListener("click", this.deleteFilm.bind(this))

    }
}

export default MovieCard;
