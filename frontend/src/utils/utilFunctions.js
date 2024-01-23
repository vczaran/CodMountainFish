export function capitalize(str) {
  if (str.split(" ").length === 1) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}
export function capitalizeLink(str) {
  if (str.split("-").length === 1) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return str
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}
