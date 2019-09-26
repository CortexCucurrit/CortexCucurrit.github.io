//$("#login-form").submit(function (event) {
//    if (hasLocalStorage() === true) {
//        window.localStorage.setItem('userPassword', $("#inputPassword").val());
//        formHandler(event);
//        location.reload();
//    } else {
//        formHandler(event);
//    }
//});

function hasLocalStorage() {
    var test = 'test';
    try {
        window.localStorage.setItem('test1', test);
        window.localStorage.removeItem('test1');
        return true;
    } catch (e) {
        return false;
    }
}

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
    var credential;
    if (hasLocalStorage() === true) {
        credential = window.localStorage.getItem('userPassword');
    } else {
        if ($("#inputPassword").val()) {
            credential = $("#inputPassword").val();
        } else {
            credential = null;
        }
    }
    
    switch (credential) {
        case null:
            break;
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
            toggleDisplay('navPhotos');
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
        case "Seal Harbor":
            toggleDisplay('topNav');
            toggleDisplay('navPhotos');
            toggleDisplay('join-us');
            toggleDisplay('events');
            toggleDisplay('accommodations');
            toggleDisplay('travel');
            toggleDisplay('things-to-do');
            toggleDisplay('rsvp-container');
            toggleDisplay('ceremony');
            toggleDisplay('login');
            break;
        case "Bar Harbor":
            toggleDisplay('topNav');
            toggleDisplay('navPhotos');
            toggleDisplay('join-us');
            toggleDisplay('events');
            toggleDisplay('accommodations');
            toggleDisplay('travel');
            toggleDisplay('things-to-do');
            toggleDisplay('rsvp-container');
            toggleDisplay('login');
            break;
        default:
            toggleDisplay('invalidForm');
    }
}

function scroll_at(clicked_link, nav_height) {
    var element_id = clicked_link.attr('href');
    console.log(element_id);
    var scroll_to = 0;
    if (element_id.length) {
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

function openNav() {
    document.getElementById("photoOverlay").style.display = "block";
    document.getElementById("topNav").style.display = "none";
}

function closeNav() {
    document.getElementById("photoOverlay").style.display = "none";
    document.getElementById("topNav").style.display = "block";
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

