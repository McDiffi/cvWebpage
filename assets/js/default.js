$(document).ready(function(){
    if(window.innerWidth > 375){
        $('.carousel-inner, .carousel-item').height(window.innerHeight-74);
    } else {
        $('.carousel-inner, .carousel-item').height(window.innerHeight+100);
    }

    $(window).resize(function(){
        if(window.innerWidth > 375){
            $('.carousel-inner, .carousel-item').height(window.innerHeight-74);
        } else {
            $('.carousel-inner, .carousel-item').height(window.innerHeight+100);
        }
    });
});