/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";



// smoooth scroll activation start
const lenis = new Lenis({
	duration: .5,	
})


lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);


// preloader
document.addEventListener("DOMContentLoaded", function () {

	let preloader = document.querySelector("#preloader");

	window.addEventListener('load', function(){

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
			}, 1000 ) ;

		}

		// h1-start
		const fdh1 = gsap.timeline();
		fdh1.from(".fd-hero-1-slideup " , { stagger: .5,  y: 100 , duration:1,  opacity:0 , delay: 1.5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") })
		fdh1.from(".fd-hero-1-slideleft " , { stagger: .5,  x: -100 , duration:1,  opacity:0 ,   ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, "<.5")
		fdh1.from(".fd-hero-1-slideright " , { stagger: .5,  x: 100 , duration:1,  opacity:0 ,   ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, "<=")


	})

});

// sticky-header
function glystickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.txa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('txa_sticky');
      } else {
        $header.removeClass('txa_sticky');
        $header.removeClass('txa_sticky_show');
      }

      if ($header.hasClass('txa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('txa_sticky_show');
        } else {
          $header.removeClass('txa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

glystickyHeader();
  


// mobile-menu
jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});

// footer-menu

var dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		var dropdown = this.nextElementSibling;
		if (dropdown.style.display === 'block') {
			dropdown.style.display = 'none';
		} else {
			// Hide all other dropdowns
			document.querySelectorAll('.has-dropdown').forEach(function(ul) {
				ul.style.display = 'none';
			});
			dropdown.style.display = 'block';
		}
	});
});

// search-popup-start
$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})



// mobile-menu-toggle-start
gsap.registerPlugin(ScrollTrigger);
gsap.config({
	nullTargetWarn: false,
});
var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")
if (menuToggle2) {

	var menuBar = gsap.timeline();
	menuBar.reverse();
	var menubgline = gsap.timeline({ paused: true });
	
	menubgline.to('.mobile-menu' , {
		display: "block",
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-bg span' , {
		duration: .5,
		width: 0,
		stagger: 0.1,
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-logo' , {
		xPercent: -50,
		opacity: 0,
		ease: 'Expo.easeInOut',
	}, );
	menubgline.from('.mobile-menu-close' , {
		xPercent: 50,
		rotate: 360,
		ease: 'Expo.easeInOut',
		opacity: 0,

	}, "<=" );
	menubgline.from('.mobile-main-navigation ' , {
		opacity: 0,
		y: 50,
	},);
	menubgline.from('.mobile-menu-search-bar' , {
		opacity: 0,
		y: 50,
	}, "<=");

	menubgline.from('.mobile-menu-socail-link' , {
		opacity: 0,
		x: 50,
	}, "<=");


	
	menubgline.reverse();
	menuToggle.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	menuToggle2.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	
}

  

// cursor-follow
var mWrap = $(".fd-video-3-area");
  
mWrap.hover(function () {
	var mContent = $(this).find("#magnetic-content");
	var mArea = $(this).find("#magnetic-area");

	function parallaxIt(e, target, movement = 1) {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		var boundingRect = mArea[0].getBoundingClientRect();
		var relX = e.pageX - boundingRect.left;
		var relY = e.pageY - boundingRect.top;

		gsap.to(mContent, {
			x: (relX - boundingRect.width / 2) * movement,
			y: (relY - boundingRect.height / 2 - scrollTop) * movement,
			ease: "none",
			duration: 1
		});
	}

	function callParallax(e) {
		parallaxIt(e, mWrap);
	}

	mArea.mousemove(function (e) {
		callParallax(e);
	});

	mArea.mouseleave(function (e) {
		gsap.to(mContent, {
			scale: 1,
			x: 0,
			y: 0,
			ease: "none",
			duration: 1
		});
	});

});

/* 



// serve-1-slider
if($('.fx-serve-1-active').length) {
	let slider = new Swiper('.fx-serve-1-active', {
		loop: true,
		spaceBetween: 32,
		speed: 500,
		slidesPerView: 4,

		autoplay: {
			delay: 3000,
		},

		navigation: {
			nextEl: ".fx-serve-1-slider-next",
			prevEl: ".fx-serve-1-slider-prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 4,
			},
		},
	});
}

// services-1-slider
if($('.fx-services-1-active').length) {
	let slider = new Swiper('.fx-services-1-active', {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		slidesPerView: 1,

		autoplay: {
			delay: 3000,
		},

		navigation: {
			nextEl: ".fx-services-1-slider-next",
			prevEl: ".fx-services-1-slider-prev",
		},

		pagination: {
			el: ".fx-services-1-slider-pagination",
			type: "fraction",
		},

	});
}

// testimonial-1-slider
if($('.fx-testimonial-1-active-1').length) {
	let slider = new Swiper('.fx-testimonial-1-active-1', {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		slidesPerView: 1,

		autoplay: {
			delay: 4000,
		},

		navigation: {
			nextEl: ".fx-testimonial-1-slider-next",
			prevEl: ".fx-testimonial-1-slider-prev",
		},

		pagination: {
			el: ".fx-t1-slider-pagination",
			clickable: true,
		},
	});
}

*/


// swiper( {
// 	loop: true,
// 	spaceBetween: 0,
// 	speed: 500,
// 	slidesPerView: 1,

// 	autoplay: {
// 		delay: 4000,
// 	},

// 	pagination: {
// 		el: ".fx-t1-slider-pagination",
// 		clickable: true,
// 	},
// });

/*
	marquee-activiton
*/
$('.js-marquee-wrapper').marquee({
	speed: 50,
	gap: 65,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
	startVisible:true,
})




// bootstrap-toltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* back-to-top */
var backtotop = $('.scroll_top');


backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});


/* counter */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

// wow-splitting-text
Splitting();

// wow-activation
if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};


/*
popup-video-activition
====start====
*/

if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}


/*
popup-img-activition
====start====
*/

if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

/*
popup-img-activition
====start====
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}

// parallax-img
$('.parallax-img').parallaxie({  
	speed: 0.5,    
});


})(jQuery);