getList({
    type : "userid",
    user_id: "194107799@N07"
})

$("#searchBox button").on("click", function(){

    $("#gallery ul").removeClass("on");
    $(".loading").removeClass("off");
    var inputs = $("#searchBox input").val();

    getList({
        type : "search",
        tag : inputs
    });
});



$(window).on("keypress",function(e){
    if(e.keyCode == 13){

        $("#gallery ul").removeClass("on");
        $(".loading").removeClass("off");
        var inputs = $("#searchBox input").val();
        $("#searchBox input").val("");

        getList({
            type: "search",
            tag: inputs
        }); 
    }
})

$(".content h1").on("click",function(){

    $("#gallery ul").removeClass("on");
    $(".loading").removeClass("off");
    
    getList({
        type: "userid",
        user_id: "194107799@N07"
    })
})




function getList(opt){
    var result_opt = {};

    
    if(opt.type =="interest"){
        result_opt={
            url:"https://www.flickr.com/services/rest/?method=flickr.interestingness.getList", 
            dataType:"json", 
            data:{
                api_key:"e4dac3c336f1aa366b20a39011946539", 
                per_page:100, 
                format:"json",
                nojsoncallback:1, 
                privacy_filter : 1, 
            }
        }
    }
    
    if(opt.type =="search"){
        result_opt={
            url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
            dataType:"json", 
            data:{
                api_key:"e4dac3c336f1aa366b20a39011946539", 
                per_page:100, 
                format:"json",
                nojsoncallback:1, 
                privacy_filter : 1, 
                tags :opt.tag,
            }
        }
    }
    
    if(opt.type =="userid"){
        result_opt={
            url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
            dataType:"json", 
            data:{
                api_key:"e4dac3c336f1aa366b20a39011946539", 
                per_page:100, 
                format:"json",
                nojsoncallback:1, 
                privacy_filter : 1, 
                user_id: "194107799@N07"
            }
        }
    }
    $.ajax(result_opt)
    .success(function(data){    
        
        let items = data.photos.photo; 
        console.log(items);
       
        $("#gallery").empty();       
        $("#gallery").append("<ul>");
       
        $(items).each(function(index, data){
            let text = data.title;        
            if(!data.title){          
                text = "No description in this photo"; 
            }
    
            $("#gallery ul")
            .append(
                $("<li>").append(
                    $("<div class='li_in'>")
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
                        $("<h2>").text(text)
                    )
                    .append(
                        $("<div class='profile'>")
                            .append(
                                $("<div class='left'>").append(
                                    $("<span>").text("owner")
                                ),
                                $("<div class='right'>").append(
    
                                    $("<span>").text(data.owner)
                                )
                            )
                    )
                )
            )
        });  
        
        const total = $("#gallery ul li").length;
        let imgNum=0;
    
        $("#gallery img").each(function(index, data){   
            data.onerror = function(){
                $(data).attr("src", "img/default.jpg");
            }
            
            data.onload = function(){            
                imgNum++;
                console.log(imgNum);
               
                if(imgNum === total){   
                    $(".loading").addClass("off");
    
                    new Isotope("#gallery ul",{
                        itemSelector : "#gallery ul li",
                        columnWidth: "#galley ul li",                  
                        transitionDuration: "0.5s"
                    });   
                    
                    $("#gallery ul").addClass("on");
                }
            }        
        }); 
    })
    .error(function(err){
        console.err("데이터를 호출하는데 실패했습니다"); 
    });
}





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