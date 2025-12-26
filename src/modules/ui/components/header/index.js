import "./style.css";

export default function renderHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.textContent = "Hello"
  return header;
}