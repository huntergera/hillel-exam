import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./header/header";
import WelcomeComponent from "./welcome-component/welcome-component";
import Footer from "./footer/footer";
import ListMovie from "./list-movie/list-movie";
import List from "./list/list";

const header = new Header();
header.render();

const welcomeComponent = new WelcomeComponent();
welcomeComponent.render();

const footer = new Footer();
footer.render();

const listMovie = new ListMovie();
listMovie.render();

// const form = new LoginForm();
// form.render();
//
// const list = new List();
// list.render();
// const rootLayout = new layout({header, form})

const allMoviesButton = document.querySelector(".all-movies");
allMoviesButton.addEventListener("click", function (e) {
    e.preventDefault();
    header.urlChange();
});

window.addEventListener('popstate', function (event) {
    console.log(event.state);
});