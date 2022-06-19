let swiper1 = document.querySelector('.slider-container'),
    swiper2 = document.querySelector('.swiper-wrapper'),
    burger = document.querySelector('.burger'),
    close = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    playButtonsFirst = document.querySelectorAll('.main-slider__play'),
    openStor = document.querySelector('.featured-open'),
    closeStor = document.querySelector('.featured-close'),
    stories = document.querySelector('.featured__stories');

let swiperSlider1 = new Swiper('.slider-container', {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 95
});

let swiperSlider2 = new Swiper('.swiper-wrapper', {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
}); 

burger.addEventListener('click', () => {
  menu.classList.add('menu--visible');
  body.classList.add('body--hidden');
});

close.addEventListener('click', () => {
  menu.classList.remove('menu--visible');
  body.classList.remove('body--hidden');
});

openStor.addEventListener('click', () => {
  stories.classList.add('featured__stories--open');
});

closeStor.addEventListener('click', () => {
  stories.classList.remove('featured__stories--open');
});

playButtonsFirst.forEach((el) => {
  el.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
    video.play();
    e.currentTarget.style.display = 'none'
    setTimeout(() => {
      video.volume = 0.5;
    }, 1000)
  })
});

$(document).ready(function(){

  spoilerWrap = $('.footer__column-header'),
  spoilerText = $('.footer__list');

  spoilerWrap.click(function(event){

    if($('.footer__inner').hasClass('one')) {
      spoilerWrap.not($(this)).removeClass('active');
      spoilerText.not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });

});

