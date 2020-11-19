import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHistory } from "./app-history";

import "./assets/style.scss";

import { getFilms } from "./components/localstorage/localstorage";
import Header from "./components/header/header";
import WelcomeComponent from "./components/welcome-component/welcome-component";
import Footer from "./components/footer/footer";
import MovieCard from "./components/movie-card/movie-card";
import Movie from "./components/movie/movie";
import NotFound from "./components/not-found-404/not-found-404";

const movies = getFilms();

const container = document.querySelector(".container");
const mainWrapper = document.createElement("main");
mainWrapper.className = "d-flex flex-wrap justify-content-around align-content-start";
mainWrapper.id = "content";

const header = new Header({ newMovieConfirmed: rewriteMovies });
container.appendChild(header.render());
container.appendChild(mainWrapper);

const welcomeComponent = new WelcomeComponent();
mainWrapper.appendChild(welcomeComponent.render());

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
        const listMovies = movies.map(movie => new MovieCard({
            movie: movie,
            movieEdited: rewriteMovies
        }));
        listMovies.forEach( movie =>  mainWrapper.appendChild(movie.render()))
    } else if (path.startsWith("/list-")) {
        const id = path.substr("/list-".length)
        if (id) {
            mainWrapper.innerHTML = "";
            const currentMovie = movies.find(movie => movie.id === id)
            const movie = new Movie(currentMovie);
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

function rewriteMovies() {
    mainWrapper.innerHTML = "";
    const movies = getFilms();
    const listMovies = movies.map(movie => new MovieCard({
        movie: movie,
        movieEdited: rewriteMovies
    }));
    listMovies.forEach( movie =>  mainWrapper.appendChild(movie.render()))
}
