$(document).ready(function () {
	svg4everybody({});


	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});


	$('.header__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				dots: true,
			}

		}],
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	});


	$('.clients-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 1270,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		],
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	});


	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	});


	$('.articles__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	});


});




