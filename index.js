
$('#target3').hover(function() {
     $('#target3').stop().animate({'margin-left': '100px'}, 1000);
}, function() {
     //your unhover logic
     $('#target3').stop().animate({'margin-left': '0'}, 1000);
});

$('#target4').hover(function() {
     $('#target4').stop().animate({'margin-right': '100px'}, 1500);
}, function() {
     //your unhover logic
     $('#target4').stop().animate({'margin-right': '0'}, 1500);
});
$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#info").offset().top
    }, 1000);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects1").offset().top
    }, 1000);
   
});

$("#contacts").click(function() {
    $('html, body').animate({
        scrollTop: $("#target5").offset().top
    }, 1000);
});