"use strict";

(function ($) {
  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  });
  $('.iziModal').iziModal({
    radius: '8px'
  }); // TODO Nav Pages remove from prod

  $('.menu_click').on('click', function () {
    $('.menu_wrap').toggleClass('menu_wrap_active');
  }); // TODO Search

  $('.header--wrap .search__input').on('focusin', function () {
    $('.search_history').show();
    $('.overlay').show();
  }).on('focusout', function () {
    $('.search_history, .search_find').hide();
    $(this).val('');
    $('.overlay').hide();
  }).on('keyup', function () {
    if ($(this).val() == '') {
      $('.search_find').hide();
      $('.search_history').show();
    } else {
      $('.search_history').hide();
      $('.search_find').show();
    }
  }); // TODO Click's global

  $('.btn_catalog').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('btn_catalog--active');
    $('.catalog--wrap').fadeToggle(200);
  });
  $('.btn_icon').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('btn_icon--active');
  });
  $('#modal-contacts').delegate('#dislike', 'click', function (event) {
    event.preventDefault();
    $('.modal-global__btn').hide();
    $('.modal-global__select').show();
  }); // TODO Burger

  $('button.menu').on('click', function (event) {
    event.preventDefault();
    $('.nav_mobile--wrap').addClass('menu--active');
    $('body').addClass('overflow');
    $('.overlay-global').show();
  });
  $('.btn_filter').on('click', function (event) {
    event.preventDefault();
    $('.filter-mobile').addClass('filter-mobile--active');
    $('body').addClass('overflow');
  });
  $('.filter-mobile--wrap .btn_close').on('click', function (event) {
    event.preventDefault();
    $('.filter-mobile').removeClass('filter-mobile--active');
    $('.filter-mobile__box').removeClass('menu--active');
    $('body').removeClass('overflow');
  });
  $('.overlay-global, .nav_mobile__close').on('click', function (event) {
    event.preventDefault();
    $('.nav_mobile--wrap').removeClass('menu--active');
    $('body').removeClass('overflow');
    $('.overlay-global').hide();
  }); // TODO Stop Propagation global

  $('.btn_catalog, .catalog--wrap, .select-gl__this, button.menu, .header--mobile').on('click', function (event) {
    event.stopPropagation();
  }); // TODO Wrapper click close global

  $('.wrapper').on('click', function () {
    $('.btn_catalog').removeClass('btn_catalog--active');
    $('.catalog--wrap').fadeOut(200);
    $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
  });
  $('#click-js .filter-mobile__link').on('click', function (event) {
    event.preventDefault();
    var box = $(this).attr('data-box');
    $('.filter-mobile--wrap').find('.' + box).addClass('menu--active');
  });
  $('.filter-other').on('click', function (event) {
    event.preventDefault();
    $('.filter-mobile__box').removeClass('menu--active');
  }); // TODO Slider Home init

  new Swiper('.welcome--wrap .swiper-container', {
    speed: 900,
    loop: true,
    effect: 'fade',
    parallax: true,
    spaceBetween: 20,
    simulateTouch: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.welcome--wrap .btn_next',
      prevEl: '.welcome--wrap .btn_prev'
    }
  }); // TODO Slider Recommended init

  new Swiper('.recommended-category .swiper-container', {
    speed: 1200,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    simulateTouch: true,
    updateOnWindowResize: true,
    navigation: {
      nextEl: '.recommended-category .btn_next',
      prevEl: '.recommended-category .btn_prev'
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  }); // TODO Slider Product init

  var sliderDetailed = new Swiper('.detailed--wrap .swiper-container', {
    speed: 900,
    loop: true,
    effect: 'fade',
    parallax: true,
    spaceBetween: 20,
    simulateTouch: true,
    updateOnWindowResize: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.detailed--wrap .btn_next',
      prevEl: '.detailed--wrap .btn_prev'
    },
    on: {
      slideChange: function slideChange() {
        var index = this.realIndex;
        $('.detailed__nav').find('.slide--active').removeClass('slide--active');
        $('.detailed__btn').eq(index).addClass('slide--active');
      }
    }
  });
  $('.detailed__btn').on('click', function (event) {
    event.preventDefault();
    var slide = $(this).attr('data-num');
    $('.detailed__nav').find('.slide--active').removeClass('slide--active');
    $(this).addClass('slide--active');
    sliderDetailed.slideTo(slide, 900);
  }); // TODO Tabs

  function tabsGlobal(on, target, tabsWrap, tabActive, boxWrap, boxItem) {
    var fade = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 300;
    $(target).on(on, function (event) {
      event.preventDefault();

      if ($(this).hasClass(tabActive)) {
        return false;
      }

      $(tabsWrap).find('.' + tabActive).removeClass(tabActive);
      $(this).addClass(tabActive);
      $(boxItem).hide();
      $(boxWrap).find('.' + $(this).attr('name')).stop(true).fadeIn(fade);
    });
  } // TODO Tabs init


  tabsGlobal('click', '.catalog__btn', '.catalog__nav', 'menu-active', '.catalog__main', '.catalog__box');
  tabsGlobal('click', '.product-limited__btn', '.product-limited__controls', 'product-limited--active', '.product-limited__images', '.product-limited__photo');
  tabsGlobal('click', '.notification__btn', '.notification__list', 'notification--active', '.notification__main', '.notification__box'); // TODO Select global

  $('.select-gl__value').on('click', function (event) {
    event.preventDefault();

    if ($(this).hasClass('select__active')) {
      $(this).toggleClass('select__active').next().fadeToggle(100);
    } else {
      $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
      $(this).toggleClass('select__active').next().fadeToggle(100);
    }
  });
  $('.select-gl__item').on('click', function () {
    $(this).parents('.select-gl').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    $(this).parents('.select-gl').find('.select-gl__value span').text($(this).text());
    $(this).parents('.select-gl').find('.select-gl__value').removeClass('select__active').next().fadeOut(100);
  }); // TODO Checkbox

  $('.checked__this').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('checked--active');
  }); // TODO Colors

  $('.colors__this').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('colors--active');
  }); // TODO Rating init

  var stars = document.querySelectorAll(".stars");

  for (var i = 0; i < stars.length; i++) {
    var star = parseInt(stars[i].getAttribute('data-stars'));
    raterJs({
      max: 5,
      starSize: 24,
      rating: star,
      readOnly: true,
      element: stars[i]
    });
  }
})(jQuery);