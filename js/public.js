$(function(){
    var pointSize = $(".pointer").width()/2;
    $("body").mousemove(function(e){    
        $('.pointer').css("top", e.pageY-pointSize);
        $('.pointer').css("left", e.pageX-pointSize);
        $('.pointer').fadeIn();
    });
    $("body").on("mouseleave", function(){
        $('.pointer').fadeOut();
    });

    $('.menu a').mouseover(function(){
        $('.pointer').addClass('pointerColor2');
    });
    $('.menu a').mouseleave(function(){
        $('.pointer').removeClass('pointerColor2');
        // $('.pointer').addClass('pointerColor1');
    });
});