var arrow = document.querySelector(".arrwo_up");
window.addEventListener("scroll",()=>{
    if (window.pageYOffset > 350){
        arrow.classList.add("active");
    }else{
        arrow.classList.remove("active")
    }
})

var toggle = document.querySelector('.tittle_vid');
var toggle_vid = document.querySelector('.toggle_vid');
var videos = document.querySelector('.videos');
var p_vid = document.querySelector('.p_vid');

toggle.onclick = function(){
    toggle_vid.classList.toggle('active')
    videos.classList.toggle('active')
    p_vid.classList.toggle('active')

};

var toggle_sign = document.querySelector('.toggle_sign');
var toggle_vid = document.querySelector('.toggle_vid');
var videos = document.querySelector('.videos');
var p_vid = document.querySelector('.p_vid');

toggle_sign.onclick = function(){
    toggle_sign.classList.toggle('active')
    videos.classList.toggle('active')
    p_vid.classList.toggle('active')

};

$(document).ready(function(){
    $(".sub_tittel").click(function(){

       var slid = $(this).parent().find(".details_videos");

       slid.toggle();
        $(".details_videos").not(slid).hide(200);
    });
});

