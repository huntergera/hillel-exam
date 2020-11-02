import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import {getHistory} from "../../app-history";
import ModalForm from "../modal-form/modal-form";

const history = getHistory();

class MovieCard {
    constructor(movie) {
        // this.id = movie.id || "",
        // this.image = movie.image || "";
        // this.title = movie.title || "";
        // this.description = movie.description || "";
        // this.rating = movie.rating || "";

        this.movie = {};
        this.movieCard = renderTemplate(html, { movie } );
    }

    filmOpen(event) {
        if (event.target.dataset.id === "more"){
            event.preventDefault();
            history.push(event.target.href);
        }
    }

    editFilm() {
        const editMovie = new ModalForm();
        editMovie.render();
    }

    render() {
        // const t = templateRenderer({
        //     id: this.id,
        //     image: this.image,
        //     title: this.title,
        //     description: this.description,
        //     rating: this.rating
        // })
        //const main = document.querySelector("main");

        const container = document.createElement("div");
        container.innerHTML = this.movieCard;
        console.log(container)
        console.log(this.movieCard)
        //
        // main.appendChild(container.firstChild);

        this.movieCard.addEventListener("click", this.filmOpen.bind(this));

        const editButton = this.movieCard.querySelector('.btn-edit');
        editButton.addEventListener("click", this.editFilm());

        return container
    }
}

export default MovieCard;
