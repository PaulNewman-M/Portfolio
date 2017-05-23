
$('#target3').hover(function() {   $('#target3').stop().animate({'margin-left': '100px'}, 1000);
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
   $('html,body').animate({
        scrollTop: $("#header").offset().top
    }, 1000);
    $(' html,body').animate({
        scrollTop: $(".firstdiv").offset().top
    }, 1000);
   
});


$("#skills").click(function() {
    $('html, body').animate({
        scrollTop: $(".seconddiv").offset().top
    }, 1000);
   
});

$("#contacts").click(function() {
    $('html, body').animate({
        scrollTop: $(".forthdiv").offset().top
    }, 1000);
});
$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $(".thirddiv").offset().top
    }, 1000);
});


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-99773844-1', 'auto');
  ga('send', 'pageview');
