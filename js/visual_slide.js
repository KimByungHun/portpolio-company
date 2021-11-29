const $slider1 = $("#slider1"); 
const $slider2 = $("#slider2"); 
const $prev = $(".prev"); 
const $next = $(".next"); 
let speed = 1000; 
let visual_timer;

let enableClick = true; 


init($slider1); 
init($slider2);  

$next.on("click", function(e){
e.preventDefault();    
if(enableClick){

    enableClick=false;
    next($slider1); 
    next($slider2); 
}

}); 

$prev.on("click", function(e){
e.preventDefault();     

    if(enableClick){

        enableClick=false;
        prev($slider1); 
        prev($slider2); 
    }


}); 

function init(el){
let len = el.children("ul").find("li").length; 
el.children("ul").css({ width: 100 * len +"%"}); 
el.children("ul").find("li").css({ width: 100 / len +"%"}); 
el.children("ul").find("li").last().prependTo(el.children("ul")); 
}

function next(el){
el.children("ul").animate({ marginLeft : "-200%"}, speed, function(){
    $(this).css({ marginLeft : "-100%"}); 
    $(this).children("li").first().appendTo(this); 
    enableClick = true;
});
}


function prev(el){
el.children("ul").animate({marginLeft : "0%"},speed, function(){
    $(this).css({ marginLeft : "-100%"}); 
    $(this).children("li").last().prependTo(this); 
    enableClick = true;
}); 
}

$(".start").on("click", function(e){
    e.preventDefault(); 

    visual_timer = setInterval(function(){
        next($slider1); 
        next($slider2); 
    },4000);
    
    $(".start").addClass("on"); 
    $(".stop").removeClass("on"); 
}); 

$(".stop").on("click", function(e){
    e.preventDefault(); 
    clearInterval(visual_timer); 

    $(".start").removeClass("on"); 
    $(".stop").addClass("on");
});