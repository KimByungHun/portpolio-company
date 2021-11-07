var boxs = $("#visual_sub");
var pos = [];

boxs.each(function(_,box){
    pos.push($(box).offset().top);
});

$(window).on("scroll",function(){
    var scroll = $(this).scrollTop();

    if(scroll >= pos[0]){
        var real_scroll = scroll-$("#header_sub").css("height").replace(/[^-\d\.]/g, '');

        var section_height = $(".visual_wrap").css("height").replace(/[^-\d\.]/g, '');
        var video_height = $(".v_header").css("height").replace(/[^-\d\.]/g, '');
        
        var current_vh1 = 30-(scroll-111.25)/((section_height-video_height)/30);
        var scroll_vh1;
        (current_vh1 <= 0 ) ? scroll_vh1 = 0 : scroll_vh1 = current_vh1;

        var current_vh2 = 70+(scroll-111.25)/((section_height-video_height)/30);
        var scroll_vh2;
        (current_vh2 >= 100 ) ? scroll_vh2 = 100 : scroll_vh2 = current_vh2;

        var current_vw1 = 90+(scroll-111.25)/((section_height-video_height)/10);
        var scroll_vw1;
        (current_vw1 >= 100 ) ? scroll_vw1 = 100 : scroll_vw1 = current_vw1;

        var current_vw2 = 10-(scroll-111.25)/((section_height-video_height)/10);
        var scroll_vw2;
        (current_vw2 <= 0 ) ? scroll_vw2 = 0 : scroll_vw2 = current_vw2;

        var trasnlate_scroll =scroll;
        (trasnlate_scroll >= section_height-video_height+111.25 ) ? trasnlate_scroll = section_height-video_height+111.25  : scroll = trasnlate_scroll;
        // console.log(trasnlate_scroll);

        $(".v_video").css({
            clip : "rect("+scroll_vh1+"vh, "+(scroll_vw1)+"vw, "+(scroll_vh2)+"vh, "+(scroll_vw2)+"vw)"
        });
        $(".visual_inner").css({
            transform : "translate(0px ,"+(-111.25+trasnlate_scroll)+"px)"
        });
        $(".v_video video").css({
            filter : "blur("+(5-(scroll-111.25)/200)+"px)"
        })
    }else{
        $(".v_video").css({ clip : "rect(30vh, 90vw, 70vh, 10vw)"});
        $(".visual_inner").css({
            trasnform : "translate(0px ,0px)"
        });

        console.log(scroll)
    }
})
