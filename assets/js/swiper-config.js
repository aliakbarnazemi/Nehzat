// Start Sliders

const swiper3 = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper5 = new Swiper(".mySwiper", {
  // Default parameters
  pagination: {
    el: ".swiper-pagination",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 4,
      spaceBetween: 25,
      grid: {
        rows: 1,
      },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
      spaceBetween: 50,
      grid: {
        rows: 2,
        columns: 2,
      },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 25,
      grid: {
        rows: 2,
      },
    },
    920: {
      slidesPerView: 8,
      spaceBetween: 25,
      grid: {
        rows: 2,
      },
    }
  },
});


var swiper = new Swiper(".swiper-2", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    640: {
      slidesPerView: 1.1,
      spaceBetween: 10
    },
  }
});

function Slide1() {
  var targetSlideIndex = 0; // Change this to the desired slide index
  swiper.slideToLoop(targetSlideIndex, 1000, false);
}

function Slide2() {
  var targetSlideIndex = 1; // Change this to the desired slide index
  swiper.slideToLoop(targetSlideIndex, 1000, false);
}

function Slide3() {
  var targetSlideIndex = 2; // Change this to the desired slide index
  swiper.slideToLoop(targetSlideIndex, 1000, false);
}

function Slide4() {
  var targetSlideIndex = 3; // Change this to the desired slide index
  swiper.slideToLoop(targetSlideIndex, 1000, false);
}

function Slide5() {
  var targetSlideIndex = 4; // Change this to the desired slide index
  swiper.slideToLoop(targetSlideIndex, 1000, false);
}

function Slide6() {
  var targetSlideIndex = 5; // Change this to the desired slide index
  swiper.slideToLoop(targetSlideIndex, 1000, false);
}