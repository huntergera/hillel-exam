import movies from "../../movies.json"

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
            this.movies = movies;
            const moviesArray = JSON.stringify(movies);
            localStorage.setItem('movies', moviesArray);
        }

        return this.movies;
    }
}

export default LocalStorage;