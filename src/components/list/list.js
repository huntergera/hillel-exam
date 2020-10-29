// import faker from "faker";
// import { format } from "date-fns";
// import template from "lodash.template";
// import html from "./index.html";
//
// const templateRenderer = template(html);
//
// console.log(typeof templateRenderer);
//
// function createFakeUser() {
//     return {
//         name: faker.name.firstName(),
//         birthDate: format(faker.date.past(), "yyyy-MM-dd")
//     };
// }
//
//
// class List {
//     constructor() {
//         this.title = "My List";
//
//         this.users = [];
//
//         for (let i = 0; i < 10; i++) {
//             const user = createFakeUser();
//             this.users.push(user);
//         }
//
//         console.log(this.users);
//     }
//
//     render() {
//         const t = templateRenderer({
//             title: this.title,
//             users: this.users
//         });
//
//         const container = document.createElement("div");
//         container.innerHTML = t;
//
//         const btn = container.querySelector("button");
//         if (btn !== null) {
//             btn.addEventListener("click", () => alert("BTN!!!"));
//         }
//
//         document.body.appendChild(container.firstChild);
//     }
// }
//
// export default List;

import html from "./index.html";
import {renderTemplate} from "../../template-utils";
import { getHistory } from "../../app-history";

const history = getHistory();

const links = [
    { href: "/users", name: "Users" },
    { href: "/products", name: "Products" }
]

class Menu {
    constructor() {
        this.menu = renderTemplate(html, { links });
        //this.menu = renderTemplate(html);
        console.log(this.menu)
    }

    onClick(event) {
        if (event.target.tagName !== "A") return;

        event.preventDefault();
        history.push(event.target.href);
    }

    render() {
        //this.menu.addEventListener("click", this.onClick.bind(this));
        return this.menu;
    }
}

export default Menu;