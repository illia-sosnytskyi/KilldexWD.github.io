function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });

$(document).ready(function(){

  $('.slider').slick({

    arrows: true,
    infinite: true,
    slickCurrentSlide: 1,
    slidesToScroll: 1,
    slidesToShow: 3, 

    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 605,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });


  $('.tab__item').on('click', function(e){
    
    $('.tab__item').removeClass('active');
    $(this).addClass('active');
    var href = $(this).attr('href');
    $('.review__inner').removeClass('active').removeClass('in');
    var id = $(href).addClass('active');
    setTimeout(function(){
      $(href).addClass('in');
    }, 200);
    return false;
  });
  

});

