// // https://www.youtube.com/playlist?list=PLQM4zMb4wHCsTOtC0zyr9uxQR5Z6wlryC
// part : "snippet",
// key : "AIzaSyCp6pYKocpuF3qg3kV57ps78efKtfH1Y1o",
// maxResults: 5,
// playlistId : "PLQM4zMb4wHCsTOtC0zyr9uxQR5Z6wlryC"



$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems",
    dataType : 'jsonp',
    data :{
        part : "snippet",
        key : "AIzaSyCp6pYKocpuF3qg3kV57ps78efKtfH1Y1o",
        maxResults: 6,
        playlistId : "PLQM4zMb4wHCsTOtC0zyr9uxQR5Z6wlryC"
        
    }
})
.success(function(data){
    
    let items = data.items;
    console.log(items);

    $(items).each(function(index, data){
        
        let txt = data.snippet.description;
        let len = txt.length;
        let tit = data.snippet.title;
        let titLen = tit.length;
        

        if(len > 75){
            txt = txt.substr(0, 75) + "...";
        }

        if(titLen > 40){
            tit = tit.substr(0, 40) + "...";
        }

        $("#video").append(
            $("<article>").append(
                $("<a>").attr({ href : data.snippet.resourceId.videoId }).append(
                    $("<img>").attr({ src : data.snippet.thumbnails.high.url}),
                    $("<div class='icon'>")
                    
                ),
                $("<div class='con'>").append(
                    $("<h3>").text(tit),
                    $("<p>").text(txt),
                    $("<span>").text(data.snippet.videoOwnerChannelTitle),
                )
            )
        )
    })

})
.error(function(err){
    console.error(err);
})

$("body").on("click", "#video article a", function(e){
    e.preventDefault();

    let vidId = $(this).attr("href");

    $("body").append(
        $("<div class='vidPop'>").append(
            $("<iframe>").attr({
                src : "https://www.youtube.com/embed/"+vidId,
                frameborder : 0,
                width: "100%",
                height: 600
            }),
            $("<span>").text("Close")
        )
    )
});

$("body").on("click", ".vidPop span", function(){
    $(".vidPop").fadeOut(500);
});