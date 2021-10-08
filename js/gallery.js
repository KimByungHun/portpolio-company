$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType:"json", 
    data:{
        api_key:"e4dac3c336f1aa366b20a39011946539", 
        per_page:10, 
        format:"json",
        nojsoncallback:1,
        privacy_filter : 5, 
        tags :"city"
    }
})
.success(function(data){
    console.log(data.photos.photo); 
    let items = data.photos.photo; 

    //#gallery프레임안에 ul 태그 생성 
    $("#gallery").append("<ul>");

    //이미지 데이터 갯수만큼 안쪽 코드 반복 
    $(items).each(function(index, data){

        let text = data.title; 
        if(!data.title){
            text = "No description in this photo"; 
        }

        $("#gallery ul")
            .append(
                $("<li>")
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
                        $("<p>").text(text)
                    )
                    .append(
                        $("<div class='profile'>")
                            .append(
                                $("<img>").attr({
                                    src : "https://www.flickr.com/buddyicons/"+data.owner+".jpg"
                                }),
                                $("<span>").text(data.owner)
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