if (window.location.href.indexOf('/blog/') !== -1) {
	document.write('<style type="text/css"> article, #content-in header {max-width: 768px; margin: 0 auto; }</style>');
}

$(function () {
	$('.footer-row-element .topic:contains("Facebook")').text('Stylově na Facebooku');
	$('.footer-row-element .topic:contains("Kontakt")').text('Rychlý kontakt');
});