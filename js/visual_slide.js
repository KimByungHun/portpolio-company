const $slider1 = $("#slider1"); 
const $slider2 = $("#slider2"); 
const $prev = $(".prev"); 
const $next = $(".next"); 
let speed = 1000; 
let rollingSpeed = 4000; 

let visual_timer;

const $txtBoxs = $("#sliderTxt .inner");
let visualNum = 0;


let enableClick = true; 


visualInit($slider1); 
visualInit($slider2);  

$next.on("click", function(e){
e.preventDefault();    
if(enableClick){

    enableClick = false;
     
    next($slider1); 
    next($slider2); 

    nextTxt();

}

}); 

$prev.on("click", function(e){
e.preventDefault();     

    if(enableClick){

        enableClick = false;
        
        prev($slider1); 
        prev($slider2); 

        prevTxt();
    }


}); 

function visualInit(el){
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

function nextTxt(){
    $txtBoxs.children(".title").removeClass("on");
    setTimeout(function(){
   

        if(visualNum<3){
            $txtBoxs.children(".title").eq(visualNum+1).addClass("on");
            visualNum++;
        } else {
            visualNum=0;
            $txtBoxs.children(".title").eq(visualNum).addClass("on");
        }
    },1000);
    
}
function prevTxt(){
    $txtBoxs.children(".title").removeClass("on");
    setTimeout(function(){


        if(visualNum>0){
            $txtBoxs.children(".title").eq(visualNum-1).addClass("on");
            visualNum--;
        } else {
            visualNum=3;
            $txtBoxs.children(".title").eq(visualNum).addClass("on");
        }
    },1000);
}


$(".start").on("click", function(e){
    e.preventDefault(); 

    visual_timer = setInterval(function(){
        next($slider1); 
        next($slider2); 
        nextTxt();
    },rollingSpeed);
    
    $(".start").addClass("on"); 
    $(".stop").removeClass("on"); 
}); 

$(".stop").on("click", function(e){
    e.preventDefault(); 
    clearInterval(visual_timer); 

    $(".start").removeClass("on"); 
    $(".stop").addClass("on");
});


$prev.on("click", function(e){
    e.preventDefault(); 
    clearInterval(visual_timer); 

    $(".start").removeClass("on"); 
    $(".stop").addClass("on");
});


$next.on("click", function(e){
    e.preventDefault(); 
    clearInterval(visual_timer); 

    $(".start").removeClass("on"); 
    $(".stop").addClass("on");
});

visual_timer = setInterval(function(){
    next($slider1); 
    next($slider2); 
    nextTxt();
},rollingSpeed);