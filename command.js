//사이드바 호버
$(".side-bar-hover").hide()
$(".header-nav-2st-fixed").mouseover(function () { $(".side-bar-hover").show()});
$(".header-nav-2st-fixed").mouseout(function () { $(".side-bar-hover").hide()});
//사이드바 일정 높이 이상 내려가면 등장
$(document).ready(function(){

  var navHeight = $(".icon-line").height(); 

  $(".side-bar").hide();

  $(window).scroll(function(){  
      var rollIt = $(this).scrollTop() >= navHeight; 

  if(rollIt){ 
 
          $(".side-bar").show().css({"position":"fixed"});
      }
      else{
          $(".side-bar").hide();
      }
  });
  
});



//검색창 팝업
$(".shearch-on").click(function () { $(".shearch-bar").addClass("display")});

$(".shearch-x-button").click(function () {$(".shearch-bar").removeClass("display")
});
$(".x-button").mouseover(function () { $(".x-button-copy").show()
$(".x-button").hide()
});

$(".x-button-copy").mouseout(function () {$(".x-button-copy").hide()
$(".x-button").show()
});


//메인베너 스와이퍼
var swiper = new Swiper(".banner-1>.mySwiper", {
  direction: "horizontal",
  autoplay: {
    delay:3500,
  },
  loop: true, 
  pagination: {
    el: ".banner-1> .swiper > .swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".banner-1> .swiper> .swiper-button-next",
    prevEl: ".banner-1> .swiper> .swiper-button-prev",
  },
});


$(".best-selling").show()
$(".best-new").hide()
$(".best-fuel-efficient").hide()

$(".list-1>div>.btn-1st").addClass("addclick")

$(".list-1>div>.btn-1st").click(function () {
  $(".list-1>div>.btn-1st").addClass("addclick")
  $(".list-1>div>.btn-2nd").removeClass("addclick")
  $(".list-1>div>.btn-3rd").removeClass("addclick")
  $(".best-selling").show()
$(".best-new").hide()
$(".best-fuel-efficient").hide()
})
$(".list-1>div>.btn-2nd").click(function () {
  $(".list-1>div>.btn-2nd").addClass("addclick")
  $(".list-1>div>.btn-1st").removeClass("addclick")
  $(".list-1>div>.btn-3rd").removeClass("addclick")
  $(".best-selling").hide()
$(".best-new").show()
$(".best-fuel-efficient").hide()
})
$(".list-1>div>.btn-3rd").click(function () {
  $(".list-1>div>.btn-3rd").addClass("addclick")
  $(".list-1>div>.btn-1st").removeClass("addclick")
  $(".list-1>div>.btn-2nd").removeClass("addclick")
  $(".best-selling").hide()
$(".best-new").hide()
$(".best-fuel-efficient").show()
})



//이벤트 스와이퍼
var swiper = new Swiper(".event-banner>.mySwiper", {
  direction: "horizontal",

  navigation: {
    nextEl: ".event-banner> .swiper>.swiper-button-next",
    prevEl: ".event-banner> .swiper>.swiper-button-prev",
  },
  pagination: {
    el: "event-banner> .swiper > .swiper-pagination",
    type : 'bullets',
  },
  keyboard: true,
});


//2차메뉴


$(".top-center>ul").mouseover(function () { 
$("html").addClass("scroll-hidden");
return false;
});


$(".top-center>ul").mouseout(function () { 
$("html").removeClass("scroll-hidden");
return false;
});