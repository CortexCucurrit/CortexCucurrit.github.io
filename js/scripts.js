function scroll_at(clicked_link, nav_height) {
    var element_id = clicked_link.attr('href');
    console.log(element_id);
    var scroll_to = 0;
    if (element_id.length) {
        //element_class += '-container';
        console.log($(element_id).offset().top);
        if ($(element_id).offset().top > nav_height) {
            scroll_to = $(element_id).offset().top - nav_height;
            console.log("scroll_to = " + scroll_to);
        }
    }
    if ($(window).scrollTop() != scroll_to) {
        $('body, html').stop().animate({ scrollTop: scroll_to }, 1000);
    }
}


jQuery(document).ready(function () {
	/* Navigation */
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        scroll_at($(this), $('nav').outerHeight());
    });
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});

function openWindow(url) {
    window.open(url, '_blank');
}