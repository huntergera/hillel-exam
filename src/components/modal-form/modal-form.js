import { v4 as uuidv4 } from 'uuid';

import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import { getFilms, setFilmsToLocalStorage } from "../localstorage/localstorage";

class ModalForm {
    constructor(props) {
        this.form = renderTemplate(html);
        this.onEdited = props.newMovieConfirmed || props.movieEdited;
        this.movie = props.editedInfo || "";
        this.modalTitle = props.modalTitle;
    }

    hide(event) {
        if (!this.form.querySelector('.modal-dialog').contains(event.target)
            || this.form.querySelector(".close").contains(event.target)
            || event.target.hasAttribute('data-dismiss')
        ) {
            this.form.remove();
        }
    }

    confirmChanges(event) {
        event.preventDefault();

        const newFilm = Object.assign({}, {
            id: uuidv4(),
            title: this.form.querySelector("#title").value || "-",
            titleOriginal: this.form.querySelector("#titleOriginal").value || "-",
            image: this.form.querySelector("#image").value || "https://dummyimage.com/210x290/000/fff.jpg&text=Coming+soon",
            year: this.form.querySelector("#year").value || "-",
            country: this.form.querySelector("#country").value || "-",
            slogan: this.form.querySelector("#slogan").value || "-",
            director: this.form.querySelector("#director").value || "-",
            producer: this.form.querySelector("#producer").value || "-",
            scenario: this.form.querySelector("#scenario").value || "-",
            roles: this.form.querySelector("#roles").value || "-",
            operator: this.form.querySelector("#operator").value || "-",
            composer: this.form.querySelector("#composer").value || "-",
            rating: this.form.querySelector("#rating").value || "-",
            text: this.form.querySelector("#text").value || "-",
            likePlus: 0,
            likeMinus: 0,
            isLiked:  false
        });

        const filmsArray = getFilms();
        const filmEdited = filmsArray.find(movie => movie.id === this.movie.id);
        if (filmEdited) {
            Object.assign(filmEdited, newFilm)
        } else {
            filmsArray.push(newFilm);
        }

        setFilmsToLocalStorage(filmsArray);
        this.hide(event);
        this.onEdited();
    }

    setValues() {
        this.form.querySelector(".modal-title").innerHTML = this.modalTitle;
        this.form.querySelector("#title").value = this.movie.title || "";
        this.form.querySelector("#titleOriginal").value = this.movie.titleOriginal || "";
        this.form.querySelector("#image").value = this.movie.image || "";
        this.form.querySelector("#year").value = this.movie.year || "";
        this.form.querySelector("#country").value = this.movie.country || "";
        this.form.querySelector("#slogan").value = this.movie.slogan || "";
        this.form.querySelector("#director").value = this.movie.director || "";
        this.form.querySelector("#producer").value = this.movie.producer || "";
        this.form.querySelector("#scenario").value = this.movie.scenario || "";
        this.form.querySelector("#roles").value = this.movie.roles || "";
        this.form.querySelector("#operator").value = this.movie.operator || "";
        this.form.querySelector("#composer").value = this.movie.composer || "";
        this.form.querySelector("#rating").value = this.movie.rating || "";
        this.form.querySelector("#text").value = this.movie.text || "";
    }

    render() {
        document.body.appendChild(this.form);
        this.setValues();

        this.form.addEventListener('click',  event => this.hide(event))

        const confirmButton = this.form.querySelector("#confirm");
        confirmButton.addEventListener("click", this.confirmChanges.bind(this))
    }
}

export default ModalForm;
