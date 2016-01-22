
$(document).ready(function () {
	/* add target=_blank to all links which start with http:// */
	$("a[href^='http']").attr("target", "_blank");

	$("#mobile-nav a").on("click", function () {
		$("nav#mobilenav").toggleClass("on");
	});

	$("nav#mobilenav a.has-sub").click(function () {
		$(this).nextAll('ul:first').animate({ opacity: 1, height: 'toggle' }, 700, function () { });
		$(this).off();
		return false;
	});

	$("#nav#mobilenav li:has(ul)").toggleClass("hidden");

});



/* smooth scroll to in-page links */
(function ($) {

	var jump = function (e) {
		if (e) {
			e.preventDefault();
			var target = $(this).attr("href");
		}
		else {
			var target = location.hash;
		}

		if (target == "#") {
			var offset = 0;
		}
		else {
			var offset = $(target).offset().top;
		}

		$('html,body').animate({ scrollTop: offset }, 1000, function () { location.hash = target; });
	}


	$('html, body').hide()

//	$(document).ready(function () {

		if ($('#tabs').length == 0) {		

			$("a[href^='#']").bind("click", jump);

			if (location.hash) {
				setTimeout(function () {
					$('html, body').scrollTop(0).show();
					jump();
				}, 0);
			} else {
				$('html, body').show()
			}
		} else {
			$('html, body').show()
		}
//	});

})(jQuery)

/* initialize tabs */
$(function () {
	$("#tabs").tabs();
});


/* initialize fancybox for videos */
$(document).ready(function () {
	$(".video-article").fancybox({
	});
});

$(document).ready(function () {
	$(".lightbox").fancybox({
	});
});


/* event handlers */
$(window).scroll(function () {
	if ($(window).scrollTop() > 500) {
		$("#gototop").removeClass("hidden");
	}

	if ($(window).scrollTop() < 500) {
		$("#gototop").addClass("hidden");
	}
});




function SwitchCal(obj, cal) {
	$('.cal_nav li a').each(function () { $(this).removeClass('on'); });
	$(obj).addClass('on');
	$('#cal_list').html($('#' + cal).html());
}
