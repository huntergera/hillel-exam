import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import movies from "../../movies.json"

class ModalForm {
    constructor() {
        this.form = renderTemplate(html, { movies } );
    }

    render() {
        return this.form
    }
}

export default ModalForm;
