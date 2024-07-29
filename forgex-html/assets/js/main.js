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

		setTimeout(function() {
			if($('.fx-hero-1-active').length) {
				let slider = new Swiper('.fx-hero-1-active', {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					effect: "fade",
					fadeEffect: {
						crossFade: true
					},
					autoplay: {
						delay: 4000,
					},
			
					pagination: {
						el: ".fx-hero-1-pagination",
						clickable: true,
					  },
			
			
				});
			}
		}, 1000);

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

// title-animation
if($('[txaa-split-text-1]').length) {
	var txasplit1 = $('[txaa-split-text-1]');
	if(txasplit1.length == 0) return; gsap.registerPlugin(SplitText); txasplit1.each(function(index, el) {
		el.split = new SplitText(el, { 
		type: "lines,words",
		linesClass: "split-line"
		});
	});
}


if($('.txaa-split-text-2').length) {
	var txasplit2 = $(".txaa-split-text-2");

	if(txasplit2.length == 0) return; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
	
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
	
		if( $(el).hasClass('txaa-split-text-2-ani') ){
			gsap.set(el.split.chars, {
				opacity: 0,
				x: "-5",
			});
		}
	
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				end: "top 60%",
				markers: false,
				scrub: 1,
			},
	
			x: "0",
			y: "0",
			opacity: 1,
			duration: .7,
			stagger: 0.2,
		});
	
	});
}

if($('.txaa-split-text-3').length) {
	var txasplit2 = $(".txaa-split-text-3");

	if(txasplit2.length == 0) return; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
	
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
	
		if( $(el).hasClass('txaa-split-text-3-ani') ){
			gsap.set(el.split.chars, {
				opacity: .2,
				x: "-5",
			});
		}
	
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				end: "top 60%",
				markers: false,
				scrub: 1,
			},
	
			x: "0",
			y: "0",
			opacity: 1,
			duration: .7,
			stagger: 0.2,
		});
	
	});
}




gsap.utils.toArray(".txxascale1").forEach(function(container) {
    let image = container.querySelector("img");
  
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
		  start: "top 90%",
		  toggleActions: 'play none none reverse',
		  markers: false,
        },
      }); 

      tl.from(image, {
        scale: 2,
		duration: 1,
      }).to(image, {
		scale: 1,
		duration: 1,
      }); 

});

gsap.utils.toArray(".txxaslideup").forEach(function(container) {
    let image = container.querySelector(".txxaslideup-item");
  
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
		  start: "top 90%",
		  toggleActions: 'play none none reverse',
		  markers: false,
		  stagger: 0.3,
        },
      }); 

      tl.from(image, {
        yPercent: 100,
		duration: .5,
		stagger: 0.3,
      }).to(image, {
		yPercent: 0,
		duration: .5,
		stagger: 0.3,
      }); 

});



const txaaredius = gsap.utils.toArray('.txaaredius');
txaaredius.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ borderRadius: "0", marginLeft: "0", marginRight: "0", duration: 1, }, 
	{ borderRadius: "16px" , marginLeft: "12px",  marginRight: "12px", duration: 1, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 80%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,

	});
});

const txaascale0 = gsap.utils.toArray('.txaascale0');
txaascale0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scaleX: 0, duration: 1, }, 
	{ scaleX: 1, duration: 1, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 80%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,

	});
});

const txaaslideup = gsap.utils.toArray('.txaaslideup');
txaaslideup.forEach((box, i) => {
	const anim = gsap.from(box, 
		
	{ yPercent: 10, duration: .5, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 80%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,

	});
});


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