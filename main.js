$(document).ready(function () {
  headerDown();
  headerUp();
  menuSlideDown();
  mainContent01Vue();
  brandClicks();
  familyBoxOn();
  familyBoxOff();
  mobileMenuBtn();
  scrollUpBtnClick();
  $(window).scroll(function () {
    updateHeader();
  });
});

// 스크롤시 헤더 배경변경
let desktopHeader = $("#desktop__header");
let mobileHeader = $("#mobile__header");
function updateHeader() {
  let scrollTop = $(window).scrollTop();
  // 스크롤값 3 이상 헤더 배경 on
  if (scrollTop > 3) {
    desktopHeader.addClass("header__scroll");
    mobileHeader.addClass("header__scroll");
  } else {
    // 스크롤값 3 이하 헤더 배경 off
    desktopHeader.removeClass("header__scroll");
    mobileHeader.removeClass("header__scroll");
  }
}

// 헤더 메뉴 slide
let headerList = desktopHeader.find(".list");
let desktopNavBtn = desktopHeader.find(".nav__btn");
let headerDown = function () {
  //헤더 리스트에 마우스 올릴시 navbtn 슬라이드 다운
  headerList.mouseenter(function () {
    desktopNavBtn.stop().slideDown();
    desktopHeader.addClass("header__scroll");
  });
};
let headerUp = function () {
  headerList.mouseleave(function () {
    //헤더 리스트에 마우스 떠나면 navbtn 슬라이드 업
    desktopNavBtn.stop().slideUp();
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 3) {
      desktopHeader.addClass("header__scroll");
    }
  });
};

// 메인 콘텐츠
let main01 = $(".main__01");
let brand = main01.find(".brand");
let vueBtn = main01.find(".vue__btn");
let main01Content = main01.find(".content");

// vueBtn 클릭 이벤트
function mainContent01Vue() {
  vueBtn.on("click", function () {
    // vueBtn index값
    let i = $(this).index();
    // 모든 vueBtn에 on클래스 제거 , 클릭한 vueBtn에 on클래스 추가
    vueBtn.removeClass("on");
    $(this).addClass("on");
    // 모든 main01Content에 on클래스 제거
    // vueBtn과 같은 idex값을 가진 main01Content에 on클래스 추가
    main01Content.removeClass("on");
    main01Content.eq(i).addClass("on");
    if (i <= 2) {
      // vueBtn의 index값이 0, 1, 2 이면 brand01에 on클래스 추가
      // brand02 on 클래스 제거
      brand.eq(0).addClass("on");
      brand.eq(1).removeClass("on");
    } else {
      // vueBtn의 index값이 2보다 크면 brand02에 on클래스 추가
      // brand01 on 클래스 제거
      brand.eq(0).removeClass("on");
      brand.eq(1).addClass("on");
    }
  });
}

// brand 클릭 이벤트
function brandClicks() {
  brand.on("click", function () {
    // brand 영역 클릭시 brand, veuBtn, content의 on클래스 전부 삭제
    let i = $(this).index();
    brand.removeClass("on");
    main01Content.removeClass("on");
    vueBtn.removeClass("on");
    if (i === 1) {
      // 클릭한 brand의 index값이 1과 일치O brand__02, vue__btn__03, content__03에 on클래스 추가
      brand.eq(1).addClass("on");
      vueBtn.eq(3).addClass("on");
      main01Content.eq(3).addClass("on");
    } else {
      // 클릭한 brand의 index값이 1과 일치X brand__01, vue__btn__01, content__01에 on클래스 추가
      vueBtn.eq(i).addClass("on");
      brand.eq(i).addClass("on");
      main01Content.eq(i).addClass("on");
    }
  });
}

// footer 패밀리 박스
let familyBtn = $(".family__btn");
let familyClose = $(".family__close__btn");
let familyBoxOn = function () {
  //패밀리 박스 클릭시 패밀리 사이트 보임
  familyBtn.on("click", function () {
    $(".family__site").addClass("on");
    $(this).addClass("on");
  });
};
let familyBoxOff = function () {
  familyClose.on("click", function () {
    //패밀리 박스의 클로즈 버튼 클릭시 패밀리 사이트 사라짐
    $(".family__site").removeClass("on");
    familyBtn.removeClass("on");
  });
};

// 모바일 btn
// 작동 xxxxxxxxxxxxxxxxxxxxx
let menuBtn = mobileHeader.find(".menu__btn");
let closeBtn = mobileHeader.find(".close__btn");
let menuBox = mobileHeader.find(".menu__box");
let downBtn = menuBox.find("h2");

// 모바일 메뉴버튼
function mobileMenuBtn() {
  menuBtn.on("click", function () {
    // 메뉴 버튼 클릭시 메뉴박스 보임
    $(this).css("display", "none");
    menuBox.slideDown();
    closeBtn.css("display", "block");
    mobileHeader.addClass("header__scroll");
  });
  closeBtn.on("click", function () {
    // 클로즈 버튼 클릭시 메뉴박스 보임
    $(this).css("display", "none");
    menuBox.slideUp();
    menuBtn.css("display", "block");
    downBtn.removeClass("on");
    downBtn.siblings(".nav__btn").find("a").stop().slideUp();
  });
}

function menuSlideDown() {
  // 모바일 메뉴
  downBtn.on("click", function () {
    // h2에 on 클래스가 없을때 작동
    if (!$(this).hasClass("on")) {
      downBtn.removeClass("on");
      downBtn.siblings(".nav__btn").find("a").stop().slideUp();
      $(this).addClass("on");
      $(this).siblings(".nav__btn").find("a").stop().slideDown();
    } else {
      //h2에 on 클래스가 있을시 작동
      downBtn.removeClass("on");
      downBtn.siblings(".nav__btn").find("a").stop().slideUp();
    }
  });
}

let scrollUpBtn = $(".scroll__up__btn");

function scrollUpBtnClick() {
  scrollUpBtn.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
  });
}
