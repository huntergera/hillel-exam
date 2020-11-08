import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";

class ModalForm {
    constructor(movie) {
        this.form = renderTemplate(html, { movie } );
    }

    hide(event) {
        if (!this.form.querySelector('.modal-dialog').contains(event.target)
            || this.form.querySelector(".close").contains(event.target)
            || event.target.hasAttribute('data-dismiss')
        ) {
            this.form.remove();
        }
    }

    render() {
        document.body.appendChild(this.form);

        this.form.addEventListener('click',  event => this.hide(event))
    }
}

export default ModalForm;
