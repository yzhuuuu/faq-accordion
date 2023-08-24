const spans = document.querySelectorAll("span");
const h5s = document.querySelectorAll("h5");

window.addEventListener("load", () => {
  addHideClassFromAllSpans();
});
h5s.forEach((h5) => {
  h5.addEventListener("click", (e) => {
    const sibling = e.currentTarget.nextElementSibling;
    // const nextElement = e.currentTarget.nextSibling;
    const arrow = e.currentTarget.querySelector("img");

    if (e.currentTarget.classList.contains("bold-heading")) {
      sibling.classList.toggle("hide");
      arrow.classList.toggle("rotate");
      e.currentTarget.classList.toggle("bold-heading");
      return;
    }
    addHideClassFromAllSpans();
    removeRotateClassFromAllH5s();

    sibling.classList.toggle("hide");
    arrow.classList.toggle("rotate");
    e.currentTarget.classList.toggle("bold-heading");
  });
});

function addHideClassFromAllSpans() {
  spans.forEach((span) => {
    span.classList.add("hide");
  });
}
function removeRotateClassFromAllH5s() {
  h5s.forEach((h5) => {
    const img = h5.querySelector("img");
    img.classList.remove("rotate");
    h5.classList.remove("bold-heading");
  });
}
