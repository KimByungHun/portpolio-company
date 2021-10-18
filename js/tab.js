
const $tab = $("#cm_tab"); 
const $btns = $tab.find("dt a"); 
const $boxs = $tab.find("dd"); 

$btns.on("click", function(e){
    e.preventDefault(); 

    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    let target = $(this).attr("href"); 

    $boxs.hide(); 
    $btns.removeClass("on"); 

    $(this).addClass("on");
    $(target).show(); 
});


const $frame = $("#cm_tab dd");
const $btns2 = $frame.find("dt"); 
const $boxs2 = $frame.find("dd"); 
let speed = 500; 

$btns2.on("click", function(e){
    e.preventDefault(); 
    //클릭한 dt에 on이 있는지 판별하여 isOn에 담기 
    var isOn = $(this).hasClass("open"); 

    $btns2.removeClass("open"); 
    $boxs2.slideUp(speed); 
    //isOn이 참이라면 
    if(isOn){ //이미 클릭해서 on이 있는 상태라면 
        //클릭한 dt에 on을 제거 
        $(this).removeClass("open");
        //클릭한 dt의 다음에 있는 dd를 안보이게 처리  
        $(this).next().slideUp(speed); 
    }else{
        //on이 없다면 
        //클릭한 dt에 on 활성화 
        $(this).addClass("open"); 
        //클릭한 dt의 다음 dd를 보이게 처리 
        $(this).next().slideDown(speed); 
    }

    
});

// 