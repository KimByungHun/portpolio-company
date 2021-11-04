let posArr = [];
const $boxs = $(".myScroll");
const $btns = $("#navi li");
let len = $btns.length;
let baseLine = -600;

for(let i=0; i<len; i++){
    posArr.push($boxs.eq(i).offset().top);
}

$(window).on("resize",function(){
    posArr = [];
    for(let i=0; i<len; i++){
        posArr.push($boxs.eq(i).offset().top);
    }
});

$(window).on("scroll", function(){

    let scroll = $(this).scrollTop();

    for(let i=0; i<len; i++){
        if(scroll >= posArr[i] + baseLine){
            $btns.children("a").removeClass("on");
            $btns.eq(i).children("a").addClass("on");

            $boxs.removeClass("on");
            $boxs.eq(i).addClass("on");
        }
    }
})

$("#navi li a").on("click", function(e){{
    e.preventDefault();

    let target = $(this).attr("href");
    let targetPos = $(target).offset().top;

    $("html, body").animate({
        scrollTop : targetPos
    }, 1000);
}});

var sign = $("#brand .inner .signiture");

$(window).on("scroll",function(){
    var scroll = $(this).scrollTop();
    

    if(scroll >= posArr[2] + baseLine){
        var current_scroll = scroll - posArr[2]-baseLine;
        var opacity_scroll = current_scroll/700;

        console.log(current_scroll)

       sign.css({opacity : 0+opacity_scroll, transform:"scale("+(1+current_scroll/3000)+")"});
    }
})