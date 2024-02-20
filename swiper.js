// 초기 실행시 Swiper 초기화
initSwiper();

// 창 크기가 변경될 때마다 이벤트 리스너 등록
$(window).on("resize", function () {
  // 창 크기 업데이트
  var windowWidth = $(window).width();

  // Swiper 재설정
  initSwiper(windowWidth);
});

function initSwiper(windowWidth) {
  if (windowWidth >= 1200) {
    var visualSwiper = new Swiper(".visual .swiper", {
      direction: "horizontal",
      effect: "cube",
      loop: true,
      simulateTouch: false,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".visual .swiper-button-next",
        prevEl: ".visual .swiper-button-prev",
      },
      speed: 1000,
      autoplay: {
        delay: 8000,
      },
    });
    var main_1_Swiper = new Swiper(".main__01 .swiper", {
      direction: "horizontal",
      loop: true,
      simulateTouch: false,
      navigation: {
        nextEl: ".main__01 .swiper-button-next",
      },
      speed: 500,
      autoplay: {
        delay: 5000,
      },
    });
  } else {
    var visualSwiper = new Swiper(".visual .swiper", {
      direction: "horizontal",
      effect: "slide",
      loop: true,
      simulateTouch: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      speed: 300,
      autoplay: {
        delay: 8000,
      },
    });
  }
  var main_1_Swiper = new Swiper(".main__01 .swiper", {
    direction: "horizontal",
    slidesPerView: "auto", // 또는 원하는 값
    spaceBetween: 10, // 여백 설정
    loop: true,
    simulateTouch: true,
    navigation: {
      nextEl: ".main__01 .swiper-button-next",
    },
    speed: 500,
    autoplay: {
      delay: 5000,
    },
  });
}
