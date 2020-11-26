import {getFilms, setFilmsToLocalStorage} from "./components/localstorage/localstorage";

export function setEditedFilmsToLocalStorage(props) {
    const filmsArray = getFilms();
    const filmEdited = filmsArray.find(movie => movie.id === props.id);

    if (filmEdited) {
        Object.assign(filmEdited, props.film)
    } else {
        filmsArray.push(props.film);
    }

    setFilmsToLocalStorage(filmsArray);
}

