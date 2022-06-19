$(function(){

	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1215,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
	})
	

	// Menu

	let nav = $('.nav'),
			btn = $('.header__burger'),
			sign = $('.btn--sign')

	btn.click(function(){
		btn.toggleClass('active');
		nav.toggleClass('active');
		sign.toggleClass('active');
		$('body').toggleClass('active')
	});

});