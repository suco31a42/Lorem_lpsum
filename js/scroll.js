$(function() {
  var arrow = $('#arrow');
  arrow.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  });

  arrow.click(function (){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    return false;
  });
});