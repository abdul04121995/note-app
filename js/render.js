import { classSelector } from "./class.js";
/* <div class="note">
<div class="note-top flex">
  <h2 class="note-top__category">Buisness</h2>
  <div class="note-top__delete">
    <img src="./icons/delete.svg" alt="" />
  </div>
</div>
<div class="note-bottom">
  <h1 class="note-bottom__title">Going to Gym</h1>
  <p class="note-bottom__description">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
    at ullam, quisquam, veniam laudantium aperiam sapiente quae nemo
    quibusdam cupiditate minima eaque temporibus rem cum placeat,
    tempore doloremque nisi nostrum.
  </p>
</div>
</div> */

export function render(a) {
  // notesArray.length && console.log(notesArray);
  return a
    .map((el, index) => {
      return `<div class="note">
      <div class="note-top flex">
        <h2 class="note-top__category ${classSelector(el.category)}">${
        el.category
      }</h2>
        <div class="note-top__delete">
          <img src="./icons/delete.svg" alt="" />
          </div>
        </div>
          <div class="note-bottom">
            <h1 class="note-bottom__title">${el.title}</h1>
            <p class="note-bottom__description"> 
            ${el.description ? el.description : "no description"}
            </p>
          </div>
    </div> 
  `;
    })
    .join(" ");
}
