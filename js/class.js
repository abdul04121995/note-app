export function classSelector(desc) {
  if (desc.toLowerCase() === "personal") {
    return "orange";
  } else if (desc.toLowerCase() === "home") {
    return "green";
  } else if (desc.toLowerCase() === "buisness") {
    return "purple";
  } else {
    return;
  }
}
