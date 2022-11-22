$(function() {

	$('.news--slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000
	});

	$('.photoreport--slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		appendArrows:'.slider-arrows',
		prevArrow:'<span class="slider-arrow"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_49_178)"><path d="M15 5.625V7.5H3.75L7.5 11.25L6.5625 13.125L0 6.5625L6.5625 0L7.5 1.875L3.75 5.625H15Z" /></g><defs><clipPath id="clip0_49_178"><rect width="15" height="13.125" fill="white"/></clipPath></defs></svg></span>',
		nextArrow:'<span class="slider-arrow"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_49_180)"><path d="M0 5.625V7.5H11.25L7.5 11.25L8.4375 13.125L15 6.5625L8.4375 0L7.5 1.875L11.25 5.625H0Z" /></g><defs><clipPath id="clip0_49_180"><rect width="15" height="13.125" fill="white" transform="matrix(-1 0 0 1 15 0)"/></clipPath></defs></svg></span>',
		appendDots: '.slider-dots',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});

	let container = $(".menu--mobile");
	let body = $(".menu--wrapper__external");
	$(".burger").click(() => {
		$("body").css('overflow-y', 'hidden');
		$("#menu").toggleClass('menu--open');
		$(".menu--wrapper__external").toggleClass("overlay");
	});
	
	$('.menu--close').click(function() {
		$("body").css('overflow-y', 'scroll');
    $('#menu').removeClass('menu--open');
		$(".menu--wrapper__external").removeClass("overlay");
	});
	$(document).mouseup(function (e) {
    if (container.has(e.target).length === 0){
			$("body").css('overflow-y', 'scroll');
      container.removeClass('menu--open');
			body.removeClass("overlay");
    }
  });

});
