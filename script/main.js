const btnBar = document.querySelector('.header__bar')
const nav = document.querySelector('.nav')

btnBar.addEventListener('click', () => {
  nav.classList.toggle('nav--active')
  if (btnBar.children[0].classList.contains('fa-bars')){
    btnBar.children[0].classList = 'fa-solid fa-x'
    document.body.style.overflow = "hidden";
  } else {
    btnBar.children[0].classList = 'fa-solid fa-bars'
    document.body.style.overflow = "unset";
  }
})


const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
    1200: {
      slidesPerView: 2
    },
    1500: {
      slidesPerView: 2.3
    },
    1700: {
      slidesPerView: 3
    }
  },
});