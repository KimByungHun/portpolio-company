var btnCall = document.querySelector(".btnCall"); 
var menuMo = document.querySelector(".menuMo"); 
var locaBranch = document.querySelector(".sub");

btnCall.onclick = function(e){
    e.preventDefault(); 
    
    btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on"); 
}

$("#gnb>li").on("mouseenter", function(){
    $(this).find(".sub").show(); 
});

$("#gnb>li").on("mouseleave", function(){
    $(this).find(".sub").hide(); 
});

$("#gnb>li>.sub>.sub_inner>.sub_inner_loca").on("mouseenter", function(){


    $(this).parent().find(".sub_inner_branch").show(); 
});

$("#gnb>li>.sub>.sub_inner>.sub_inner_branch").on("mouseleave", function(){
    console.log("l");

    $(this).hide(); 
    console.log($(this))
});

$("#gnb>li").each(function(index){

    $("#gnb>li").eq(index).find("a").on("focusin", function(){
        $("#gnb>li").eq(index).find(".sub").show(); 
    }); 

    $("#gnb>li").eq(index).find("a").last().on("focusout", function(){
        $("#gnb>li").eq(index).find(".sub").hide(); 
    })
})