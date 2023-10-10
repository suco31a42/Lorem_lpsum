$(function() {
  var arrow = $('#arrow');
  // 普段は消す
  arrow.hide();
  $(window).scroll(function () {
    // スクロールの値が500以上でフェードイン
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