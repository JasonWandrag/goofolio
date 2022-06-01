// import { toggleActive } from "./helpers.js";

const navToggleButton = document.querySelector("#nav-toggle");
const navButtonsContainer = document.querySelector("#navbar");

const toggleActive = (el) => {
  el.classList.toggle("active");
};

navToggleButton.addEventListener("click", () =>
  toggleActive(navButtonsContainer)
);

function scrollToSection(el) {
  console.log(el);
  const element = document.querySelector(el);
  element.scrollIntoView();
  toggleActive(navButtonsContainer);
}
