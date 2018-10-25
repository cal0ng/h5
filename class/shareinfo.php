<?php
function shareInfo($myTitle,$myDesc,$myPicUrl,$myUrl){
		require_once "shareclass.php";
		$jssdk = new JSSDK("wx9fdb02c0b3301e68", "a0b1b4914e9ebe9972fab8a87ad6ffed");
		$signPackage = $jssdk->GetSignPackage();
		$news = array("Title" =>$myTitle, "Description"=>$myDesc, "PicUrl" =>$myPicUrl, "Url" =>$myUrl);
?>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script>
	wx.config({
		debug: false,
		appId: '<?php echo $signPackage["appId"];?>',
		timestamp: <?php echo $signPackage["timestamp"];?>,
		nonceStr: '<?php echo $signPackage["nonceStr"];?>',
		signature: '<?php echo $signPackage["signature"];?>',
		jsApiList: [
			// 所有要调用的 API 都要加到这个列表中
			'checkJsApi',
			'openLocation',
			'getLocation',
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ'
		  ]
	});
	
	wx.ready(function () {
		wx.checkJsApi({
			jsApiList: [
				'getLocation',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ'
			],
			success: function (res) {
				//alert(JSON.stringify(res));
			}
		});

		wx.onMenuShareAppMessage({
		  title: '<?php echo $news['Title'];?>',
		  desc: '<?php echo $news['Description'];?>',
		  link: '<?php echo $news['Url'];?>',
		  imgUrl: '<?php echo $news['PicUrl'];?>',
		  trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
						
		  },
		  success: function (res) {
			// alert('已分享');
		  },
		  cancel: function (res) {
			// alert('已取消');
		  },
		  fail: function (res) {
			// alert(JSON.stringify(res));
		  }
		});

		wx.onMenuShareTimeline({
		  title: '<?php echo $news['Title'];?>',
		  link: '<?php echo $news['Url'];?>',
		  imgUrl: '<?php echo $news['PicUrl'];?>',
		  trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			
		  },
		  success: function (res) {
			// alert('已分享');
		  },
		  cancel: function (res) {
			// alert('已取消');
		  },
		  fail: function (res) {
			// alert(JSON.stringify(res));
		  }
		});
		
		wx.onMenuShareQQ({
			title: '<?php echo $news['Title'];?>', // 分享标题
			desc: '<?php echo $news['Description'];?>', // 分享描述
			link: '<?php echo $news['Url'];?>', // 分享链接
			imgUrl: '<?php echo $news['PicUrl'];?>', // 分享图标
			trigger: function (res) {
			  // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			  
			},
			success: function (res) { 
			   // 用户确认分享后执行的回调函数
			   //alert("测试2");
			},
			cancel: function (res) { 
			   // 用户取消分享后执行的回调函数
			   //alert("测试3");
			},
			fail: function (res) {
				// alert(JSON.stringify(res));
			}
		});
	});
	</script>
<?php
}
?>