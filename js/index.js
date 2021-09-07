// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change style of navbar on scroll
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Used to toggle the menu of specific Portolio
$(".ptfbar").click(function() {
    var x = this.id;
    new_x = x.slice(0, -1);
    content_ID = new_x.concat("C");
    console.log(x);
    console.log(new_x);
    console.log(content_ID);
    $(location).attr('href', '#' + content_ID);
    $('#' + content_ID).css("display", "block");
    if ($('#QR').css("display") == "block") {
        $('#QR').css("display", "none");
    }
});

// Used to shrink specific Portolio
$(".ptfB").click(function() {
    var x = this.id;
    new_x = x.slice(0, -1);
    content_ID = new_x.concat("C");
    ptf1 = "prgC";
    ptf2 = "photoC";
    ptf3 = "teachC";
    //console.log(x);
    //console.log(new_x);
    //console.log(content_ID);
    $('#' + content_ID).css("display", "none");
    $(location).attr('href', '#' + content_ID);
    if (($('#QR').css("display") != "none") && ($('#' + content_ID).css("display") != "none")) {
        $('#QR').css("display", "block");
    }
    /*
    if (($('#' + pt1).css("display") == "block") || ($('#' + pt2).css("display") == "block") || ($('#' + pt3).css("display") == "block"))) {
        $('#QR').css("display", "none");
    }
    else{
        
    }
    */
});