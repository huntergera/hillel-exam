import html from "./index.html";
import "./style.scss";
import template from "lodash.template";
import {getHistory} from "../../app-history";
import ModalForm from "../modal-form/modal-form";

const history = getHistory();
const renderTemplate = template(html);

class MovieCard {
    constructor(movie) {
        this.id = movie.id || "";
        this.image = movie.image || "";
        this.title = movie.title || "";
        this.text = movie.text || "";
        this.rating = movie.rating || "";
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
        const cardElements = renderTemplate({
            id: this.id,
            image: this.image,
            title: this.title,
            text: this.text,
            rating: this.rating
        })
        const main = document.querySelector("main");

        const container = document.createElement("div");
        container.innerHTML = cardElements;
        main.appendChild(container.firstChild);

        //this.movieCard.addEventListener("click", this.filmOpen.bind(this));
        const editButtons = document.querySelectorAll(":scope .card .btn-edit");

        editButtons.forEach(button => {

            button.addEventListener("click", this.editFilm.bind(this))
        })

    }
}

export default MovieCard;
