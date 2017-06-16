$(function () {
  var navMenu = $('.nav-menu');
  var globalNav = $('.global-nav');

  navMenu.click(function () {
    navMenu.toggleClass('active');
    globalNav.toggleClass('active');
  });

});
