import html from "./index.html";
import "./style.scss";
import {renderTemplate} from "../../template-utils";
class LoginForm {
    constructor() {
        this.loginForm = renderTemplate(html );
    }

    render() {
        const container = document.createElement("div");
        container.innerHTML = html;

        //document.body.appendChild(container.firstChild);
        return container
    }
}

export default LoginForm;
