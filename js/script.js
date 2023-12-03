import {
  personalRender,
  homeRender,
  buisnessRender,
  allRender,
} from "./filter.js";
import { render } from "./render.js";
import { validator } from "./validator.js";

const navBtnAdder = document.querySelector(".nav-btns__add");
const noteWindow = document.querySelector(".note-window");
const noteCanceler = document.querySelector("#cancel");
const noteAdder = document.querySelector("#adder");
const crossEl = document.querySelector("#cross");
export const noteDislplayDown = document.querySelector(".note-display__down");
// selecting title ,category and description

const titleEl = document.querySelector("#title");
const categoryEl = document.querySelector("#category");
const descriptionEl = document.querySelector("#description");
// selecting buttons for filtering
const allBtn = document.querySelector("[data-all]");
const personalBtn = document.querySelector("[data-personal]");
const homeBtn = document.querySelector("[data-home]");
const buisnessBtn = document.querySelector("[data-buisness]");
//
// const messageContainer = document.querySelector(".message-container");
export let notesArray = [];
let html;

//! displaying note window by clicking on add button in navbar
navBtnAdder.addEventListener("click", function () {
  displayer();
});
[noteCanceler, crossEl].forEach((btn) => {
  btn.addEventListener("click", function () {
    canceler(titleEl, categoryEl, descriptionEl);
  });
});
//! setting display to none by clicking on cancel button
//!  or cross icon
function displayer() {
  noteWindow.style.display = "flex";
}
function canceler(a, b, c) {
  noteWindow.style.display = "none";
  b.selectedIndex = 0;
  a.value = "";
  b.value = "";
  c.value = "";
}
//!registering event on add button
noteAdder.addEventListener("click", function () {
  validator(titleEl, categoryEl, descriptionEl);
  html = notesArray.length && render(notesArray);
  noteDislplayDown.innerHTML = html;
});
// testing
allBtn.addEventListener("click", function () {
  notesArray.length && allRender(notesArray, noteDislplayDown);
});
personalBtn.addEventListener("click", function () {
  personalRender(notesArray, noteDislplayDown);
});
homeBtn.addEventListener("click", function () {
  homeRender(notesArray, noteDislplayDown);
});
buisnessBtn.addEventListener("click", function () {
  buisnessRender(notesArray, noteDislplayDown);
});
