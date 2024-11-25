const header = document.querySelector(".header");
const headerNavToggleBtn = document.querySelector(".header__mobile-nav-toggle");
const headerNavigation = document.querySelector(".header__navigation");

headerNavToggleBtn.addEventListener("click", () => {
  headerNavigation.classList.toggle("expanded");
  header.classList.toggle("expanded");
});
