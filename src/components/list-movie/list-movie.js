import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
import movies from "../../movies.json"

// const movies = [
//     { title: "/users", text: "Users" },
//     { title: "/products", text: "Products" }
// ];

class ListMovie {
    constructor() {
        this.listMovie = renderTemplate(html, { movies } );
    }

    render() {
        console.log(this.listMovie)
        return this.listMovie;
    }
}

export default ListMovie;
