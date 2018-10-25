var scoll_width = $('#cubeTransition').width();
var scoll_height = $('#cubeTransition').height();
var page1_brr, page2_brr, page3_brr, page4_brr, page5_brr, page6_brr, page7_brr, page8_brr, page9_brr, page10_brr;


/**********************第二页**************************************/
function page02_in(){
	$('.page2 .page2_01').fadeIn();
	var page2_01_01_ht = $('.page2 .page2_01 .page2_01_01').width();
	var page2_arr = [(379/640)*scoll_width,(538/640)*scoll_width,(259/640)*scoll_width,(227/640)*scoll_width,(624/640)*scoll_width,(849/640)*scoll_width,(693/640)*scoll_width,(903/640)*scoll_width];
	
	$('.page2 .page2_01 .page2_01_02').css("margin-top", "-"+page2_01_01_ht-2+"px");
	page2_brr = [
	setTimeout(function(){$('.page2 .page2_01 .page2_01_02').addClass("animated bounceInDown");},0),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_03').addClass("animated zoomIn");},500),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_04').css("top", page2_arr[0]);$('.page2 .page2_01 .page2_01_04').addClass("animated lightSpeedIn");},1000),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_05').css("top", page2_arr[1]);$('.page2 .page2_01 .page2_01_05').addClass("animated lightSpeedIn");},1200),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_06').css("top", page2_arr[2]);$('.page2 .page2_01 .page2_01_06').addClass("animated lightSpeedIn");},1400),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_07').css("top", page2_arr[3]);$('.page2 .page2_01 .page2_01_07').addClass("page2_01_07_01");},1800),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_08').css("top", page2_arr[4]);$('.page2 .page2_01 .page2_01_08').addClass("animated bounceInLeft");},1600),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_09').css("top", page2_arr[5]);$('.page2 .page2_01 .page2_01_09').addClass("animated fadeIn");},2000),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_10').css("top", page2_arr[6]);$('.page2 .page2_01 .page2_01_10').addClass("animated bounceInLeft");},1800),
	setTimeout(function(){$('.page2 .page2_01 .page2_01_11').css("top", page2_arr[7]);$('.page2 .page2_01 .page2_01_11').addClass("animated fadeIn");},2000)
	];
}

function page02_out(){
	$('.page2 .page2_01').fadeOut();
	for(var i=0;i<page2_brr.length;i++){
		clearTimeout(page2_brr[i]);
	}
	for(var j=2;j<page2_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page2 .page2_01 .page2_01_"+j).attr("class","page2_01_"+j);
	}
}

/**********************第三页**************************************/
function page03_in(){
	$('.page3 .page3_01').fadeIn();
	var page3_01_ht = (129/640)*scoll_width;
	var page3_arr = [(116/640)*scoll_width,(193/640)*scoll_width,(304/640)*scoll_width,(479/640)*scoll_width,(608/640)*scoll_width];
	
	$('.page3 .page3_01 .page3_01_01').css("height", page3_01_ht+"px");
	page3_brr = [setTimeout(function(){$('.page3 .page3_01 .page3_01_02').css("top", page3_arr[0]+"px");$('.page3 .page3_01 .page3_01_02').addClass("animated bounceInDown");},0),
	setTimeout(function(){$('.page3 .page3_01 .page3_01_03').css("top", page3_arr[1]+"px");$('.page3 .page3_01 .page3_01_03').addClass("animated zoomIn");},500),
	setTimeout(function(){$('.page3 .page3_01 .page3_01_04').css("top", page3_arr[2]+"px");$('.page3 .page3_01 .page3_01_04').addClass("animated zoomInUp");},1000),
	setTimeout(function(){$('.page3 .page3_01 .page3_01_05').css("top", page3_arr[3]+"px");$('.page3 .page3_01 .page3_01_05').addClass("animated bounceInLeft");},2000),
	setTimeout(function(){$('.page3 .page3_01 .page3_01_06').css("top", page3_arr[4]+"px");$('.page3 .page3_01 .page3_01_06').addClass("animated fadeInUp");},1600)
	];
	
}
function page03_out(){
	$('.page3 .page3_01').fadeOut();
	for(var i=0;i<page3_brr.length;i++){
		clearTimeout(page3_brr[i]);
	}
	for(var j=2;j<page3_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page3 .page3_01 .page3_01_"+j).attr("class","page3_01_"+j);
	}
}

/**********************第四页**************************************/
function page04_in(){
	$('.page4 .page4_01').fadeIn();
	var page4_arr = [(99/640)*scoll_width,(152/640)*scoll_width,(224/640)*scoll_width,(382/640)*scoll_width,(371/640)*scoll_width,(451/640)*scoll_width,(484/640)*scoll_width,(536/640)*scoll_width,(588/640)*scoll_width,(672/640)*scoll_width,(728/640)*scoll_width,(815/640)*scoll_width,(894/640)*scoll_width,(972/640)*scoll_width];
	
	$('.page4 .page4_01 .page4_01_01').css("height", page4_arr[0]+"px");
	page4_brr = [setTimeout(function(){$('.page4 .page4_01 .page4_01_02').css("top", page4_arr[0]+"px");$('.page4 .page4_01 .page4_01_02').addClass("animated bounceInDown");},0),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_03').css("top", page4_arr[1]+"px");$('.page4 .page4_01 .page4_01_03').addClass("animated zoomIn");},500),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_04').css("top", page4_arr[2]+"px");$('.page4 .page4_01 .page4_01_04').addClass("animated bounceInRight");},3000),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_05').css("top", page4_arr[3]+"px");$('.page4 .page4_01 .page4_01_05').addClass("animated zoomIn");},2800),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_06').css("top", page4_arr[4]+"px");$('.page4 .page4_01 .page4_01_06').addClass("animated zoomIn");},2600),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_07').css("top", page4_arr[5]+"px");$('.page4 .page4_01 .page4_01_07').addClass("animated bounceInLeft");},1000),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_08').css("top", page4_arr[6]+"px");$('.page4 .page4_01 .page4_01_08').addClass("animated bounceInLeft");},1200),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_09').css("top", page4_arr[7]+"px");$('.page4 .page4_01 .page4_01_09').addClass("animated bounceInLeft");},1400),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_10').css("top", page4_arr[8]+"px");$('.page4 .page4_01 .page4_01_10').addClass("animated bounceInLeft");},1600),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_11').css("top", page4_arr[9]+"px");$('.page4 .page4_01 .page4_01_11').addClass("animated bounceInLeft");},1800),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_12').css("top", page4_arr[10]+"px");$('.page4 .page4_01 .page4_01_12').addClass("animated bounceInLeft");},2000),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_13').css("top", page4_arr[11]+"px");$('.page4 .page4_01 .page4_01_13').addClass("animated bounceInLeft");},2200),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_14').css("top", page4_arr[12]+"px");$('.page4 .page4_01 .page4_01_14').addClass("animated bounceInLeft");},2400),
	setTimeout(function(){$('.page4 .page4_01 .page4_01_15').css("top", page4_arr[13]+"px");$('.page4 .page4_01 .page4_01_15').addClass("animated bounceInLeft");},2600)
	];
	
}
function page04_out(){
	$('.page4 .page4_01').fadeOut();
	for(var i=0;i<page4_brr.length;i++){
		clearTimeout(page4_brr[i]);
	}
	for(var j=2;j<page4_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page4 .page4_01 .page4_01_"+j).attr("class","page4_01_"+j);
	}
}

/**********************第五页**************************************/
function page05_in(){
	$('.page5 .page5_01').fadeIn();
	var page5_arr = [(82/640)*scoll_width,(147/640)*scoll_width,(234/640)*scoll_width,(793/640)*scoll_width,(640/640)*scoll_width,(570/640)*scoll_width,(602/640)*scoll_width,(519/640)*scoll_width,(604/640)*scoll_width,(575/640)*scoll_width,(661/640)*scoll_width];
	
	$('.page5 .page5_01 .page5_01_01').css("height", page5_arr[0]+"px");
	page5_brr = [setTimeout(function(){$('.page5 .page5_01 .page5_01_02').css("top", page5_arr[0]+"px");$('.page5 .page5_01 .page5_01_02').addClass("animated bounceInDown");},0),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_03').css("top", page5_arr[1]+"px");$('.page5 .page5_01 .page5_01_03').addClass("animated zoomIn");},500),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_04').css("top", page5_arr[2]+"px");$('.page5 .page5_01 .page5_01_04').addClass("animated zoomIn");},1000),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_05').css("top", page5_arr[3]+"px");$('.page5 .page5_01 .page5_01_05').addClass("animated zoomIn");},1600),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_06').css("top", page5_arr[4]+"px");$('.page5 .page5_01 .page5_01_06').addClass("animated bounceInLeft");},1600),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_07').css("top", page5_arr[5]+"px");$('.page5 .page5_01 .page5_01_07').addClass("animated bounceInLeft");},1800),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_08').css("top", page5_arr[6]+"px");$('.page5 .page5_01 .page5_01_08').addClass("animated bounceInLeft");},2000),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_09').css("top", page5_arr[7]+"px");$('.page5 .page5_01 .page5_01_09').addClass("animated bounceInLeft");},2200),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_10').css("top", page5_arr[8]+"px");$('.page5 .page5_01 .page5_01_10').addClass("animated bounceInLeft");},2400),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_11').css("top", page5_arr[9]+"px");$('.page5 .page5_01 .page5_01_11').addClass("animated bounceInLeft");},2600),
	setTimeout(function(){$('.page5 .page5_01 .page5_01_12').css("top", page5_arr[10]+"px");$('.page5 .page5_01 .page5_01_12').addClass("animated bounceInLeft");},2800)
	];
	
}
function page05_out(){
	$('.page5 .page5_01').fadeOut();
	for(var i=0;i<page5_brr.length;i++){
		clearTimeout(page5_brr[i]);
	}
	for(var j=2;j<page5_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page5 .page5_01 .page5_01_"+j).attr("class","page5_01_"+j);
	}
}

/**********************第六页**************************************/
function page06_in(){
	$('.page6 .page6_01').fadeIn();
	var page6_01_ht = (69/640)*scoll_width;
	var page6_arr = [(57/640)*scoll_width,(114/640)*scoll_width,(178/640)*scoll_width,(310/640)*scoll_width,(435/640)*scoll_width,(722/640)*scoll_width,(810/640)*scoll_width,(898/640)*scoll_width];
	
	$('.page6 .page6_01 .page6_01_01').css("height", page6_01_ht+"px");
	page6_brr = [setTimeout(function(){$('.page6 .page6_01 .page6_01_02').css("top", page6_arr[0]+"px");$('.page6 .page6_01 .page6_01_02').addClass("animated bounceInDown");},0),
	setTimeout(function(){$('.page6 .page6_01 .page6_01_03').css("top", page6_arr[1]+"px");$('.page6 .page6_01 .page6_01_03').addClass("animated zoomIn");},1000),
	setTimeout(function(){$('.page6 .page6_01 .page6_01_04').css("top", page6_arr[2]+"px");$('.page6 .page6_01 .page6_01_04').addClass("animated zoomIn");},1200),
	setTimeout(function(){$('.page6 .page6_01 .page6_01_05').css("top", page6_arr[3]+"px");$('.page6 .page6_01 .page6_01_05').addClass("animated zoomIn");},1800),
	setTimeout(function(){$('.page6 .page6_01 .page6_01_06').css("top", page6_arr[4]+"px");$('.page6 .page6_01 .page6_01_06').addClass("page6_01_06_animate");},2400),
	setTimeout(function(){$('.page6 .page6_01 .page6_01_07').css("top", page6_arr[5]+"px");$('.page6 .page6_01 .page6_01_07').addClass("animated fadeInUp");},2600),
	setTimeout(function(){$('.page6 .page6_01 .page6_01_08').css("top", page6_arr[6]+"px");$('.page6 .page6_01 .page6_01_08').addClass("animated fadeInUp");},2800),
	setTimeout(function(){$('.page6 .page6_01 .page6_01_09').css("top", page6_arr[7]+"px");$('.page6 .page6_01 .page6_01_09').addClass("animated fadeInUp");},3000)
	];
	
}
function page06_out(){
	$('.page6 .page6_01').fadeOut();
	for(var i=0;i<page6_brr.length;i++){
		clearTimeout(page6_brr[i]);
	}
	for(var j=2;j<page6_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page6 .page6_01 .page6_01_"+j).attr("class","page6_01_"+j);
	}
}

/**********************第七页**************************************/
function page07_in(){
	$('.page7 .page7_01').fadeIn();
	var page7_arr = [(140/640)*scoll_width,(80/640)*scoll_width,(163/640)*scoll_width,(251/640)*scoll_width,(363/640)*scoll_width,(380/640)*scoll_width,(477/640)*scoll_width,(554/640)*scoll_width,(513/640)*scoll_width,(698/640)*scoll_width,(477/640)*scoll_width,(693/640)*scoll_width,(919/640)*scoll_width];
	
	page7_brr = [setTimeout(function(){$('.page7 .page7_01 .page7_01_01').css("top", page7_arr[0]+"px");$('.page7 .page7_01 .page7_01_01').addClass("page7_01_01_animate");},0),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_02').css("top", page7_arr[1]+"px");$('.page7 .page7_01 .page7_01_02').addClass("animated bounceInDown");},0),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_03').css("top", page7_arr[2]+"px");$('.page7 .page7_01 .page7_01_03').addClass("animated zoomIn");},600),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_04').css("top", page7_arr[3]+"px");$('.page7 .page7_01 .page7_01_04').addClass("animated zoomIn");},3000),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_05').css("top", page7_arr[4]+"px");$('.page7 .page7_01 .page7_01_05').addClass("animated zoomIn");},3400),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_06').css("top", page7_arr[5]+"px");$('.page7 .page7_01 .page7_01_06').addClass("animated zoomIn");},3800),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_07').css("top", page7_arr[6]+"px");$('.page7 .page7_01 .page7_01_07').addClass("animated zoomIn");},1600),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_08').css("top", page7_arr[7]+"px");$('.page7 .page7_01 .page7_01_08').addClass("animated zoomIn");},2200),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_09').css("top", page7_arr[8]+"px");$('.page7 .page7_01 .page7_01_09').addClass("animated bounceInDown");},1800),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_10').css("top", page7_arr[9]+"px");$('.page7 .page7_01 .page7_01_10').addClass("animated zoomIn");},2200),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_11').css("top", page7_arr[10]+"px");$('.page7 .page7_01 .page7_01_11').addClass("animated zoomIn");},1600),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_12').css("top", page7_arr[11]+"px");$('.page7 .page7_01 .page7_01_12').addClass("animated fadeInUp");},600),
	setTimeout(function(){$('.page7 .page7_01 .page7_01_13').css("top", page7_arr[12]+"px");$('.page7 .page7_01 .page7_01_13').addClass("animated zoomIn");},3200)
	];
	
}
function page07_out(){
	$('.page7 .page7_01').fadeOut();
	for(var i=0;i<page7_brr.length;i++){
		clearTimeout(page7_brr[i]);
	}
	for(var j=2;j<page7_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page7 .page7_01 .page7_01_"+j).attr("class","page7_01_"+j);
	}
}

/**********************第八页**************************************/
function page08_in(){
	$('.page8 .page8_01').fadeIn();
	var page8_arr = [(140/640)*scoll_width,(80/640)*scoll_width,(163/640)*scoll_width,(251/640)*scoll_width,(363/640)*scoll_width,(380/640)*scoll_width,(517/640)*scoll_width,(551/640)*scoll_width,(775/640)*scoll_width,(919/640)*scoll_width];
	
	page8_brr = [setTimeout(function(){$('.page8 .page8_01 .page8_01_01').css("top", page8_arr[0]+"px");$('.page8 .page8_01 .page8_01_01').addClass("page7_01_01_animate");},0),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_02').css("top", page8_arr[1]+"px");$('.page8 .page8_01 .page8_01_02').addClass("animated bounceInDown");},0),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_03').css("top", page8_arr[2]+"px");$('.page8 .page8_01 .page8_01_03').addClass("animated zoomIn");},600),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_04').css("top", page8_arr[3]+"px");$('.page8 .page8_01 .page8_01_04').addClass("animated zoomIn");},2400),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_05').css("top", page8_arr[4]+"px");$('.page8 .page8_01 .page8_01_05').addClass("animated zoomIn");},2600),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_06').css("top", page8_arr[5]+"px");$('.page8 .page8_01 .page8_01_06').addClass("animated zoomIn");},2800),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_07').css("top", page8_arr[6]+"px");$('.page8 .page8_01 .page8_01_07').addClass("animated bounceInLeft");},1000),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_08').css("top", page8_arr[7]+"px");$('.page8 .page8_01 .page8_01_08').addClass("animated zoomIn");},1400),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_09').css("top", page8_arr[8]+"px");$('.page8 .page8_01 .page8_01_09').addClass("animated zoomIn");},1400),
	setTimeout(function(){$('.page8 .page8_01 .page8_01_10').css("top", page8_arr[9]+"px");$('.page8 .page8_01 .page8_01_10').addClass("animated zoomIn");},2600)
	];
	
}
function page08_out(){
	$('.page8 .page8_01').fadeOut();
	for(var i=0;i<page8_brr.length;i++){
		clearTimeout(page8_brr[i]);
	}
	for(var j=2;j<page8_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page8 .page8_01 .page8_01_"+j).attr("class","page8_01_"+j);
	}
}

/**********************第九页**************************************/
function page09_in(){
	$('.page9 .page9_01').fadeIn();
	var page9_arr = [(140/640)*scoll_width,(80/640)*scoll_width,(163/640)*scoll_width,(251/640)*scoll_width,(363/640)*scoll_width,(380/640)*scoll_width,(517/640)*scoll_width,(525/640)*scoll_width,(748/640)*scoll_width,(919/640)*scoll_width];
	
	page9_brr = [setTimeout(function(){$('.page9 .page9_01 .page9_01_01').css("top", page9_arr[0]+"px");$('.page9 .page9_01 .page9_01_01').addClass("page7_01_01_animate");},0),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_02').css("top", page9_arr[1]+"px");$('.page9 .page9_01 .page9_01_02').addClass("animated bounceInDown");},0),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_03').css("top", page9_arr[2]+"px");$('.page9 .page9_01 .page9_01_03').addClass("animated zoomIn");},600),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_04').css("top", page9_arr[3]+"px");$('.page9 .page9_01 .page9_01_04').addClass("animated zoomIn");},2400),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_05').css("top", page9_arr[4]+"px");$('.page9 .page9_01 .page9_01_05').addClass("animated zoomIn");},2600),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_06').css("top", page9_arr[5]+"px");$('.page9 .page9_01 .page9_01_06').addClass("animated zoomIn");},2800),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_07').css("top", page9_arr[6]+"px");$('.page9 .page9_01 .page9_01_07').addClass("animated bounceInRight");},1000),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_08').css("top", page9_arr[7]+"px");$('.page9 .page9_01 .page9_01_08').addClass("animated zoomIn");},1400),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_09').css("top", page9_arr[8]+"px");$('.page9 .page9_01 .page9_01_09').addClass("animated zoomIn");},1400),
	setTimeout(function(){$('.page9 .page9_01 .page9_01_10').css("top", page9_arr[9]+"px");$('.page9 .page9_01 .page9_01_10').addClass("animated zoomIn");},2600)
	];
	
}
function page09_out(){
	$('.page9 .page9_01').fadeOut();
	for(var i=0;i<page9_brr.length;i++){
		clearTimeout(page9_brr[i]);
	}
	for(var j=2;j<page9_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page9 .page9_01 .page9_01_"+j).attr("class","page9_01_"+j);
	}
}

/**********************第十页**************************************/
function page10_in(){
	$('.page10 .page10_01').fadeIn();
	var page10_01_ht = (671/640)*scoll_width;
	var page10_arr = [(19/640)*scoll_width,(65/640)*scoll_width,(56/640)*scoll_width,(62/640)*scoll_width,(38/640)*scoll_width,(67/640)*scoll_width,(276/640)*scoll_width,(294/640)*scoll_width,(336/640)*scoll_width,(360/640)*scoll_width,(401/640)*scoll_width,(465/640)*scoll_width,(502/640)*scoll_width,(0/640)*scoll_width,(671/640)*scoll_width,(685/640)*scoll_width,(721/640)*scoll_width,(733/640)*scoll_width,(770/640)*scoll_width,(780/640)*scoll_width,(823/640)*scoll_width,(824/640)*scoll_width,(865/640)*scoll_width,(696/640)*scoll_width,(686/640)*scoll_width,(923/640)*scoll_width];
	var page10_23_ht = scoll_height-page10_arr[22];
	
	$('.page10 .page10_01 .page10_01_14').css("height", page10_01_ht+"px");
	$('.page10 .page10_01 .page10_01_23').css("height", page10_23_ht+"px");
	page10_brr = [setTimeout(function(){$('.page10 .page10_01 .page10_01_01').css("top", page10_arr[0]+"px");$('.page10 .page10_01 .page10_01_01').addClass("animated fadeIn");},0),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_02').css("top", page10_arr[1]+"px");$('.page10 .page10_01 .page10_01_02').addClass("animated bounceInDown");},500),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_03').css("top", page10_arr[2]+"px");$('.page10 .page10_01 .page10_01_03').addClass("animated bounceInDown");},500),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_04').css("top", page10_arr[3]+"px");$('.page10 .page10_01 .page10_01_04').addClass("animated bounceInDown");},500),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_05').css("top", page10_arr[4]+"px");$('.page10 .page10_01 .page10_01_05').addClass("animated bounceInDown");},500),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_06').css("top", page10_arr[5]+"px");$('.page10 .page10_01 .page10_01_06').addClass("animated bounceInDown");},900),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_07').css("top", page10_arr[6]+"px");$('.page10 .page10_01 .page10_01_07').addClass("animated bounceInLeft");},100),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_08').css("top", page10_arr[7]+"px");$('.page10 .page10_01 .page10_01_08').addClass("animated zoomIn");},1300),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_09').css("top", page10_arr[8]+"px");$('.page10 .page10_01 .page10_01_09').addClass("animated bounceInLeft");},1100),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_10').css("top", page10_arr[9]+"px");$('.page10 .page10_01 .page10_01_10').addClass("animated zoomIn");},1400),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_11').css("top", page10_arr[10]+"px");$('.page10 .page10_01 .page10_01_11').addClass("animated zoomIn");},1700),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_12').css("top", page10_arr[11]+"px");$('.page10 .page10_01 .page10_01_12').addClass("animated zoomIn");},1900),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_13').css("top", page10_arr[12]+"px");$('.page10 .page10_01 .page10_01_13').addClass("animated zoomIn");},2100),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_14').css("top", page10_arr[13]+"px");$('.page10 .page10_01 .page10_01_14').addClass("animated fadeIn");},2300),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_15').css("top", page10_arr[14]+"px");$('.page10 .page10_01 .page10_01_15').addClass("animated bounceInLeft");},2300),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_16').css("top", page10_arr[15]+"px");$('.page10 .page10_01 .page10_01_16').addClass("animated zoomIn");},2400),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_17').css("top", page10_arr[16]+"px");$('.page10 .page10_01 .page10_01_17').addClass("animated bounceInLeft");},2500),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_18').css("top", page10_arr[17]+"px");$('.page10 .page10_01 .page10_01_18').addClass("animated zoomIn");},2600),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_19').css("top", page10_arr[18]+"px");$('.page10 .page10_01 .page10_01_19').addClass("animated bounceInLeft");},2700),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_20').css("top", page10_arr[19]+"px");$('.page10 .page10_01 .page10_01_20').addClass("animated zoomIn");},2800),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_21').css("top", page10_arr[20]+"px");$('.page10 .page10_01 .page10_01_21').addClass("animated bounceInLeft");},2900),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_22').css("top", page10_arr[21]+"px");$('.page10 .page10_01 .page10_01_22').addClass("animated zoomIn");},3000),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_23').css("top", page10_arr[22]+"px");$('.page10 .page10_01 .page10_01_23').addClass("animated zoomIn");},3100),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_24').css("top", page10_arr[23]+"px");$('.page10 .page10_01 .page10_01_24').addClass("animated zoomIn");},3200),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_25').css("top", page10_arr[24]+"px");$('.page10 .page10_01 .page10_01_25').addClass("animated zoomIn");},3300),
	setTimeout(function(){$('.page10 .page10_01 .page10_01_26').css("top", page10_arr[25]+"px");$('.page10 .page10_01 .page10_01_26').addClass("animated zoomIn");},3400)
	];
	
}
function page10_out(){
	$('.page10 .page10_01').fadeOut();
	for(var i=0;i<page10_brr.length;i++){
		clearTimeout(page10_brr[i]);
	}
	for(var j=2;j<page10_brr.length+2;j++){
		if(j<10){j="0"+j;}
		$(".page10 .page10_01 .page10_01_"+j).attr("class","page10_01_"+j);
	}
}