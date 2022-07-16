
$ = jQuery.noConflict();
jQuery(document).ready(($) => {
	
	$('[data-toggle="tooltip"]').tooltip()

	$('.add-to-cart').on('click', function () {add_to_cart(this)})


	$('form:not(.submitable)').on('submit', (e) => {
		e.preventDefault()
	})

	$('.products-slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 10,
		stagePadding: 15,
		nav: true,
		rewind: true,
		responsiveClass: true,
		responsive: {
			0: { items: 1 },
			256: { items: 1.05 },
			356: { items: 1.4 },
			576: { items: 2.7 },
			768: { items: 3.1 },
			992: { items: 4 },
			1100: { items: 4.5 },
			1200: { items: 5 },
			1350: { items: 5.2 },
			1400: { items: 5.8 },
		}
	})

	let popup_modal = $('#popup_modal');

	
	$('#modal_trigger').on('click', (e) => {
		e.preventDefault()
		popup_modal.css({
			visibility: 'visible',
			opacity: '1'
		})
	})

	$('#modal_terminator').on('click', () => {
		popup_modal.css({
			visibility: 'hidden',
			opacity: '0'
		})
	})

	let signin_pill = $('#signin_pill_trigger')
	let signup_pill = $('#signup_pill_trigger')
	
	signin_pill.on('click', () => retrieve_signin_pill())
	signup_pill.on('click', () => retrieve_signup_pill())
})



add_to_cart = (e) => {
	var product = get_product_info(e)
}

get_product_info = (e) => {
	$body = $(e).parent().siblings('.card-body')
	$name = $body.find('.product-title').text()
	$price = parseFloat($body.find('.product-price').text())
	$img_src = $(e).parent().siblings('.card-header').find('.product-image').attr('src')
	return {
		name: $name,
		price: $price,
		image: $img_src
	}
}


retrieve_signin_pill = () => {
	let signin_pill = $('#signin_pill_trigger')
	let signup_pill = $('#signup_pill_trigger')

	!signin_pill.hasClass('active') ? signin_pill.addClass('active') : ''
	signup_pill.removeClass('active')

	$('#pillbox_signin').css({ display: 'block' })
	$('#pillbox_signup').css({ display: 'none' })
}


retrieve_signup_pill = () => {
	let signup_pill = $('#signup_pill_trigger')
	let signin_pill = $('#signin_pill_trigger')

	!signup_pill.hasClass('active') ? signup_pill.addClass('active') : ''
	signin_pill.removeClass('active')

	$('#pillbox_signup').css({ display: 'block' })
	$('#pillbox_signin').css({ display: 'none' })
}