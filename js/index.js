


$(window).on('mousewheel DOMMouseScroll', function (e) {
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
    if (delta < 0) {
        if (!(num == 4)) {
            num++;
            if (num<=1) {    
                scrollstop3()
                // atrans.style.transform = 'matrix(1,0,0,1,0,-550)';
                maincontent.classList.remove('c');
                scroll1.classList.remove('c');
                scroll1.classList.add('a');
                maincontent.classList.add('b');
                leftgoldLine.style.height='50%';
                leftgoldLine.style.top='20%';
                rightgoldLine.style.top = '30%';
                rightgoldLine.style.height = '50px';
                menuwrap.style.top = '80px';
                portfoliobox.classList.remove('boxheight0');
                portfoliobox.classList.add('boxheight100');
                portfoliobox.classList.remove('delay0-5s');
                portfoliobox.classList.add('delay1-5s');
                mainContent2Text1.classList.remove('textani');
                mainContent2Text1.classList.add('textani2');
                mainContent2Text2.classList.remove('textani3');
                mainContent2Text2.classList.add('textani4');
                workbutton.style.opacity="1";
                homebutton.style.opacity="0.3";

            }
            else if(num<=2){
                scrollstop1();
                img2.classList.remove('img');
                img2.classList.add('img2')
                rightgoldLine.style.top = '35%';
                rightgoldLine.classList.remove('tran-dealy');
                rightgoldLine.classList.add('tran-dealy');
                // portfolioboxText2.innerHTML = "PS5"
                portfolioboxTextWrap.style.height='0%';
                TextWrapHeight30();
                TextChangeDelayDown();
                     
            }
            else if(num <=3 ){
                scrollstop1();
                img2.classList.remove('img2');
                img2.classList.add('img3');
                rightgoldLine.style.top = '40%';
                // portfolioboxText2.innerHTML = "BOOK"
                portfolioboxTextWrap.style.height='0%';
                TextWrapHeight30();
                TextChangeDelayDown();

                
            }
            else if(num <=4){
                scrollstop1();
                img2.classList.remove('img3');
                img2.classList.add('img4');
                rightgoldLine.style.top = '45%';
                // portfolioboxText2.innerHTML = "GUITAR"
                portfolioboxTextWrap.style.height='0%';
                TextWrapHeight30();
                TextChangeDelayDown();

            }
            
        }
    } else {
        if (!(idx == 0)) {
            idx--;
        }
        if ((num==1) ) {
            scrollstop3();
            num--;
            maincontent.classList.remove('b')
            scroll1.classList.remove('a')
            scroll1.classList.add('c')
            maincontent.classList.add('c')
            leftgoldLine.style.height='60px';
            leftgoldLine.style.top='40px';
            rightgoldLine.style.top = '0px';
            rightgoldLine.style.height = '200px';
            menuwrap.style.top = '130px';
            portfoliobox.classList.remove('boxheight100');
            portfoliobox.classList.add('boxheight0');
            portfoliobox.classList.remove('delay1-5s');
            portfoliobox.classList.add('delay0-5s');
            mainContent2Text1.classList.add('textani');
            mainContent2Text1.classList.remove('textani2');
            mainContent2Text2.classList.remove('textani4');
            mainContent2Text2.classList.add('textani3');
            // portfolioboxText.style.opacity='0';
            rightgoldLine.classList.remove('tran-dealy2');
            rightgoldLine.classList.add('tran-dealy');
            workbutton.style.opacity="0.3";
            homebutton.style.opacity="1";

            
        }
        else if(num==2){
            num--;
            scrollstop1();
            img2.classList.remove('img2');
            img2.classList.add('img');
            rightgoldLine.style.top = '30%';
            portfolioboxTextWrap.style.height='0%';
            TextWrapHeight30();
            TextChangeDelayUp();
            
        }
        else if(num==3){
            num--;
            scrollstop1();
            img2.classList.remove('img3');
            img2.classList.add('img2');
            rightgoldLine.style.top = '35%';
            portfolioboxTextWrap.style.height='0%';
            TextWrapHeight30();
            TextChangeDelayUp();

        }
        else if(num==4){
            num--;
            scrollstop1();
            img2.classList.remove('img4');
            img2.classList.add('img3');
            rightgoldLine.style.top = '40%';
            portfolioboxTextWrap.style.height='0%';
            TextWrapHeight30();
            TextChangeDelayUp();

        }
        
    }

console.log('스크롤',num);
console.log('idx',idx);
console.log('delta',delta);
})

function workpage(){
    scrollstop3()
    maincontent.classList.remove('c');
    scroll1.classList.remove('c');
    scroll1.classList.add('a');
    maincontent.classList.add('b');
    leftgoldLine.style.height='50%';
    leftgoldLine.style.top='20%';
    rightgoldLine.style.top = '30%';
    rightgoldLine.style.height = '50px';
    menuwrap.style.top = '80px';
    portfoliobox.classList.remove('boxheight0');
    portfoliobox.classList.add('boxheight100');
    portfoliobox.classList.remove('delay0-5s');
    portfoliobox.classList.add('delay1-5s');
    mainContent2Text1.classList.remove('textani');
    mainContent2Text1.classList.add('textani2');
    mainContent2Text2.classList.remove('textani3');
    mainContent2Text2.classList.add('textani4');
    num=1;
    workbutton.style.opacity="1";
    homebutton.style.opacity="0.3";
    

}
function homepage(){
    maincontent.classList.remove('b')
    scroll1.classList.remove('a')
    scroll1.classList.add('c')
    maincontent.classList.add('c')
    leftgoldLine.style.height='60px';
    leftgoldLine.style.top='40px';
    rightgoldLine.style.top = '0px'
    rightgoldLine.style.height = '200px';
    menuwrap.style.top = '130px';
    portfoliobox.classList.remove('boxheight100');
    portfoliobox.classList.add('boxheight0');
    portfoliobox.classList.remove('delay1-5s');
    portfoliobox.classList.add('delay0-5s');
    mainContent2Text1.classList.add('textani');
    mainContent2Text1.classList.remove('textani2');
    mainContent2Text2.classList.remove('textani4');
    mainContent2Text2.classList.add('textani3');
    // portfolioboxText.style.opacity='0';
    rightgoldLine.classList.remove('tran-dealy2');
    rightgoldLine.classList.add('tran-dealy');
    num=0;
    workbutton.style.opacity="0.3";
    homebutton.style.opacity="1";
    
    img2.classList.remove('img4');
    img2.classList.remove('img3');
    img2.classList.remove('img2');
    img2.classList.add('img');
    rightgoldLine.style.top = '30%';
    portfolioboxTextWrap.style.height='0%';
}

//스크롤 스탑 함수

//3초
function scrollstop3(){
    $('body').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
    })
    setTimeout(function(){
        $('body').off('scroll touchmove mousewheel');
        console.log('scroll stop')
    },3000)
}
//1초
function scrollstop1(){
    $('body').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
    })
    setTimeout(function(){
        $('body').off('scroll touchmove mousewheel');
        console.log('scroll stop')
    },1000)
}
function TextWrapHeight30(){
setTimeout(function(){
    portfolioboxTextWrap.style.height='30%';
},800)
}

function TextChangeDelayDown(){
    for(i=1; i<5; i++){
        if(i==num){
            if(i==2){
                setTimeout(function(){
                    portfolioboxText2.innerHTML = "GUITAR"
                },800);
            }
            else if(i==3){
                setTimeout(function(){
                    portfolioboxText2.innerHTML = "PS5"
                },800);
            }
            else if(i==4){
                setTimeout(function(){
                    portfolioboxText2.innerHTML = "BOOK"
                },800);
            }
        }
    }
}

function TextChangeDelayUp(){
    for(i=1; i<5; i++){
        if(i==num){
            if(i==1){
                setTimeout(function(){
                    portfolioboxText2.innerHTML = "SHOES"
                },800);
            }
            else if(i==2){
                setTimeout(function(){
                    portfolioboxText2.innerHTML = "GUITAR"
                },800);
            }
            else if(i==3){
                setTimeout(function(){
                    portfolioboxText2.innerHTML = "PS5"
                },800);
            }
        }
    }
}




$(function(){



    $(".glitch-img").click(function(){
        // $('.portfolioWrap').removeClass('portfolioWrapTrans');
        // $('.portfolioWrap').addClass('e');
        $('.portfolioWrap').css({'transform' : 'matrix(-1, 0, 0, -1, 0 ,0 )'});
        $('.portfolioWrap').css({'transition' : 'all 2s cubic-bezier(.42,0,0,1.01)'});
        // $('.mainContent2-Flex2').css({'width':'100000%','height':'100%'});
        // $('.mainContent2-Flex2').css('height','100%');
        $('.mainContent2-Flex2').removeClass('mainContent2-flex2length');
        $('.mainContent2-Flex2').addClass('mainContent2-flex2-100');
        $(document).off('mousemove')
        setTimeout(function(){
            if(num==1){
                location.href = "sub1.html";
            }
            else if(num==2){
                location.href = "sub2.html";
            }
            else if(num==3){
                location.href = "sub3.html";
            }
            else if(num==4){
                location.href = "sub4.html";
            }
            
            
        console.log('scroll stop')
     },3000)
        
    });

    
    $(".Work-button").mouseover(function(){
        $(".Work-button").css("opacity","1");
    });
    $(".Work-button").mouseleave(function(){
        if(num<1){
            $(".Work-button").css("opacity","0.3");
        }
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
        if(num!=0){
            $(".Home-button").css("opacity","0.3");
        }
    });

    
});
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


$(document).on("mousemove", function(event) {
  var window_height = $(this).height();
  var window_width = $(this).width();
  var mouseXpos = event.clientX;
  var mouseYpos = event.clientY;
  var YrotateDeg = (window_width / 2 - mouseXpos) * 0.03;
  var XrotateDeg = (window_height / 1 - mouseYpos) * -0.03;
  $(".portfolioWrapTrans").css(
    "transform",
    "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)"
  );
});
$(document).on("mousemove", function(event) {
  var window_height = $(this).height();
  var window_width = $(this).width();
  var mouseXpos = event.clientX;
  var mouseYpos = event.clientY;
  var YrotateDeg = (window_width / 2 - mouseXpos) * 0.03;
  var XrotateDeg = (window_height / 1 - mouseYpos) * -0.03;
  $(".portfolio-Text").css(
    "transform",
    "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)"
  );
});


var a=0;
function aboutPage(){
    a=1;
    $('.loadingWrap').css('opacity','1');
    $('.loadingWrap').css('z-index','9999');
    document.querySelector('.loadingWrap > div:nth-child(1)').classList.remove('matrix2000');
    document.querySelector('.loadingWrap > div:nth-child(1)').classList.add('matrix0');
    document.querySelector('.loadingWrap > div:nth-child(3)').classList.remove('matrix2000');
    document.querySelector('.loadingWrap > div:nth-child(3)').classList.add('matrix0');
    document.querySelector('.loadingWrap > div:nth-child(2)').classList.remove('matrix-2000');
    document.querySelector('.loadingWrap > div:nth-child(2)').classList.add('matrix0');
    $(".Home-button").css("opacity","0.3");
    $(".About-button").css("opacity","1");
    
    

    setTimeout(function(){
        document.querySelector('.loadingWrap > div:nth-child(1)').classList.add('matrix2000');
        document.querySelector('.loadingWrap > div:nth-child(1)').classList.remove('matrix0');
        document.querySelector('.loadingWrap > div:nth-child(3)').classList.add('matrix2000');
        document.querySelector('.loadingWrap > div:nth-child(3)').classList.remove('matrix0');
        document.querySelector('.loadingWrap > div:nth-child(2)').classList.add('matrix-2000');
        document.querySelector('.loadingWrap > div:nth-child(2)').classList.remove('matrix0');
        $('.mainImg').css('background','url(../img/main/bg-overlay.png)')
        $(".mainContent-Text").css("opacity","0");

        
    },1400)
    setTimeout(function(){
        location.href = "about.html";     
    },2200)
}