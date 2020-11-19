import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import { getHistory } from "../../app-history";
import ModalForm from "../modal-form/modal-form";

const history = getHistory();

class Header {
    constructor(props) {
        this.header = renderTemplate(html);
        this.newMovieConfirmed = props.newMovieConfirmed;
    }

    showAllFilms(event) {
        event.preventDefault();
        history.push(event.target.href);
    }

    addNewFilm = (event) => {
        event.preventDefault();

        const newMovie = new ModalForm({
            newMovieConfirmed: this.newMovieConfirmed,
            modalTitle: "Добавить новый фильм"
        });
        newMovie.render();
    }

    render() {
        const allFilmsButton = this.header.querySelector(".all-movies");
        allFilmsButton.addEventListener("click", this.showAllFilms)

        const addNewFilmButton = this.header.querySelector(".add-new-film");
        addNewFilmButton.addEventListener("click", this.addNewFilm)

        return this.header;
    }
}

export default Header;
