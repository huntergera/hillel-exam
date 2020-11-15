import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import { getFilms, setFilmsToLocalStorage } from "../localstorage/localstorage";

class ModalForm {
    constructor(movie) {
        this.form = renderTemplate(html);
        this.movie = movie || "";
    }

    hide(event) {
        if (!this.form.querySelector('.modal-dialog').contains(event.target)
            || this.form.querySelector(".close").contains(event.target)
            || this.form.querySelector("#confirm").contains(event.target)
            || event.target.hasAttribute('data-dismiss')
        ) {
            console.log(this.form)
            this.form.remove();
        }
    }

    confirmChanges(event) {
        event.preventDefault();

        const newFilm = Object.assign({}, {
            title: this.form.querySelector("#title").value || "-",
            titleOriginal: this.form.querySelector("#titleOriginal").value || "-",
            image: this.form.querySelector("#image").value || "https://dummyimage.com/177x265/000/fff.jpg&text=Coming+soon",
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
            text: this.form.querySelector("#text").value || "-"
        });

        const filmsArray = getFilms();
        const filmEdited = filmsArray.find(movie => movie.id === this.movie.id);
        if (filmEdited) {
            Object.assign(filmEdited, newFilm)
        } else {
            filmsArray.push(newFilm);
        }

        setFilmsToLocalStorage(filmsArray);
        this.hide(event)
    }

    setInputsValue() {
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
        this.setInputsValue();

        this.form.addEventListener('click',  event => this.hide(event))

        const confirmButton = this.form.querySelector("#confirm");
        confirmButton.addEventListener("click", this.confirmChanges.bind(this))
    }
}

export default ModalForm;
