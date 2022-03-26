// Queries
const burgerIcon = document.querySelector(".burger-icon");
const burgerBars = burgerIcon.querySelectorAll("span");
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("ul a");

// open mobile nav
function openMobileNav() {
  nav.classList.add("open");
  burgerIcon.classList.add("close");
}

// Close mobile nav
function closeMobileNav() {
  nav.classList.remove("open");
  burgerIcon.classList.remove("close");
}

// Toggle open/close mobile nav
burgerIcon.addEventListener("click", (e) => {
  if (nav.classList.contains("open")) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
});

// Close nav when nav link clicks
navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

// Reset to burger icon if widtch >= 1024px
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && nav.classList.contains("open")) {
    nav.classList.remove("open");
    burgerIcon.setAttribute("src", "./images/icon-hamburger.svg");
  }
});

window.addEventListener("scroll", closeMobileNav);
