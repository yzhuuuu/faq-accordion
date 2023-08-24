const spans = document.querySelectorAll("span");
const h5s = document.querySelectorAll("h5");

window.addEventListener("load", () => {
  addHideClassFromAllSpans();
});
h5s.forEach((h5) => {
  h5.addEventListener("click", (e) => {
    const sibling = e.currentTarget.nextElementSibling;
    const nextElement = e.currentTarget.nextSibling;
    const arrow = e.currentTarget.querySelector("img");

    if (e.currentTarget.classList.contains("bold-heading")) {
      addHideClassFromAllSpans();
      removeRotateClassFromAllH5s();
      return;
    }
    addHideClassFromAllSpans();
    removeRotateClassFromAllH5s();
    sibling.classList.remove("hide");
    arrow.classList.add("rotate");
    e.currentTarget.classList.add("bold-heading");
  });
});

function addHideClassFromAllSpans() {
  spans.forEach((span) => {
    if (!span.classList.contains("hide")) {
      span.classList.add("hide");
    }
  });
}
function removeRotateClassFromAllH5s() {
  h5s.forEach((h5) => {
    const img = h5.querySelector("img");
    if (img.classList.contains("rotate")) {
      img.classList.remove("rotate");
      h5.classList.remove("bold-heading");
    }
  });
}
