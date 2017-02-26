$('a.hamburger-menu').click(function() { 
   $('nav.main-menu, .hide').toggleClass('show');
   });



$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});

