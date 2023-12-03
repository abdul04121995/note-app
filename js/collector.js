import { notesArray } from "./script.js";
export function collector(a, b, c) {
  notesArray.unshift({
    title: a.value.toLowerCase(),
    category: b.value.toLowerCase(),
    description: c.value.toLowerCase(),
  });
  (a.value = ""), (b.value = ""), (c.value = "");
}
