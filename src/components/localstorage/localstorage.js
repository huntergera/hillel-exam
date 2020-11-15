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

function setFilmsToLocalStorage(array) {
    console.log(array)
    const moviesJson = JSON.stringify(array);
    localStorage.setItem('movies', moviesJson);
}

export { getFilms, setFilmsToLocalStorage };