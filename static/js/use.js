"use strict";

(function ($) {
  $('.menu_click').on('click', function () {
    $('.menu_wrap').toggleClass('menu_wrap_active');
  });

  // TODO Search
  $('.btn_catalog').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('btn_catalog--active');
    $('.catalog--wrap').fadeToggle(200);
  });

  $('.btn_icon').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('btn_icon--active');
  });

  $('.overlay-global, .nav_mobile__close').on('click', function (event) {
    event.preventDefault();
    $('.nav_mobile--wrap').removeClass('menu--active');
    $('body').removeClass('overflow');
    $('.overlay-global').hide();
  });

  // TODO Stop Propagation global
  $('.btn_catalog, .catalog--wrap, .select-gl__this, button.menu, .header--mobile').on('click', function (event) {
    event.stopPropagation();
  });

  // TODO Wrapper click close global
  $('.wrapper').on('click', function () {
    $('.btn_catalog').removeClass('btn_catalog--active');
    $('.catalog--wrap').fadeOut(200);
    $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
  });
})(jQuery);
