import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";

class ModalForm {
    constructor(movie) {
        this.form = renderTemplate(html, { movie } );
    }

    hide(event) {
        //const hideButtons = this.form.querySelectors

        if (!this.form.querySelector('.modal-dialog').contains(event.target)
            || this.form.querySelector(".close").contains(event.target)
        ) {
            this.form.remove();
        }
    }

    render() {
        document.body.appendChild(this.form);

        this.form.addEventListener('click',  event => this.hide(event).bind(this))
    }
}

export default ModalForm;
