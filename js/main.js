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
        if (t["0"].innerText != "王老师[咨询]"){
            if (t["0"].innerText == "杜老师[咨询]"){
                btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=dcd480c06147b9bed4aacc80507967d2&kf=kf01@71a.com&zdkf_type=1&kflist=off&timeStamp=1499135050206&ucust_id=";
            }else if (t["0"].innerText == "郭老师[咨询]"){
                btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=dcd480c06147b9bed4aacc80507967d2&kf=kf02@71a.com&zdkf_type=1&kflist=off&timeStamp=1499135061606&ucust_id=";
            }else if (t["0"].innerText == "任老师[咨询]"){
                btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=dcd480c06147b9bed4aacc80507967d2&kf=rendanzhangyu@163.com&zdkf_type=1&kflist=off&timeStamp=1499135079958&ucust_id=";
            }else if (t["0"].innerText == "叶老师[咨询]"){
                btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=dcd480c06147b9bed4aacc80507967d2&kf=15921474690@163.com&zdkf_type=1&kflist=off&timeStamp=1499135021830&ucust_id=";
            }else if (t["0"].innerText == "黄老师[咨询]"){
                btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=bec2bf61c368b1881ae9da1f172a5b1c&kf=zf@71a.com&zdkf_type=1&kflist=off&timeStamp=1500364488710&ucust_id=";
            }else if (t["0"].innerText == "程老师[咨询]"){
                btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=bec2bf61c368b1881ae9da1f172a5b1c&kf=710739349@qq.com&zdkf_type=1&kflist=off&timeStamp=1500364543500&ucust_id=";
            }else if (t["0"].innerText == "左老师[咨询]"){
                btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=bec2bf61c368b1881ae9da1f172a5b1c&kf=zzm@71a.com&zdkf_type=1&kflist=off&timeStamp=1500364525820&ucust_id=";
            }else if (t["0"].innerText == "赵老师[咨询]"){
                btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=bec2bf61c368b1881ae9da1f172a5b1c&kf=cxyi@71a.com&zdkf_type=1&kflist=off&timeStamp=1500364560044&ucust_id=";
            }
        }else {
            btna[i].href = "http://www8.53kf.com/webCompany.php?arg=10128903&style=1&language=zh-cn&charset=utf-8&referer=http%3A%2F%2Fwww.71a.com%2F&keyword=&tfrom=1&tpl=crystal_blue&uid=dcd480c06147b9bed4aacc80507967d2&kf=kf03@71a.com&zdkf_type=1&kflist=off&timeStamp=1499135038158&ucust_id=";
        }
    }
};

// 滚动导航
$(window).scroll(function(){
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
});

$(document).ready(function () {
    $("#navBer .bar_a").click(function () {
        $(".dropdown_menu").slideToggle("fast");
    });
});
