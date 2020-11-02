import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import movies from "../../movies.json"

class ModalForm {
    constructor(movie) {
        this.form = renderTemplate(html, { movie } );
    }

    render() {
        document.body.appendChild(this.form);
        this.hide();
    }

    hide() {
        const closeModal = document.querySelectorAll(':scope .modal .close, .modal-backdrop');
        const modal = document.querySelector('#modal-form');

        for (let button of closeModal) {
            button.addEventListener('click', function () {
                document.body.removeChild(modal);
            })
        }
    }
}

export default ModalForm;
