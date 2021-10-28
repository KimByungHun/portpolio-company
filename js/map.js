var container = document.getElementById('map'); 
var options = { 
	center: new kakao.maps.LatLng(37.497957606731745, 127.02924707106132), 
	level: 3 
};

var map = new kakao.maps.Map(container, options); 

/*      ------------------       */ 
const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];

t_on.addEventListener("click", function(e){
    e.preventDefault();

    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);    

    t_on.classList.add("on");
    t_off.classList.remove("on");
});

t_off.addEventListener("click", function(e){
    e.preventDefault();

    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    t_on.classList.remove("on");
    t_off.classList.add("on");
});


/*      ------------------       */ 


var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


/*      ------------------       */ 

const branch_btns1 = document.querySelector(".branch .loc_A"); 
const branch_btns2 = document.querySelector(".branch .loc_B"); 
const branch_btns3 = document.querySelector(".branch .loc_C"); 

const markerOptions = [
    {
        title : "본점",
        latlng : new kakao.maps.LatLng(37.497957606731745, 127.02924707106132),
        imgSrc : "img/marker1.png",
        imgSize : new kakao.maps.Size(70, 70),
        imgPos : {offset: new kakao.maps.Point(35, 35)},
        button : branch_btns1
    },
    {
        title : "지점1",
        latlng : new kakao.maps.LatLng(35.17290357881465, 129.13077914742337),
        imgSrc : "img/marker2.png",
        imgSize : new kakao.maps.Size(70, 70),
        imgPos : {offset: new kakao.maps.Point(35, 35)},
        button : branch_btns2
    },
    {
        title : "지점2",
        latlng : new kakao.maps.LatLng(35.85977791760213, 128.62484626986543),
        imgSrc : "img/marker3.png",
        imgSize : new kakao.maps.Size(55, 60),
        imgPos : {offset: new kakao.maps.Point(35, 35)},
        button : branch_btns3
    }
];

for(let i=0; i<markerOptions.length; i++){
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
    });

    markerOptions[i].button.onclick = function(e){
        e.preventDefault();

        moveTo(markerOptions[i].latlng); 

        for(let k=0; k<markerOptions.length; k++){
            markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");
    }
}


function moveTo(target) {             
    var moveLatLon = target;
    
    map.setCenter(moveLatLon);
}

/*      ------------------       */ 



window.onresize = ()=>{
    var active_btn = document.querySelector(".branch .location_btn.on"); 
    var active_index = active_btn.getAttribute("data-index"); 
    console.log(active_btn); 
    map.setCenter(markerOptions[active_index].latlng)
 }