import "modern-normalize";
import "./reset.css";
import "./style.css";

import renderFooter from "./components/footer";
import renderHeader from "./components/header";
import renderMain from "./components/main";

const body = document.body;

body.append(renderHeader());
body.append(renderMain());
body.append(renderFooter());
