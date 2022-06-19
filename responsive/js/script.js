function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};
  
testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
});
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
    }
  }
  
ibg();

$(document).ready(function() {

// burger menu

 let burger = $('.icon-menu')
 let menu = $('.menu__body')

 burger.click(function(e){
  burger.toggleClass('active');
  menu.toggleClass('active');
  $('body').toggleClass('lock')
 }) 

 // slick slider

 $('.slider__body').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000
 });

});