$(document).ready(function () {

  // toggle search bar
  $(".icon_box#search_icon").click(function () {
    $(".search_box").addClass("opneSearch");
  });
  $(".search_box .icon_close").click(function () {
    $(".search_box").removeClass("opneSearch");
  });
  // toggle side bar
  $('.nav_section .right_box .icon_box ').click(function () {
    $(this).children('.icon_line').toggleClass('active');
    $(".aside_section").toggleClass('hover_class');
    $(".content_section").toggleClass('opne_menu');
  });

  // toggle sub_menu
  $('.ul_aside_box .has_chiled a').click(function () {
    $(this).siblings('.sub_menu').slideToggle();
  });


});