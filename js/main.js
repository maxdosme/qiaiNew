/**
 * Created by BenTfu on 2017/3/13.
 */

// 内页导航hover
/*
$(document).ready(function () {
   $("#needService").find("a").mousemove(function () {
       $(this).addClass("active_a");
   }).mouseout(function () {
       $(this).removeClass("active_a");
   })
});*/

<!--在线咨询按钮url替换逻辑-->
window.onload = function () {
    var t = document.getElementById("hsdiv1").childNodes;
    var btna = document.getElementsByClassName("btnss");
    /*console.log(btna);*/
    for (var i=0; i<btna.length; i++){
        if (t["0"].innerText != "小明[咨询]"){
                btna[i].href = "https://tb.53kf.com/code/client/10128903/1";
        }else {
            btna[i].href = "https://tb.53kf.com/code/client/10128903/1";
        }
    }
};

// 滚动导航
/*$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 66)
        $('#navBer').css({position:'fixed',top:'0px'}).stop().animate({'opacity':'0.8'},400);
    else
        $('#navBer').css({position:'static'}).stop().animate({'opacity':'1'},400);
});
$('#navBer').hover(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 66){
        $('#navBer').stop().animate({'opacity':'1'},400);}
},function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 66){
        $('#navBer').stop().animate({'opacity':'0.8'},400);
    }
});*/

$(document).ready(function () {
    $("#navBer .bar_a").click(function () {
        $(".dropdown_menu").slideToggle("fast");
    });
});