

var isCookie = document.cookie.indexOf("popup=done");
console.log(isCookie);
if(isCookie == -1){
   $("#popup").show();
   console.log("쿠키없음");
}else{
   $("#popup").hide();
   console.log("쿠키있음");
}


//del 버튼을 클릭하면 유효기간을 0으로 해서 클릭즉시 유효기간 만료로 쿠키제거
$(".del").on("click", function(){
   setCookie(0);
   alert("쿠키삭제완료");
});
$(".view").on("click",function(){
   console.log(document.cookie);
});



$("#popup .pop_close").on("click",function(e){
   e.preventDefault();

   var isChecked = $("#popup").find("input[type=checkbox]").is(":checked");

   if(isChecked) setCookie(1);

   $("#popup").hide();
})

function setCookie(time){
   var today = new Date(); 
   var date = today.getDate(); 

   today.setDate = (date + time); 

   var duedate = today.toGMTString(); 

   document.cookie = "popup=done; expires="+duedate;
}