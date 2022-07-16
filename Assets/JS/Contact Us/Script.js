// JavaScript Document

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


$ = jQuery.noConflict();
jQuery(document).ready(function ($) {
	$('form').on('submit', function (e) {
		e.preventDefault();
	});
	$('#modal_terminator').on('click', function () {
		$('#popup_modal').css({'visibility': 'hidden', 'opacity': '0'});
	});

	$('#modal_trigger').on('click', function () {
		$('#popup_modal').css({'visibility': 'visible', 'opacity': '1'});
	});

	$('#signin_pill_trigger').on('click', function(e) {
		e.preventDefault(); signin_pill();
	});
	$('#signup_pill_trigger').on('click', function(e) {
		e.preventDefault(); signup_pill();
	});

	function signin_pill() {
		$('#signin_pill_trigger').removeClass('active');
		$('#signin_pill_trigger').addClass('active');
		$('#signup_pill_trigger').removeClass('active');

		$('#pillbox_signin').css({'display': 'block'});
		$('#pillbox_signup').css({'display': 'none'});
	}
	function signup_pill() {
		$('#signup_pill_trigger').removeClass('active');
		$('#signup_pill_trigger').addClass('active');
		$('#signin_pill_trigger').removeClass('active');

		$('#pillbox_signup').css({'display': 'block'});
		$('#pillbox_signin').css({'display': 'none'});
	}
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}