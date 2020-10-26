import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./header/header";
import List from "./list/list";
import LoginForm from "./login-form/login-form";

import html from "./header/index.html";

//document.title = 'Кинопортал';

const header = new Header();
header.render();

const form = new LoginForm();
form.render();

const list = new List();
list.render();
const rootLayout = new layout({header, form})
