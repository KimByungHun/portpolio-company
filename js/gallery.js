$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType:"json", 
    data:{
        api_key:"e4dac3c336f1aa366b20a39011946539", 
        // datetime: "4",
        per_page:21, 
        format:"json",
        nojsoncallback:1,
        privacy_filter : 1, 
        tags :"mordern art"
    }
})
.success(function(data){
    console.log(data.photos.photo); 
    let items = data.photos.photo; 

    
    $("#gallery").append("<ul class='ul'>");

    $(items).each(function(index, data){

        let text = data.title; 
        if(!data.title){
            text = "No description in this photo"; 
        }

        $("#gallery .ul")
            .append(
                $("<li class='li'>")
                    .append(
                        $("<a>").attr({
                            href : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                        })
                        .append(
                            $("<img>").attr({
                                src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                            })
                        )
                    )
                    .append(
                        // $("<span>").text("TITLE"),
                        $("<h2>").text(text)
                    )
                    .append(
                        $("<div class='profile'>")
                            .append(
                                $("<div class='left'>").append(
                                    // $("<span>").text("owner"),
                                    $("<span>").text("date"),
                                    // $("<span>").text("tags")

                                ),
                                
                                // $("<img>").attr({
                                //     src : "https://www.flickr.com/buddyicons/"+data.owner+".jpg"
                                // }),
                                $("<div class='right'>").append(
                                    // $("<img>").attr({
                                    //     src : "https://www.flickr.com/buddyicons/"+data.owner+".jpg"
                                    // })
                                    $("<span>").text(data.owner)
                                    // $("<span>").text(data.time)

                                )
                            )
                    )
            )
    })
})
.error(function(err){
    console.err("데이터를 호출하는데 실패했습니다"); 
})


$("body").on("click", "#gallery ul li", function(e){
    e.preventDefault(); 

    let imgSrc = $(this).children("a").attr("href"); 

    $("body").append(
        $("<div class='pop'>")
            .append(
                $("<img>").attr({ src : imgSrc}),
                $("<span>").text("close")
            )
    )
});

$("body").on("click", ".pop span", function(){
    $(".pop").remove(); 
});

// window.addEventListener("load", ()=>{
//     const grid = new Isotope(".ul",{
//         itemSelector : ".li",
//         columWidth: ".li",
//         transitionDuration : "0.5s"
//     });
// });