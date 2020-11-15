import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";

class ModalForm {
    constructor(movie) {
        this.form = renderTemplate(html);
        this.movie = movie || "";
    }

    hide(event) {
        if (!this.form.querySelector('.modal-dialog').contains(event.target)
            || this.form.querySelector(".close").contains(event.target)
            || event.target.hasAttribute('data-dismiss')
        ) {
            this.form.remove();
        }
    }

    setInputsValue() {
        this.form.querySelector("#title").value = this.movie.title;
        this.form.querySelector("#titleOriginal").value = this.movie.titleOriginal;
        this.form.querySelector("#image").value = this.movie.image;
        this.form.querySelector("#year").value = this.movie.year;
        this.form.querySelector("#country").value = this.movie.country;
        this.form.querySelector("#slogan").value = this.movie.slogan;
        this.form.querySelector("#director").value = this.movie.director;
        this.form.querySelector("#producer").value = this.movie.producer;
        this.form.querySelector("#scenario").value = this.movie.scenario;
        this.form.querySelector("#roles").value = this.movie.roles;
        this.form.querySelector("#operator").value = this.movie.operator;
        this.form.querySelector("#composer").value = this.movie.composer;
        this.form.querySelector("#rating").value = this.movie.rating;
        this.form.querySelector("#text").value = this.movie.text;
    }

    render() {
        document.body.appendChild(this.form);
        this.setInputsValue()

        this.form.addEventListener('click',  event => this.hide(event))
    }
}

export default ModalForm;
