const header = document.querySelector(".header");
const headerNavToggleBtn = document.querySelector(".header__mobile-nav-toggle");
const headerNavigation = document.querySelector(".header__navigation");

headerNavToggleBtn.addEventListener("click", () => {
  headerNavigation.classList.toggle("expanded");
  header.classList.toggle("expanded");
  headerNavToggleBtn.classList.toggle("expanded");
});

// کد کاروسل
const swiper = new Swiper(".carousel__card-wrapper", {
  loop: false,
  spaceBetween: 20,

  slidesPerView: 1,
  spaceBetween: 24,

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
