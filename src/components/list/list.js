import faker from "faker";
import { format } from "date-fns";
import template from "lodash.template";
import html from "./index.html";

const templateRenderer = template(html);

console.log(typeof templateRenderer);

function createFakeUser() {
    return {
        name: faker.name.firstName(),
        birthDate: format(faker.date.past(), "yyyy-MM-dd")
    };
}


class List {
    constructor() {
        this.title = "My List";

        this.users = [];

        for (let i = 0; i < 10; i++) {
            const user = createFakeUser();
            this.users.push(user);
        }

        console.log(this.users);
    }

    render() {
        const t = templateRenderer({
            title: this.title,
            users: this.users
        });

        const container = document.createElement("div");
        container.innerHTML = t;

        const btn = container.querySelector("button");
        if (btn !== null) {
            btn.addEventListener("click", () => alert("BTN!!!"));
        }

        document.body.appendChild(container.firstChild);
    }
}

export default List;