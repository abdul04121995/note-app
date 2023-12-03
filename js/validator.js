import { messenger } from "./message.js";
import { collector } from "./collector.js";
import { notesArray } from "./script.js";

const messageContainer = document.querySelector(".message-container");
//  this function is used for validation of title and
//  selected items .textarea is optional
export function validator(a, b, c) {
  if (Boolean(a.value) == true && Boolean(b.value) === true) {
    collector(a, b, c);

    // console.log("congragulation");
  } else if (Boolean(a.value) === false || Boolean(b.value) === false) {
    messenger(messageContainer, a, b, c);
  }
}
