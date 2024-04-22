// Hero Verbiage
const verbElement = document.querySelector('.verb');
const websites = document.querySelector('.websites');
const verbArray = ['Responsive', 'Impactful', 'Accessible', 'Engaging'];
let verbs = 0;

function transitionVerb() {
  setTimeout(function() { 
    verbElement.classList.remove('show');
  }, 1000);
  verbElement.classList.add('show');
}

function switchVerb() {
  if(verbs < verbArray.length) {
    verbElement.textContent = verbArray[verbs++];
    transitionVerb();
  }
  else {
    verbs = 0;
    verbElement.textContent = verbArray[verbs++];
    transitionVerb();
  }
}

switchVerb();
setInterval(switchVerb, 2000);

// Work Carousel
let swiper = new Swiper(".work-wrap", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        clickable: 'true',
        el: ".swiper-pagination"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
        768: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      }
});