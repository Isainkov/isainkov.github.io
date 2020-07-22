$(document).ready(function(){
	$("a.nav-link").click(function(){
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 700,
			easing: "swing"
		});
		return false;
	});

	$('.popup-click').on("click", function(){
		$('.overlay').show();
	});
	$('.popup-close').on("click", function(){
$('.overlay').hide();
	});

});