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

  //Check to see if the window is top if not then display button
$(window).scroll(function(){
  if ($(this).scrollTop() > 250) {
    $('.scrollToTop').fadeIn();
  } else {
    $('.scrollToTop').fadeOut();
  }
});

//Click event to scroll to top
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},500);
  return false;
});

});
