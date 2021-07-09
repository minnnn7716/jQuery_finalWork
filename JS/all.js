$(document).ready(function () {
  // swiper
  const swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
    speed: 1000,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 下拉選單
  $('.drop-button').click(function () {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('.drop-button').removeClass('active');
    $(this).siblings('ul').slideToggle();
    $(this).parent().siblings().find('ul').slideUp();
  });

  $(document).mouseup(function (e) {
    var container = $(".drop-list");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });

  // 漢堡選單
  $('.burgerButton').click(function () {
    event.preventDefault();
    $('body').toggleClass('burger-open');
  });

  // go top
  $('.top a').click(function () {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
});