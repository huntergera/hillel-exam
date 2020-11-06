import html from "./index.html";
import $ from 'jquery';
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import { getHistory } from "../../app-history";
import ModalForm from "../modal-form/modal-form";

const history = getHistory();

class Header {
    constructor() {
        this.header = renderTemplate(html);
    }

    allFilmsOnClick(event) {
        if (event.target.dataset.id === "all-movies"){
            event.preventDefault();
            history.push(event.target.href);
        }
    }

    addNewFilm(event) {
        if (event.target.dataset.id === "new-movie"){
            event.preventDefault();
            const newMovie = new ModalForm();
            newMovie.render();
        }
    }

    render() {
        console.log(typeof this.header)
        this.header.addEventListener("click", this.allFilmsOnClick.bind(this));
        this.header.addEventListener("click", this.addNewFilm.bind(this));
        return this.header;
    }
}

export default Header;
