/*Login*/


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


var offset = 300, 
  offsetOpacity = 1200, 
  scrollDuration = 700;

function login(){
	alert("Login Successful!")
}

function Register(){
	alert("Registration Successful!")
}



