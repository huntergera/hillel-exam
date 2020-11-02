import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHistory } from "./app-history";

import "./assets/style.scss";
import movies from "./movies.json";

import Header from "./components/header/header";
import WelcomeComponent from "./components/welcome-component/welcome-component";
import Footer from "./components/footer/footer";
import MovieCard from "./components/movie-card/movie-card";
import Movie from "./components/movie/movie";
import ModalForm from "./components/modal-form/modal-form";

const container = document.querySelector(".container");
const mainWrapper = document.createElement("main");
mainWrapper.className = "d-flex flex-wrap justify-content-around align-items-start align-content-start";
mainWrapper.id = "content";

const header = new Header();
container.appendChild(header.render());
container.appendChild(mainWrapper);

const welcomeComponent = new WelcomeComponent();
mainWrapper.appendChild(welcomeComponent.render());

const listMovies = movies.map(movie => new MovieCard(movie));
console.log(listMovies)

const footer = new Footer();
container.appendChild(footer.render());

const history = getHistory();

function renderRoute(path) {
    switch (path) {
        case "/":
            mainWrapper.innerHTML = "";
            mainWrapper.appendChild(welcomeComponent.render());
            break;
        case "/list":
            mainWrapper.innerHTML = "";
            mainWrapper.appendChild(listMovies.forEach( movie => movie.render()));
            break;
        default:
            mainWrapper.innerText = "404";
            break;
    }
}

history.listen(listener => {
    renderRoute(listener.location.pathname);
});
renderRoute(history.location.pathname);

const movie = new Movie();
container.appendChild(movie.render());

const modalForm = new ModalForm();
