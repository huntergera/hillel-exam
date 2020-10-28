import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHistory } from "./app-history";

import "./assets/style.scss";
import Header from "./components/header/header";
import WelcomeComponent from "./components/welcome-component/welcome-component";
import Footer from "./components/footer/footer";
import ListMovie from "./components/list-movie/list-movie";
import List from "./components/list/list";

const header = new Header();
header.render();

const welcomeComponent = new WelcomeComponent();
welcomeComponent.render();

const footer = new Footer();
footer.render();

const listMovie = new ListMovie();

const history = getHistory();
const mainContentWrapper = document.querySelector("#content");

function renderRoute(path) {
    switch (path) {
        case "/":
            mainContentWrapper.innerText = "";
            break;
        case "/list":
            let dfbg = listMovie.render();
            console.log(dfbg)

            const container = document.createElement("div");
            container.innerHTML = dfbg;
            mainContentWrapper.innerHTML = "";

            mainContentWrapper.appendChild(container.firstChild);
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
// form.render();
//
// const list = new List();
// list.render();
// const rootLayout = new layout({header, form})