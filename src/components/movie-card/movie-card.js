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

    filmOpen(event) {
        if (event.target.dataset.id === "more"){
            event.preventDefault();
            history.push(event.target.href);
        }
    }

    editFilm() {
        console.log(1)
        const editMovie = new ModalForm();
        editMovie.render();
    }

    render() {
        const main = document.querySelector("main");
        main.appendChild(this.movie);

        const editButton = this.movie.querySelector(".btn-edit");
        editButton.addEventListener("click", this.editFilm.bind(this))

    }
}

export default MovieCard;
