export function messenger(container, a, b, c) {
  let divEL = document.createElement("div");
  divEL.textContent = "Please fill all the values";
  divEL.classList.add("message");
  container.appendChild(divEL);
  setTimeout(() => {
    container.removeChild(divEL);
  }, 800);
  console.log("boom");
}
