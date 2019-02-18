$(window).scroll(function() {
    var theta = Math.trunc($(window).scrollTop() / $(window).height() *10);
    console.log(theta);
    if (theta >0 && theta <8){
        $('.arianne__dot__1').addClass('highlight');
        $('.arianne__dot__2').removeClass('highlight');
    }
    else if (theta >= 8 && theta <21){
        $('.arianne__dot__1').removeClass('highlight');
        $('.arianne__dot__2').addClass('highlight');
        $('.arianne__dot__3').removeClass('highlight');
    }
    else if (theta >= 21 && theta <32){
        $('.arianne__dot__2').removeClass('highlight');
        $('.arianne__dot__3').addClass('highlight');
        $('.arianne__dot__4').removeClass('highlight');
    }
    else if (theta >= 32 && theta <45){
        $('.arianne__dot__3').removeClass('highlight');
        $('.arianne__dot__4').addClass('highlight');
        $('.arianne__dot__5').removeClass('highlight');
    }
    else if (theta >= 45 && theta <48){
        $('.arianne__dot__4').removeClass('highlight');
        $('.arianne__dot__5').addClass('highlight');
    }
    if (theta >= 56 ){
        $('.mover').addClass('none');
        $('.petiteBarre').addClass('none');
    }
    else {
        $('.mover').removeClass('none');
        $('.petiteBarre').removeClass('none');
    }
});