var visualSwiper, main01Swiper;

// 초기화 함수 호출
initSwiper();

// 창 크기가 변경될 때마다 이벤트 핸들러 재등록
$(window).on("resize", function () {
  // 창 크기 업데이트

  // Swiper 재설정
  initSwiper();
});

function initSwiper() {
  var windowWidth = $(window).width();
  // visualSwiper 초기화
  visualSwiper = new Swiper(".visual .swiper", {
    direction: "horizontal",
    loop: true,
    simulateTouch: windowWidth < 1200,
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

  // main01Swiper 초기화
  main01Swiper = new Swiper(".main__01 .swiper", {
    direction: "horizontal",
    spaceBetween: 0,
    loop: true,
    simulateTouch: windowWidth < 1200,
    navigation: {
      nextEl: ".main__01 .swiper-button-next",
    },
    speed: 500,
    autoplay: {
      delay: 5000,
    },
  });
}
