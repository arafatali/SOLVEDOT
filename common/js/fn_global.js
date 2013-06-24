$(function(){

	ua = navigator.userAgent;

	if(ua.indexOf('iPhone') > -1 || ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1 || ua.indexOf('SC-01C') < -1 || ua.indexOf('Windows Phone') < -1 || ua.indexOf('Windows CE') < -1 || ua.indexOf('BlackBerry') < -1){
		eStart = "touchstart";eMove = "touchmove";eEnd = "touchend";


		$("#nav_category ul li")/*.on("click",function(e){
			$(this).css({"left":"0"});
		});*/


		.toggle(function(){

			$(this).css({"left":"0"});
		},function(){

			$(this).css({"left":"-200px"});
		});

	};

});