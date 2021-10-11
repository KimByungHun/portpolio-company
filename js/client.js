var num=0;
var timer;

timer = setInterval(move, 20);

$(".slider").on("mouseenter",function(){    
    clearInterval(timer);
});
$(".slider").on("mouseleave", function(){    
    timer = setInterval(move,20);
});


//setInterval로 반복할 공통 함수 분리
function move(){
    if(num <= -300){        
        num = 0;        
        $(".client_list").find("li").first().appendTo($(".client_list"));
    }else{ 
        num -= 1;
    }    
    console.log(num);
    $(".client_list").css({left: num});
}