$(function () {
    let dropdown = $('#full-name');

    dropdown.empty();

    dropdown.append('<option selected="true" value="" disabled>Select Your Name</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'json/invite-list.json';

    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.name).text(entry.name));
        })
    });
});

function passwordSubmit() {
    $('#alert-signin-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are checking your password.'));
    let x = document.getElementById("formPassword").value;
    switch (x) {
        case "BridalParty":
            window.location.assign("/BridalParty.html");
            //document.getElementById("rehearsalSwitch").style.display = "block";
            break;
        default:
            $('#alert-signin-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your password is incorrect.  Please try again.'));
    }
}

function toggleElement(elementId) {
    let x = document.getElementById(elementId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(window).on('load', function () {
    $('#login-modal').modal('show');
});