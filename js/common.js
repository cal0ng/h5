/**********************加载时动画**************************************/
document.addEventListener('DOMContentLoaded', function () {
	function audioAutoPlay() {
		var audio = document.getElementById('aud');
			audio.play();
		document.addEventListener("WeixinJSBridgeReady", function () {
			audio.play();
		}, false);
	}
	audioAutoPlay();
});

document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
function subSomething(){
	if(document.readyState == "complete"){ //当页面加载完成
		$("#loading").css("background", "radial-gradient(#eeeeee, #62B533)");
		$("#loading>div").addClass("loader");
		setTimeout(function(){
			$('#loading').hide();
			$(".img_tip").fadeIn();
			var msloading = $("#loading").css("display");
			var mscroll = $(".heng").css("display");
			if(mscroll !="block" && msloading != "block"){
				page01_in(); //第一屏动画
			}
		},500);
	}
}

function page01_in(){
	/*第一页样式控制*/
	$('.page1 .page1_01').fadeIn();
	var page1_01_03_ht = (169/640)*scoll_width;
	var page1_01_07_ht = (54/640)*scoll_width;
	var page1_arr = [(63/640)*scoll_width,(68/640)*scoll_width,(231/640)*scoll_width,(235/640)*scoll_width,(229/640)*scoll_width,(241/640)*scoll_width,(286/640)*scoll_width,(290/640)*scoll_width,(284/640)*scoll_width,(290/640)*scoll_width,(352/640)*scoll_width,(850/640)*scoll_width,(448/640)*scoll_width,(90/640)*scoll_width,(168/640)*scoll_width,(189/640)*scoll_width,(243/640)*scoll_width,(687/640)*scoll_width];
	$('.page1 .page1_01 .page1_01_02').css("top", page1_arr[0]);
	$('.page1 .page1_01 .page1_01_03').css("top", page1_arr[1]);
	$('.page1 .page1_01 .page1_01_04').css("top", page1_arr[2]);
	$('.page1 .page1_01 .page1_01_05').css("top", page1_arr[3]);
	$('.page1 .page1_01 .page1_01_06').css("top", page1_arr[4]);
	$('.page1 .page1_01 .page1_01_07').css("top", page1_arr[5]);
	$('.page1 .page1_01 .page1_01_08').css("top", page1_arr[6]);
	$('.page1 .page1_01 .page1_01_09').css("top", page1_arr[7]);
	$('.page1 .page1_01 .page1_01_10').css("top", page1_arr[8]);
	$('.page1 .page1_01 .page1_01_11').css("top", page1_arr[9]);
	$('.page1 .page1_01 .page1_01_12').css("top", page1_arr[10]);
	$('.page1 .page1_01 .page1_01_13').css("top", page1_arr[11]);
	$('.page1 .page1_01 .page1_01_14').css("top", page1_arr[12]);
	$('.page1 .page1_01 .page1_01_15').css("top", page1_arr[13]);
	$('.page1 .page1_01 .page1_01_16').css("top", page1_arr[14]);
	$('.page1 .page1_01 .page1_01_17').css("top", page1_arr[15]);
	$('.page1 .page1_01 .page1_01_18').css("top", page1_arr[16]);
	$('.page1 .page1_01 .page1_01_19').css("top", page1_arr[17]);
	
	$('.page1 .page1_01 .page1_01_03').css("height", page1_01_03_ht+"px");
	$('.page1 .page1_01 .page1_01_07').css("height", page1_01_07_ht+"px");
	page1_brr = [
	setTimeout(function(){$('.page1 .page1_01 .page1_01_01').addClass("page1_01_01_move");},0),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_02').addClass("animated zoomIn");},300),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_03').addClass("page1_01_00_move");},200),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_04').addClass("animated zoomIn");},500),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_05').addClass("page1_01_05_move");},400),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_06').addClass("animated zoomIn");},700),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_07').addClass("page1_01_00_move");},600),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_08').addClass("animated zoomIn");},900),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_09').addClass("page1_01_09_move");},800),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_10').addClass("animated zoomIn");},1100),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_11').addClass("page1_01_11_move");},1000),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_12').addClass("animated fadeIn");},1300),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_13').addClass("page1_01_13_move");},1500),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_14').addClass("page1_01_14_move");},1700),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_15').addClass("animated bounceInDown");},1700),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_16').addClass("animated bounceInRight");},1400),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_17').addClass("animated zoomIn");},2200),
	setTimeout(function(){$('.page1 .page1_01 .page1_01_18').addClass("animated zoomIn");},2400),//
	setTimeout(function(){$('.page1 .page1_01 .page1_01_19').addClass("animated zoomIn");},2400)
	];	
}
function page01_out(){
	$('.page1 .page1_01').fadeOut();
	for(var i=0;i<page1_brr.length;i++){
		clearTimeout(page1_brr[i]);
	}
	for(var j=1;j<page1_brr.length+1;j++){
		if(j<10){j="0"+j;}
		$(".page1 .page1_01 .page1_01_"+j).attr("class","page1_01_"+j);
	}
}
	

/**********************屏幕尺寸改变**************************************/

$(function(){
	windowSizeChange();
	window.addEventListener("resize", windowSizeChange, false);
})

function windowSizeChange(){
	var newHeight=$('body').height();
	var newWidth=$('body').width();
	if(newWidth > newHeight){
		$(".music").hide();
		document.getElementById("aud").pause();
		$(".heng").show();
	}else{
		$(".music").show();
		$(".heng").hide();
		document.getElementById("aud").play();
	}
}
/************************************************************/

$(".music").click(function(){
	if($(".icon-music").attr("num") == "1"){
		$(".icon-music").removeClass("open");
		$(".icon-music").attr("num","2")
		$(".music-span").css("display","none");
		document.getElementById("aud").pause();
	}else{
		$(".icon-music").attr("num","1");
		$(".icon-music").addClass("open");
		$(".music-span").css("display","block");
		document.getElementById("aud").play();
	}

});


function animationIn(i){
	switch(i) {
		case 0:
			page01_in();
		break;
		case 1:
			page02_in();
		break;
		case 2:
			page03_in();
		break;
		case 3:
			page04_in();
		break;
		case 4:
			page05_in();
		break;
		case 5:
			page06_in();
		break;
		case 6:
			page07_in();
		break;
		case 7:
			page08_in();
		break;
		case 8:
			page09_in();
		break;
		case 9:
			page10_in();
		break;
		default:
		;
	}
}

function animationOut(i){
	switch(i) {
		case 0:
			page01_out();
		break;
		case 1:
			page02_out();
		break;
		case 2:
			page03_out();
		break;
		case 3:
			page04_out();
		break;
		case 4:
			page05_out();
		break;
		case 5:
			page06_out();
		break;
		case 6:
			page07_out();
		break;
		case 7:
			page08_out();
		break;
		case 8:
			page09_out();
		break;
		case 9:
			page10_out();
		break;
		default:
		;
	}
}