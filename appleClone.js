//1) 먼저 현재 액티브되는 것 외에 다 하이드시킨다.
$(function(){
    $(".slide").hide();
    $(".activeSlide").show();
    $(".slide2").hide();
    $(".activeSlide2").show();
})

//2) 버튼을 누를 시 실행 할 커서 만든다. : curPos => 현재 5개/ 점3개의 배열있다고 생각.
//배열의 형태가 될 커서포인터 : 총 6개의 그림 두개씩 체인지 될 예정 [0,1/,2,3/,4,5]
let curPointer = 0;
let curDot = 0;
/* 이전버튼 : 0보다 크면 움직이고 0이면 멈춘다.*/
function prev(){
    if(curPointer > 1){
        $('.prev').removeAttr('disabled')
        document.querySelectorAll('.slide')[curPointer].classList.toggle('activeSlide');
        $('.slide').hide();
        document.querySelectorAll('.slide')[curPointer+1].classList.toggle('activeSlide');
        $('.slide').hide();
        curPointer -= 2;

        document.querySelectorAll('.eachdot')[curDot].classList.toggle('activeDot')
        curDot -= 1;
        document.querySelectorAll('.slide')[curPointer].classList.toggle('activeSlide');
        $('.activeSlide').fadeIn()
        document.querySelectorAll('.slide')[curPointer+1].classList.toggle('activeSlide');
        document.querySelectorAll('.eachdot')[curDot].classList.toggle('activeDot')
        $('.activeSlide').fadeIn()
    }else if( curPointer == 1){
        $('.prev').attr('class','disabled')
    }
}
/* 다음버튼 : 3보다 작으면 움직이고 3일때 멈춘다.  */
function next(){
    if(curPointer < 3){
        $('.next').removeAttr('disabled')
        document.querySelectorAll('.slide')[curPointer].classList.toggle('activeSlide');
        $('.slide').hide();
        document.querySelectorAll('.slide')[curPointer+1].classList.toggle('activeSlide');
        $('.slide').hide();
        curPointer += 2;

        document.querySelectorAll('.eachdot')[curDot].classList.toggle('activeDot')
        curDot += 1;
        //앞에가 0이라 가정했을때, 첫번째 배열상태가 액티브슬라이드로 토글 되야 한다.
        document.querySelectorAll('.slide')[curPointer].classList.toggle('activeSlide');
        $('.activeSlide').fadeIn()
        document.querySelectorAll('.slide')[curPointer+1].classList.toggle('activeSlide');
        document.querySelectorAll('.eachdot')[curDot].classList.toggle('activeDot')
        $('.activeSlide').fadeIn()
    }else if(curPointer == 3){
        $('.next').attr('class','disabled')
    }
}

//ipad 용 넘기기 prev2 / .slide2 / .activeSlide2 임.

let curPosForIpad = 0;
let curDotForIpad = 0;
//이전버튼 0보다 크면 움직이고 0보다 작으면 멈춤
function prev2(){
    if(curPosForIpad > 0){
        $('.prev2').removeAttr('disabled')
        document.querySelectorAll('.slide2')[curPosForIpad].classList.toggle('activeSlide2')
        $('.slide2').hide();
        document.querySelectorAll('.slide2')[curPosForIpad+1].classList.toggle('activeSlide2')
        $('.slide2').hide();
        curPosForIpad -= 2;

        document.querySelectorAll('.eachdotForIpad')[curDotForIpad].classList.toggle('activeDotForIpad')
        curDotForIpad -= 1;
        document.querySelectorAll('.slide2')[curPosForIpad].classList.toggle('activeSlide2')
        $('.activeSlide2').fadeIn();
        document.querySelectorAll('.slide2')[curPosForIpad+1].classList.toggle('activeSlide2')
        document.querySelectorAll('.eachdotForIpad')[curDotForIpad].classList.toggle('activeDotForIpad')
        $('.activeSlide2').fadeIn();
    }else if (curPosForIpad == 1){
        $('.prev2').attr('class','disabled')
    }
}
//다음버튼 3보다 작을때 움직이고, 3이면 멈춤
function next2(){
    if(curPosForIpad < 3){
        $('.next2').removeAttr('disabled')
        document.querySelectorAll('.slide2')[curPosForIpad].classList.toggle('activeSlide2')
        $('.slide2').hide();
        document.querySelectorAll('.slide2')[curPosForIpad+1].classList.toggle('activeSlide2')
        $('.slide2').hide();
        curPosForIpad += 2;

        document.querySelectorAll('.eachdotForIpad')[curDotForIpad].classList.toggle('activeDotForIpad')
        curDotForIpad += 1;
        document.querySelectorAll('.slide2')[curPosForIpad].classList.toggle('activeSlide2')
        $('.activeSlide2').fadeIn();
        document.querySelectorAll('.slide2')[curPosForIpad+1].classList.toggle('activeSlide2')
        document.querySelectorAll('.eachdotForIpad')[curDotForIpad].classList.toggle('activeDotForIpad')
        $('.activeSlide2').fadeIn();
    }else if(curPosForIpad == 3){
        $('.next2').attr('class','disabled')
    }
}

//마우스오버, 마우스
let acc = document.querySelectorAll('.accColumn');
let chnblue = document.querySelectorAll('.hoverblueP');
for(let i = 0; i< acc.length; i++){
    for(let j = 0; j <chnblue.length; j++){
        $(acc[i]).hover(function(e){
            if(e.type == 'mouseenter'){
                $(chnblue[i]).css('color','#0070c9')
            }else{
                $(chnblue[i]).css('color','black')
            }
        })
    }
}
