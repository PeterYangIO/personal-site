// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $(id).offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 1000);
});

if (window.location.hash) {
    setTimeout(setHashDisplay, 1000);
}

function setHashDisplay() {
    var hash = window.location.hash.substring(1);
    switch (hash) {
        case 'about':
            setDisplay('#about');
            break;
        case 'contact':
            setDisplay('#contact');
            break;
        default:
            console.log('Hash does not match any available content');
    }
}

function setDisplay(id){
    var main = $("#main");
    var contact = $("#contact");
    var about = $("#about");

    main.css("display", "none");
    contact.css("display", "none");
    about.css("display", "none");
    $('#back-button').slideToggle('fast');

    switch (id){
        case "#main":
            main.fadeIn('fast');
            break;
        case "#contact":
            contact.fadeIn('fast');
            break;
        case "#about":
            about.fadeIn('fast');
            break;
        default:
            break;
    }
}

function printFlash(message){
    var flash = document.getElementById('flash')
    flash.innerHTML = "<h2>" + message + "</h2><br><h3>this message will disappear in 3 seconds</h3>";
    flash.className = "flash";
    setTimeout(function(){
        $("#flash").fadeOut("slow", function(){})
    }, 3000);
}

function printFlashNoTimeout(message){
    var flash = document.getElementById('flash');
    $("*").css("cursor", "wait");
    flash.innerHTML = "<h2>Please wait</h2><br><h3>" + message + "</h3>";
    flash.className = "flash";
}