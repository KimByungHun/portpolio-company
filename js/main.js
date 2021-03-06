var btnCall = document.querySelector(".btnCall"); 
var menuMo = document.querySelector(".menuMo"); 
var locaBranch = document.querySelector(".sub");

btnCall.onclick = function(e){
    e.preventDefault(); 
    
    btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on"); 
}


/*-------------------*/


$("#gnb>li").on("mouseenter", function(){
    $(this).find(".sub").show(); 
});

$("#gnb>li").on("mouseleave", function(){
    $(this).find(".sub").hide(); 
});


$("#gnb>li>.sub>.sub_inner>.sub_inner_loca").on("mouseenter", function(){
    $(this).parent().find(".sub_inner_branch").show(); 
});

$("#gnb>li>.sub>.sub_inner>.sub_inner_loca").on("mouseleave", function(){

    $("#gnb>li>.sub>.sub_inner>.sub_inner_branch").hide(); 
});

$("#gnb>li>.sub>.sub_inner>.sub_inner_branch").on("mouseenter", function(){

    $("#gnb>li>.sub>.sub_inner>.sub_inner_branch").show(); 
});

$("#gnb>li>.sub>.sub_inner>.sub_inner_branch").on("mouseleave", function(){

    $("#gnb>li>.sub>.sub_inner>.sub_inner_branch").hide(); 
});


/*-------------------*/

$("#gnb>li").each(function(index){

    $("#gnb>li").eq(index).find("a").on("focusin", function(){
        $("#gnb>li").eq(index).find(".sub").show(); 
    }); 

    $("#gnb>li").eq(index).find("a").last().on("focusout", function(){
        $("#gnb>li").eq(index).find(".sub").hide(); 
    })
})


/* 인덱스 브랜드 페이지 center-------------------*/

$("#brand .inner .wrap .brand1").on("mouseenter",function(){

    $(this).parent().parent().find(".imgCenter").attr({src:"img/brand/modern.jpg"})
})
$("#brand .inner .wrap .brand2").on("mouseenter",function(){

    $(this).parent().parent().find(".imgCenter").attr({src:"img/brand/natural.jpg"})
})
$("#brand .inner .wrap .brand3").on("mouseenter",function(){

    $(this).parent().parent().find(".imgCenter").attr({src:"img/brand/classic.jpg"})
})
$("#brand .inner .wrap .brand4").on("mouseenter",function(){

    $(this).parent().parent().find(".imgCenter").attr({src:"img/brand/unique.jpg"})
})


/* 공지사항 클릭시 */


const $ul = $("#comment .inner ul"); 
const $li = $ul.find("li"); 

$li.on("click", function(e){
    e.preventDefault(); 

    const $index = $(this).index();


    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    $li.removeClass("on"); 

    $(this).addClass("on");

});


//스킵네비게이션 이벤트 
const btns = document.querySelectorAll("#skip a");
btns.forEach((btn, index)=>{
    btn.addEventListener("focusin",e=>{
        e.currentTarget.classList.add("on");
    })
    btn.addEventListener("focusout",e=>{
        e.currentTarget.classList.remove("on");
    })
})

