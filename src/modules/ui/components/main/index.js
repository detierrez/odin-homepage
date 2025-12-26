import "./style.css";

export default function renderMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.textContent = "World!"
  return main;
}