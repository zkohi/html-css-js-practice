$(function () {
  var navItem = $('.nav-item');
  var navText = $('.nav-text');

  navItem.click(function () {
    navText.toggleClass('active');
    navItem.toggleClass('active');
  });
});
