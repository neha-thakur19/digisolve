$('.owl-services').owlCarousel({
	loop:true,
	margin:20,
	// stagePadding: 100,
	nav:true,
	autoHeight: true,
	dots:false,
	navText : ["&nbsp<i class='bi bi-arrow-left-short'></i>&nbsp","&nbsp<i class='bi bi-arrow-right-short'></i>&nbsp"],
	responsive:{
		0:{
			items:1
		},
		767:{
			items:1
		},
		992:{
			items:2
		},
		1200:{
			items:3
		}
	}
});

$('.owl-testimonials').owlCarousel({
	loop:true,
	margin:10,
	autoplay:true,
	autoplayTimeout: 4000,
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	nav:true,
	navText : ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
});

$('.owl-partner').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	autoplay:true,
	autoplayTimeout: 4000,
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	responsive:{
		0:{
			items:3
		},
		600:{
			items:4
		},
		1024:{
			items:5
		},
		1200:{
			items:6
		}
	}
});

// Menu active link change class
function activeLinkControll() {
	$(".navbar-nav .nav-item .nav-link").click(function () {
		//remove active active class form any of nav-link
		$(".navbar .nav-item .nav-link.active").removeClass("active");

		//add active active class to clicked nav-link (li)
		$(this).addClass("active");
		// return false;
	});
}

$(document).ready(function() {
	$(".owl-services").owlCarousel();
	$(".owl-testimonials").owlCarousel();
	$(".owl-partner").owlCarousel();
	activeLinkControll();
});

$(window).scroll(function() {
	/* If current offset position is greater than 400 add sticky-nav class */

	windowscroll = $(window).scrollTop();

	if(windowscroll > 800) {
		$('nav').addClass('sticky-nav');
		$('.site-wrap section').each(function(i) {
			if ($(this).position().top <= windowscroll + 70) {
				$('.navbar .nav-item .nav-link.active').removeClass('active');
				$('.navbar .nav-item .nav-link').eq(i).addClass('active');
			}
		});
	} else {
		$('nav').removeClass('sticky-nav');
		$('.navbar .nav-item .nav-link.active').removeClass('active');
		$('.navbar .nav-item .nav-link:first').addClass('active');
	}
});