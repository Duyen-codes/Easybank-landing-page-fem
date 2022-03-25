// Queries
const burgerIcon = document.querySelector(".burger-icon");
console.log(burgerIcon);

const nav = document.querySelector("nav");

// Toggle nav show

burgerIcon.addEventListener("click", (e) => {
  console.log("clicked");
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    burgerIcon.setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    nav.classList.add("show");
    burgerIcon.setAttribute("src", "./images/icon-close.svg");
  }
});
