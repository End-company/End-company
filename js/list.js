$(document).ready(function(){
	var now=0;
	t=setInterval(banner,2000)
	$(".bannertu").css("opacity","0").eq(2).css("opacity","1");
	$(".yuan1").eq(3).css("background","none")
	function banner(){
		now++;
		if(now>=$(".bannertu").length){
			now=0;
		}
		$(".bannertu").css("opacity","0").eq(now).css("opacity","1");
	}
	function banner1(){
		now--;
		if(now<=0){
			now=$(".bannertu").length;
		}
		$(".bannertu").css("opacity","0").eq(now).css("opacity","1");
	}
	$(".leftjt").click(function(){
		banner1()
	})
	$(".rightjt").click(function(){
		banner()
	})
})