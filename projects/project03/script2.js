$(document).ready(function() {

  // required elements
  var imgPopup = $('.img-popup');
  var imgCont2 = $('.container');
  var imgCont  = $('.o');
  var popupImage = $('.img-popup img');
  var closeBtn = $('.close-btn');

  // handle events
  imgCont2.on('click', function() {
    var img_src = $(this).children('.o').children('img').attr('src');
    imgPopup.children('img').attr('src', img_src);
    imgPopup.addClass('opened');
  });

  $(imgPopup, closeBtn).on('click', function() {
    imgPopup.removeClass('opened');
    imgPopup.children('img').attr('src', '');
  });

  popupImage.on('click', function(e) {
    e.stopPropagation();
  });
  
});