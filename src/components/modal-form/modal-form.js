import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";

class ModalForm {
    constructor(movie) {
        this.form = renderTemplate(html, { movie } );
    }

    hide(button) {

        const closeModal = document.querySelectorAll(':scope .modal .close, .modal-backdrop');
        const modal = document.querySelector('#modal-form');

        button.addEventListener('click', function () {
            modal.remove();
        })

        for (let button of closeModal) {
        }
    }

    render() {
        document.body.appendChild(this.form);
        const closeModal = document.querySelector(':scope .modal .close');

        this.hide(closeModal);
        //this.hide(modalBackdrop);
    }

}

export default ModalForm;
