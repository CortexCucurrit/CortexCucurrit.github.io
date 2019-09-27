$("#login-form").submit(function (event) {
    if (hasLocalStorage() === true) {
        window.localStorage.setItem('userPassword', $('#password').val());
        formHandler(event);
    } else {
        formHandler(event);
    }
});

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
            window.location.replace('/admin.html');
            break;
        case "Westover":
            window.location.replace('/westover.html');
            break;
        case "Seal Harbor":
            window.location.replace('/seal-harbor.html');
            break;
        case "Bar Harbor":
            window.location.replace('/bar-harbor.html');
            break;
        default:
            toggleDisplay('invalidForm');
    }
}