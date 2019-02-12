$(window).scroll(function() {
    var theta = Math.trunc($(window).scrollTop() / $(window).height() *10);
    console.log(theta)
    if (theta >0 && theta <8){
        $('.arianne__dot__1').addClass('highlight');
        $('.arianne__dot__2').removeClass('highlight');
    }
    else if (theta >= 8 && theta <18){
        $('.arianne__dot__1').removeClass('highlight');
        $('.arianne__dot__2').addClass('highlight');
        $('.arianne__dot__3').removeClass('highlight');
    }
    else if (theta >= 18 && theta <28){
        $('.arianne__dot__2').removeClass('highlight');
        $('.arianne__dot__3').addClass('highlight');
        $('.arianne__dot__4').removeClass('highlight');
    }
    else if (theta >= 28 && theta <38){
        $('.arianne__dot__3').removeClass('highlight');
        $('.arianne__dot__4').addClass('highlight');
        $('.arianne__dot__5').removeClass('highlight');
    }
    else if (theta >= 38 && theta <48){
        $('.arianne__dot__4').removeClass('highlight');
        $('.arianne__dot__5').addClass('highlight');
    }
});