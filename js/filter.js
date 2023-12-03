import { render } from "./render.js";

export function allRender(a, screen) {
  let html = render(a);
  screen.innerHTML = html;
}

export function personalRender(a, screen) {
  let personalArray = a.filter((el) => {
    return el.category.toLowerCase() === "personal";
  });
  let html = render(personalArray);
  screen.innerHTML = html;
}

export function homeRender(a, screen) {
  let homeArray = a.filter((el) => {
    return el.category.toLowerCase() === "home";
  });
  let html = render(homeArray);
  screen.innerHTML = html;
}

export function buisnessRender(a, screen) {
  let buisnessArray = a.filter((el) => {
    return el.category.toLowerCase() === "buisness";
  });
  let html = render(buisnessArray);
  screen.innerHTML = html;
}
