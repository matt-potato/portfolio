// Hero Verbiage
const heading = document.querySelector('h1');
const verbElement = document.querySelector('.verb');
const websites = document.querySelector('.websites');
const breakTag = document.querySelector('.break');
const verbArray = ['Responsive', 'Impactful', 'Accessible', 'Engaging', 'Websites.'];
let verbs = 0;

function transitionVerb() {
  setTimeout(function() {
    if(verbs < verbArray.length) {
      verbElement.classList.remove('show');
    }
  }, 1200);
  verbElement.classList.add('show');
}

function switchVerb() {
  if(verbs < verbArray.length) {
    verbElement.textContent = verbArray[verbs++];
    transitionVerb();
  }
  if(verbs === verbArray.length){
    websites.classList.add('hide');
  }
}

switchVerb();
setInterval(switchVerb, 1500);

document.querySelector('#hero').addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  document.querySelector('#hero').style.backgroundPosition = `${mouseX * 100}% ${mouseY * 50}%`;
});

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