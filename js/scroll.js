let posArr = [];
const $boxs = $(".myScroll");
const $inner = $(".myScroll .ScrollTransfrom");
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

            $inner.eq(i).addClass("on");
        }
        if(scroll == 0){
            $inner.eq(i).removeClass("on");
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

    if(scroll >= posArr[0] && scroll <= posArr[1]-300){
        $("#news").css({background : "#111"}),
        $("#news .inner h1").css({color : "#fff"}),
        $("#news .inner h2").css({color : "#ddd"}),
        $("#news .inner .topnews p").css({color : "#ccc"}),
        $("#news .inner .topnews a").css({background : "#fff", color : "#111", fontWeight : "bold"}),
        $(".swiper__copy h5").css({color : "#fff"}),
        $(".swiper__copy p").css({color : "#ddd"})

    }else{
        $("#news").css({background : "#fff"}),
        $("#news .inner h1").css({color : "#555"}),
        $("#news .inner h2").css({color : "#111"}),
        $("#news .inner .topnews p").css({color : "#555"}),
        $("#news .inner .topnews a").css({background : "#111", color : "#fff", fontWeight : "bold"}),
        $(".swiper__copy h5").css({color : "#111"}),
        $(".swiper__copy p").css({color : "#555"})
    }

    

    if(scroll >= posArr[2] + baseLine){
        var current_scroll = scroll - posArr[2]-baseLine;
        var opacity_scroll = current_scroll/700;

       sign.css({opacity : 0+opacity_scroll, transform:"scale("+(1+current_scroll/3000)+")"});
    };

})


//svgMotion
var boxs2 =$("body>section");
var pos2 = [];
var base2 = -500;

var init = function(){
    $("#client .svg1").css({strokeDashoffset : 1260});
    $("#client .svg2").css({strokeDashoffset : 2295});
    $("#client .svg3").css({strokeDashoffset : 1965});
}

var custom2 = [
    function(scroll){
        var current_scroll = (scroll - pos2[3]-base2)*4;
        var svg_scroll1;
        (current_scroll>=1260) ? svg_scroll1 = 1260 : svg_scroll1 = current_scroll;
  
        $(".svg1").css({strokeDashoffset : 1260 - svg_scroll1});

        var svg_scroll2;
        (current_scroll>=2295) ? svg_scroll2 = 2295 : svg_scroll2 = current_scroll;
  
        $(".svg2").css({strokeDashoffset : 2295 - svg_scroll2});

        var svg_scroll3;
        (current_scroll>=1965) ? svg_scroll3 = 1965 : svg_scroll3 = current_scroll;
  
        $(".svg3").css({strokeDashoffset : 1965 - svg_scroll3});

        // console.log(current_scroll);

     }
]

boxs2.each(function(_,box){
    pos2.push($(box).offset().top);
 });

 $(window).on("scroll",function(){
    var scroll = $(this).scrollTop();
    init();
 
    boxs2.each(function(index){   
       if(scroll>=pos2[3]+base2){
          custom2[0](scroll);
       }
    });
 });