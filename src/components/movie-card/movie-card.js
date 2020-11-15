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
        this.titleOriginal = movie.titleOriginal || "";
        this.text = movie.text || "";
        this.rating = movie.rating || "";
        this.year = movie.year || "";
        this.country = movie.country || "";
        this.slogan = movie.slogan || "";
        this.director = movie.director || "";
        this.producer = movie.producer || "";
        this.scenario = movie.scenario || "";
        this.roles = movie.roles || "";
        this.operator = movie.operator || "";
        this.composer = movie.composer || "";
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
        history.push(event.target.href);
    }

    deleteFilm(event) {
        event.preventDefault();
        console.log("Delete film")
    }

    editFilm() {
        const editMovie = new ModalForm({
            id: this.id,
            title: this.title,
            titleOriginal: this.titleOriginal,
            image: this.image,
            text: this.text,
            rating: this.rating,
            year: this.year,
            country: this.country,
            slogan: this.slogan,
            director: this.director,
            producer: this.producer,
            scenario: this.scenario,
            roles: this.roles,
            operator: this.operator,
            composer: this.composer
        });
        editMovie.render();
    }

    render() {
        const editButton = this.movie.querySelector(".btn-edit");
        editButton.addEventListener("click", this.editFilm.bind(this))

        const openButton = this.movie.querySelector(".more");
        openButton.addEventListener("click", this.openFilm.bind(this))

        const deleteButton = this.movie.querySelector(".btn-delete");
        deleteButton.addEventListener("click", this.deleteFilm.bind(this))

        return this.movie
    }
}

export default MovieCard;
