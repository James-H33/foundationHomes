$(document).ready(function() {


  $('.navbarButton').on('click', function() {
    $('.navbarList').slideToggle();
  });


  $(window).on('resize', function() {
    if ($(window).width() > 769) {
      $('.navbarList').css("display", "inline-block");
    } else {
      $('.navbarList').css("display", "none");
    }
  });

});
