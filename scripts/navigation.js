import { toggleActive } from "./helpers.js";

const navToggleButton = document.querySelector("#nav-toggle");
const navButtonsContainer = document.querySelector("#navbar");

navToggleButton.addEventListener("click", () =>
  toggleActive(navButtonsContainer)
);
