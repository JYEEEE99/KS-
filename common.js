initialize();
// 스크롤 이벤트 감지
$(window).on("scroll", function () {
  var windowWidth = $(window).width();
  var scroll = $(document).scrollTop();
  initialize(windowWidth, scroll);
});

function initialize(windowWidth, scroll) {
  var header = $("#header");

  if (scroll >= 3) {
    header.addClass("header__scroll").removeClass("header");
  } else {
    header.addClass("header").removeClass("header__scroll");
  }

  var header = $(".header");
  var menuList = $(header).find(".menu__box .list");
  if (windowWidth >= 1200) {
    $(".nav__list__item h2").on("mouseenter", function () {
      $(".nav__btn").stop().slideDown();
    });

    $(".list").on("mouseleave", function () {
      $(".nav__btn").stop().slideUp();
    });

    $(".list li").on("mouseenter", function () {
      header.addClass("header__scroll");
    });
    $(".nav__list__item").mouseleave(function () {
      header.removeClass("header__scroll");
    });
  } else if (windowWidth < 1200) {
    $(".nav__list__item h2").off("mouseenter");
    $(".list").off("mouseleave");
    $(".list li").off("mouseenter");
    header.removeClass("header__scroll");
    $(".nav__list__item h2 a").on("click", function () {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        $(".nav__btn").stop().slideUp();
      } else {
        $(".nav__list__item h2 a").removeClass("on");
        $(this).addClass("on");
        $(".nav__btn").stop().slideUp();
        $(this).parent().next(".nav__btn").stop().slideToggle();
      }
    });
  }
}

var familyBtn = $(".family__btn");
var familyClose = $(".family__close__btn");
var familySite = $(".family__site");
$(familyBtn).on("click", function () {
  $(familySite).addClass("on");
  $(familyBtn).addClass("on");
});
$(familyClose).on("click", function () {
  $(familySite).removeClass("on");
  $(familyBtn).removeClass("on");
});

var mainCont01 = $(".main__01");
var vueBtn = mainCont01.find(".vue__btn");
var vueBtn04 = mainCont01.find(".vue__btn04");
var vueBtn05 = mainCont01.find(".vue__btn05");
var content = mainCont01.find(".content");
var brand01 = mainCont01.find(".brand__01");
var brand02 = mainCont01.find(".brand__02");

$(vueBtn).on("click", function () {
  var i = $(this).index();
  $(vueBtn).removeClass("on");
  $(content).removeClass("on");
  $(vueBtn).eq(i).addClass("on");
  $(content).eq(i).addClass("on");

  if (i >= 3) {
    $(brand02).addClass("on");
    $(brand01).removeClass("on");
  } else {
    $(brand01).addClass("on");
    $(brand02).removeClass("on");
  }
  console.log(i);
});

$(vueBtn04).on("click", function () {
  $(vueBtn).removeClass("on");
  $(content).removeClass("on");
  $(this).addClass("on");
  $(content).eq(3).addClass("on");
  $(brand01).removeClass("on");
  $(brand02).addClass("on");
});

$(vueBtn05).on("click", function () {
  $(vueBtn).removeClass("on");
  $(content).removeClass("on");
  $(this).addClass("on");
  $(content).eq(4).addClass("on");
  $(brand01).removeClass("on");
  $(brand02).addClass("on");
});

var header = $(".header");
var menuBtn = $(header).find(".menu__btn");
var closeBtn = $(header).find(".close__btn");
var menuList = $(header).find(".menu__box .list");
$(document).ready(function () {
  $(menuBtn).on("click", function () {
    $(menuList).fadeIn();
    $(closeBtn).css("display", "block");
    $(this).css("display", "none");
    console.log("on");
    console.log("Binding event handlers");
  });
  $(closeBtn).on("click", function () {
    $(menuList).fadeOut();
    $(menuBtn).css("display", "block");
    $(this).css("display", "none");
    console.log("off");
  });
});
