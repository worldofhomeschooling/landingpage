(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	if(typeof videoPopup === 'function' && $('.play').length){
		videoPopup();
	}

	$('.owl-carousel').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:true,
	    autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:1
	        },
	        750:{
	            items:2
	        },
	        1000:{
	            items:3
	        },
	        1200:{
	            items:3
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	(function init() {
	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      'total': t,
	      'days': days,
	      'hours': hours,
	      'minutes': minutes,
	      'seconds': seconds
	    };
	  }
	  
	  function initializeClock(endtime){
	  var elDays = document.querySelector(".days > .value");
	  var elHours = document.querySelector(".hours > .value");
	  var elMinutes = document.querySelector(".minutes > .value");
	  var elSeconds = document.querySelector(".seconds > .value");
	  if(!elDays || !elHours || !elMinutes || !elSeconds) return;
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    elDays.innerText=t.days;
	    elHours.innerText=t.hours;
	    elMinutes.innerText=t.minutes;
	    elSeconds.innerText=t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}
	if(document.querySelector(".days > .value")){
	  initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	}
	})()

})(jQuery);