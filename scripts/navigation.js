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
  document
    .querySelectorAll("section")
    .forEach((e) => e.classList.remove("active"));
  const element = document.querySelector(el);
  element.classList.add("active");
  toggleActive(navButtonsContainer);
}

const projects = document.querySelectorAll(".project");

projects.forEach((p) => {
  p.addEventListener("click", (e) => {
    console.log("Clicking on", e.target);
    const current = e.target;
    projects.forEach((p) => p.classList.remove("active"));
    current.classList.add("active");
  });
});
