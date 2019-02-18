$(document).ready(function() {
    $(".next").click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: '+=960'}, 800);
        
    });
    $(".prev").click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: '-=960'}, 800);
    });
});


