let posArr = [];
const $boxs = $(".sub_Scroll");
let len = $boxs.length;

let baseLine = -600;

console.log(posArr)


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

})


$(window).on("scroll",function(){
    var scroll = $(this).scrollTop();

    console.log(scroll)

    if(scroll >= posArr[1]+baseLine){
        $(".video_wrap").css({background : "#fff"}),
        $("#video h2").css({color : "#000"}),
        $(".con").css({borderColor : "#000"}),
        $(".con h3").css({color : "#333"}),
        $(".con p").css({color : "#555"})
    }else{
        $(".video_wrap").css({background : "#111"}),
        $("#video h2").css({color : "#fff"}),
        $(".con").css({borderColor : "#E47157"}),
        $(".con h3").css({color : "#ddd"}),
        $(".con p").css({color : "#ccc"})
    }

})