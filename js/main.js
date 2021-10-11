var btnCall = document.querySelector(".btnCall"); 

var menuMo = document.querySelector(".menuMo"); 

btnCall.onclick = function(e){
    e.preventDefault(); 
    
    btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on"); 
}

// 

// const $frame = $("#TermCheckWrap");
// const $btns = $frame.find("dt");
// const $boxs = $frame.find("dd");

// const $TermChk = $(".ui_chk");



// let speed = 0;

//event binding
// $btns.on("click", function(e){
//     e.preventDefault();
    
//     //클릭한 dt에 on이 있는지 판별하여 isOn에 담기
//     var isOn = $(this).hasClass("on");

//     $btns.removeClass("on");
//     $boxs.slideUp(speed);


//     if(isOn){
//         // 이미 클릭해서 on이 있는 상태라면
//         $(this).removeClass("on");
//         // 클릭한 dt의 다음에 있는 dd를 안보이게 처리
//         $(this).next().slideUp(speed);
//     }else{
//         // on이 없다면
//         // 클릭한 dt에 on을 활성화
//         $(this).addClass("on");
//         // 클릭한 dt의 다음dd를 보이게 처리
//         $(this).next().slideDown(speed);
//     };

// });

// 

// const $agreeChkAll = document.querySelector('input[name=ChkAll]');

// $agreeChkAll.addEventListener('change', (e) => {

//     let agreeChk = document.querySelectorAll('input[name=Chk]');

//     for(let i = 0; i < agreeChk.length; i++){
//         agreeChk[i].checked = e.target.checked;
//     }
// });