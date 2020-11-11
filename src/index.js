import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHistory } from "./app-history";

import "./assets/style.scss";

import LocalStorage from "./components/localstorage/localstorage";
import Header from "./components/header/header";
import WelcomeComponent from "./components/welcome-component/welcome-component";
import Footer from "./components/footer/footer";
import MovieCard from "./components/movie-card/movie-card";
import Movie from "./components/movie/movie";
import ModalForm from "./components/modal-form/modal-form";
import NotFound from "./components/not-found-404/not-found-404";

const movies = new LocalStorage();
const moviesArray = movies.render();

const container = document.querySelector(".container");
const mainWrapper = document.createElement("main");
mainWrapper.className = "d-flex flex-wrap justify-content-around align-content-start";
mainWrapper.id = "content";

const header = new Header();
container.appendChild(header.render());
container.appendChild(mainWrapper);

const welcomeComponent = new WelcomeComponent();
mainWrapper.appendChild(welcomeComponent.render());

const listMovies = moviesArray.map(movie => new MovieCard(movie));

const footer = new Footer();
container.appendChild(footer.render());

const notFound = new NotFound();

const history = getHistory();

function renderRoute(path) {

    if (path === "/") {
        mainWrapper.innerHTML = "";
        mainWrapper.appendChild(welcomeComponent.render());
    } else if (path === "/list") {
        mainWrapper.innerHTML = "";
        listMovies.forEach( movie =>  mainWrapper.appendChild(movie.render()))
    } else if (path.startsWith("/list-")) {
        const id = path.substr("/list-".length)
        if (id) {
            //console.log(movie)
            const currentMovie = moviesArray.find(movie => movie.id === id)
            const movie = new Movie(currentMovie);
            console.log(currentMovie)
            //console.log(movie.render(currentMovie))
            mainWrapper.innerHTML = "";
            mainWrapper.appendChild(movie.render())
        }
    } else {
        mainWrapper.innerHTML = "";
        mainWrapper.appendChild(notFound.render());
    }
}

history.listen(listener => {
    renderRoute(listener.location.pathname);
});
renderRoute(history.location.pathname);

//container.appendChild(movie.render());

const modalForm = new ModalForm();
