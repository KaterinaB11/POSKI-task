const burgerMenu = document.getElementById("burger-menu");
const headerLinks = document.getElementById("header-links");
const header = document.querySelector("header");
const closeButton = document.getElementById("close-button");
const headerLinkElements = document.querySelectorAll(".header__link");

burgerMenu.addEventListener("click", () => {
  headerLinks.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const isClickInsideHeader = header.contains(event.target);
  if (!isClickInsideHeader && !event.target.closest('.header__links')) {
    headerLinks.classList.remove("active");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    headerLinks.classList.remove("active");
  }
});

closeButton.addEventListener("click", () => {
  headerLinks.classList.remove("active");
});

headerLinkElements.forEach((link) => {
  link.addEventListener("click", () => {
    headerLinkElements.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});


