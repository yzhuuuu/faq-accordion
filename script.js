const spans = document.querySelectorAll("span");
const h5s = document.querySelectorAll("h5");

window.addEventListener("load", () => {
  addHideClassFromAllSpans();
});
h5s.forEach((h5) => {
  h5.addEventListener("click", (e) => {
    // console.log(`hello this is h5 ${e.target.innerHTML}`);
    const sibling = e.currentTarget.nextElementSibling;
    const nextElement = e.currentTarget.nextSibling;
    addHideClassFromAllSpans();
    sibling.classList.remove("hide");
    removeRotateClassFromAllH5s();
    const arrow = e.currentTarget.querySelector("img");
    arrow.classList.add("rotate");
    e.currentTarget.classList.add("bold-heading");
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
  });
}
