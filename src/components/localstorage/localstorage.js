import moviesArray from "../../movies.json"

function getFilmsFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem('movies'));
    } catch (e) {
        return [];
    }
}

function getFilms() {
    let movies = [];

    if (getFilmsFromLocalStorage() !== null) {
        movies = getFilmsFromLocalStorage()
    } else {
        movies = JSON.stringify(moviesArray);
        localStorage.setItem('movies', movies);
    }

    return movies;
}

export default getFilms;