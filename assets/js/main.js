window.onload = function() {
	$(".banner-slider").slick({
		slideToScroll: 1,
		slidesToShow: 1,
		infinite: true,
		dots: true,
		arrows: true
	});

	$(".products ul").slick({
		slideToScroll: 2,
		slidesToShow: 5,
		infinite: true,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	if($(window).width() < 768) {
		$('.benefits .boxes').slick({
			slideToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			dots: false,
			arrows: false
		});

		$('.brands .content').slick({
			slideToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			dots: false,
			arrows: false
		});
	}
	
	$(".close").on("click", function() {
		$(".modal").css("display", "none");
		$(".overlay").attr("style", "opacity: 0; display: none;");
	});
};

