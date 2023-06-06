$(function(){
    $(".Work-button").mouseover(function(){
        $(".Work-button").css("opacity","1");
    });
    $(".Work-button").mouseleave(function(){

    });
    $(".About-button").mouseover(function(){
        $(".About-button").css("opacity","1");
    });
    $(".About-button").mouseleave(function(){
        if(a==0){
            $(".About-button").css("opacity","0.3");
        }else{
            
        }
    });
    $(".Home-button").mouseover(function(){
        $(".Home-button").css("opacity","1");
    });
    $(".Home-button").mouseleave(function(){
        if(b==0){
            $(".Home-button").css("opacity","0.3");
        }
    });


    $('.scrollText p').fadeIn(1000);
    setTimeout(function(){
        $('.scrollLine').animate({'height':'30px'},300);
    },500)

    $('.nextimg').mouseover(function(){
        $('.nextimg').css('background-color','#b28949');
    });
    $('.nextimg').mouseleave(function(){
        $('.nextimg').css('background-color','rgba(85, 84, 84, 0.6)');
    });
    $('.nextimg').click(function(){
        $('.nextimgWrap').removeClass('nextimgWrapHeight');
        $('.nextimgWrap').addClass('nextimgWrapHeight1');
        $('.textline1').animate({'width':'0%'},1000);
        $('.textline2').animate({'width':'0%'},1000);
        $('.textline3').animate({'height':'0%'},1000);
        $('.textline4').animate({'height':'0%'},1000);
        $('.nextimgWrap h3').fadeOut(1000);
        setTimeout(function(){
            location.href = "sub1.html";     
        },2200)
    });




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

    $(".computerImg img").click(function(){
        location.href = "https://gogyounglim.github.io/project7/";
    })

    
});

;
let num = 0;
let idx = 0;
let delta;
let scrollcon = document.querySelector('.scrollContent');
let introCon1 = document.querySelector('.introCon1');


$(window).on('mousewheel DOMMouseScroll', function (e) {
delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
    if (delta < 0) {
        if (!(num == 35) && delta < 0) {
            num++;
            if (num>=1) {    
                $(".scrollContent").css("transform","translate3d(0px," +num*-100+"px,"+ "0px)");
                $(".rightgold").css("transform","translate3d(0px," +num*30+"px,"+ "0px)");
                $('.scrollText p').fadeOut();
                $('.scrollLine').animate({'height':'0px'},200);
            }
            if(num>=5) {
                $('.introCon1').css("opacity","1");
                $('.introCon2 > p').css("opacity","1");  
                $('.introCon1').css("transform","matrix(1, 0, 0, 1, 0, 0)");    
                $('.introMoveNum').css("transform","matrix(1, 0, 0, 1, 0, 0)");
                $('.introCon2 > p').css("transform","matrix(1, 0, 0, 1, 0, 0)");
            }
            if(num>=14){
                $('.con1').css('transform','matrix(1, 0, 0, 1, 0, 0)');
                $('.con1').css('opacity','1');
            }
            if(num>=22){
                $('#sliderWrap > div:nth-child(2)').css('margin-left','0px');
                $('.slider').css('left','0%');
            }
        }
    } else {
        if (!(idx == 0)) {
            idx--;
        }
        if ((num>=1) ) {
            num--;
            $(".scrollContent").css("transform","translate3d(0px," +num*-100+"px,"+ "0px)");
            $(".rightgold").css("transform","translate3d(0px," +num*30+"px,"+ "0px)");
        }
    }
console.log('스크롤',num);
console.log('idx',idx);
console.log('delta',delta);
})

//슬라이더 

let slider = document.querySelector(".slider")
let innerSlider = document.querySelector(".slider-inner")
let pressed = false
let startx
let x

slider.addEventListener("mousedown", e => {
    pressed = true
    startx = e.offsetX - innerSlider.offsetLeft
    
})



window.addEventListener("mouseup", () => {
    pressed = false
})

slider.addEventListener("mousemove", e => {
if (!pressed) return
e.preventDefault()
x = e.offsetX-100

innerSlider.style.left = `${x - startx}px `

checkboundary()
})




function checkboundary() {
let outer = slider.getBoundingClientRect()
let inner = innerSlider.getBoundingClientRect()

if (parseInt(innerSlider.style.left) > 0) {
innerSlider.style.left = "200";
} else if (inner.right < outer.right) {
// innerSlider.style.left = `-${inner.width - outer.width}px`
}
}
function homepage(){
$('.loadingWrap').css('opacity','1');
$('.loadingWrap').css('z-index','9999');
document.querySelector('.loadingWrap > div:nth-child(1)').classList.remove('matrix2000');
document.querySelector('.loadingWrap > div:nth-child(1)').classList.add('matrix0');
document.querySelector('.loadingWrap > div:nth-child(3)').classList.remove('matrix2000');
document.querySelector('.loadingWrap > div:nth-child(3)').classList.add('matrix0');
document.querySelector('.loadingWrap > div:nth-child(2)').classList.remove('matrix-2000');
document.querySelector('.loadingWrap > div:nth-child(2)').classList.add('matrix0');
$(".Work-button").css("opacity","0.3");
$(".Home-button").css("opacity","1");

setTimeout(function(){
    document.querySelector('.loadingWrap > div:nth-child(1)').classList.add('matrix2000');
    document.querySelector('.loadingWrap > div:nth-child(1)').classList.remove('matrix0');
    document.querySelector('.loadingWrap > div:nth-child(3)').classList.add('matrix2000');
    document.querySelector('.loadingWrap > div:nth-child(3)').classList.remove('matrix0');
    document.querySelector('.loadingWrap > div:nth-child(2)').classList.add('matrix-2000');
    document.querySelector('.loadingWrap > div:nth-child(2)').classList.remove('matrix0');
    $('.mainImg').css('background','url(../img/main/bg-overlay.png)')
    $('.scrollContent > h3').css('display','none');
    
},1400)
setTimeout(function(){
    location.href = "index.html";     
},2200)

}
function aboutPage(){
$('.loadingWrap').css('opacity','1');
$('.loadingWrap').css('z-index','9999');
document.querySelector('.loadingWrap > div:nth-child(1)').classList.remove('matrix2000');
document.querySelector('.loadingWrap > div:nth-child(1)').classList.add('matrix0');
document.querySelector('.loadingWrap > div:nth-child(3)').classList.remove('matrix2000');
document.querySelector('.loadingWrap > div:nth-child(3)').classList.add('matrix0');
document.querySelector('.loadingWrap > div:nth-child(2)').classList.remove('matrix-2000');
document.querySelector('.loadingWrap > div:nth-child(2)').classList.add('matrix0');
$(".Work-button").css("opacity","0.3");
$(".About-button").css("opacity","1");

setTimeout(function(){
    document.querySelector('.loadingWrap > div:nth-child(1)').classList.add('matrix2000');
    document.querySelector('.loadingWrap > div:nth-child(1)').classList.remove('matrix0');
    document.querySelector('.loadingWrap > div:nth-child(3)').classList.add('matrix2000');
    document.querySelector('.loadingWrap > div:nth-child(3)').classList.remove('matrix0');
    document.querySelector('.loadingWrap > div:nth-child(2)').classList.add('matrix-2000');
    document.querySelector('.loadingWrap > div:nth-child(2)').classList.remove('matrix0');
    $('.mainImg').css('background','url(../img/main/bg-overlay.png)')
    $('.scrollContent > h3').css('display','none');
    $('.scrollText').css('display','none');
    
},1400)
setTimeout(function(){
    location.href = "about.html";     
},2200)

}

