import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHistory } from "./app-history";

import "./assets/style.scss";
import Header from "./components/header/header";
import WelcomeComponent from "./components/welcome-component/welcome-component";
import Footer from "./components/footer/footer";
import ListMovie from "./components/list-movie/list-movie";
import List from "./components/list/list";
import LoginForm from "./components/login-form/login-form";

const container = document.querySelector(".container");
const mainWrapper = document.createElement("main");
mainWrapper.className = "d-flex flex-wrap justify-content-around align-items-start align-content-start";
mainWrapper.id = "content";

const header = new Header();
container.appendChild(header.render());
container.appendChild(mainWrapper);

const welcomeComponent = new WelcomeComponent();
mainWrapper.appendChild(welcomeComponent.render());

const footer = new Footer();
container.appendChild(footer.render());

const listMovie = new ListMovie();
//listMovie.render();
mainWrapper.appendChild(listMovie.render());

const history = getHistory();
const mainContentWrapper = document.querySelector("#content");

function renderRoute(path) {
    switch (path) {
        case "/":
            mainWrapper.innerText = "";
            container.appendChild(footer.render());
            break;
        case "/list":
            mainContentWrapper.innerHTML = "";
            break;
        case "/products":
            mainContentWrapper.innerText = "PRODUCTS";
            break;
        default:
            mainContentWrapper.innerText = "404";
            break;
    }
}


history.listen(listener => {
    renderRoute(listener.location.pathname);
});

// const form = new LoginForm();
// console.log(container)
// container.appendChild(form.render());

//
// const list = new List();
//container.appendChild(list.render());
;
// const rootLayout = new layout({header, form})