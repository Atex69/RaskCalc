var swiper = new Swiper('.big-container, .small-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.products-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  breakpoints: {
    768: {
      slidesPerView:2,
      spaceBetween: 0
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});

var swiper = new Swiper('.projects-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.projects-button-next',
      prevEl: '.projects-button-prev',
    },
  });


$('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
  e.target;
  e.relatedTarget;
  var mySwiper = $('body').find('.products-container')[1].swiper;
  mySwiper.update(true);
});
$('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
  e.target;
  e.relatedTarget;
  var mySwiper = $('body').find('.products-container')[2].swiper;
  mySwiper.update(true);
});
$('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
  e.target;
  e.relatedTarget;
  var mySwiper = $('body').find('.products-container')[3].swiper;
  mySwiper.update(true);
});
$('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
  e.target;
  e.relatedTarget;
  var mySwiper = $('body').find('.products-container')[4].swiper;
  mySwiper.update(true);
});


$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $(".phone").mask("+7(999) 999-9999");
});


