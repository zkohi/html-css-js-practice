$(function () {
  var navMenu = $('.nav-menu')
   , globalNav = $('.global-nav')
   , topLink = $('#topLink')
   , bottomLink = $('#bottomLink')
   , bottomOffset = $(document).height();
   ;

  navMenu.click(function () {
    navMenu.toggleClass('active');
    globalNav.toggleClass('active');
  });

  topLink.click(function (e) {
    $("html,body").animate({scrollTop: 0});
  });

  bottomLink.click(function (e) {
    $("html,body").animate({scrollTop: bottomOffset});
  });

});
