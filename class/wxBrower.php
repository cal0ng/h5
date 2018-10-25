<?php
	if(strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
    }else{
       echo "<div style='color:#000; width:100%; height:100%;'><div style='font-size:1.6rem; text-align:center; padding-top:10%;'><img src='img/wxts.png' width='280' height='280'><div style='padding-top:1.8rem;width:280px; margin:0 auto;line-height:2rem;'>请使用微信扫描二维码进入</div></div></div>";
	   die;
	}
?>