$("#btnLogin").click(function (event) {
    formHandler(event);
});

function toggleDisplay(item) {
    var x = document.getElementById(item);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function formHandler(event) {
    event.preventDefault();
    var credential = $("#inputPassword").val();
    switch (credential) {
        case "CarriageHouse":
            toggleDisplay('topNav');
            toggleDisplay('navPhotos');
            toggleDisplay('navRegistry');
            toggleDisplay('join-us');
            toggleDisplay('events');
            toggleDisplay('accommodations');
            toggleDisplay('travel');
            toggleDisplay('things-to-do');
            toggleDisplay('rsvp-container');
            toggleDisplay('rehearsal');
            toggleDisplay('ceremony');
            toggleDisplay('login');
            break;
        case "Westover":
            toggleDisplay('topNav');
            toggleDisplay('join-us');
            toggleDisplay('events');
            toggleDisplay('accommodations');
            toggleDisplay('travel');
            toggleDisplay('things-to-do');
            toggleDisplay('rsvp-container');
            toggleDisplay('rehearsal');
            toggleDisplay('ceremony');
            toggleDisplay('login');
            break;
        case "SealHarbor":
            toggleDisplay('topNav');
            toggleDisplay('join-us');
            toggleDisplay('events');
            toggleDisplay('accommodations');
            toggleDisplay('travel');
            toggleDisplay('things-to-do');
            toggleDisplay('rsvp-container');
            toggleDisplay('ceremony');
            toggleDisplay('login');
            break;
        case "BarHarbor":
            toggleDisplay('topNav');
            toggleDisplay('join-us');
            toggleDisplay('events');
            toggleDisplay('accommodations');
            toggleDisplay('travel');
            toggleDisplay('things-to-do');
            toggleDisplay('rsvp-container');
            toggleDisplay('login');
            break;
        default:
            console.log("Credential is invalid");
    }
}

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

function openWindow(url) {
    window.open(url, '_blank');
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

