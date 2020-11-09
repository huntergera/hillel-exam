import moviesArray from "../../movies.json"

class LocalStorage {
    constructor() {
        this.movies;
    }

    getFilmsFromLocalStorage() {
        try {
            return JSON.parse(localStorage.getItem('movies'));
        } catch (e) {
            return [];
        }
    }

    render() {
        if (this.getFilmsFromLocalStorage() !== null) {
            this.movies = this.getFilmsFromLocalStorage()
        } else {
            this.movies = moviesArray;
            const movies = JSON.stringify(moviesArray);
            localStorage.setItem('movies', movies);
        }

        return this.movies;
    }
}

export default LocalStorage;