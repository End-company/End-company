$(document).ready(function(){
	var now=0;
	var t=setInterval(banner,2000)
	$(".bannertu").css("opacity","0").eq(0).css("opacity","1");
	$(".yuan1").eq(0).css("background","none")
	function banner(){
		now++;
		if(now>=$(".bannertu").length){
			now=0;
		}
		$(".bannertu").css("opacity","0").eq(now).css("opacity","1");
		$(".yuan1").css("background","white").eq(now).css("background","none")
	}
	function banner1(){
		now--;
		if(now<=0){
			now=$(".bannertu").length;
		}
		$(".bannertu").css("opacity","0").eq(now).css("opacity","1");
		$(".yuan1").css("background","white").eq(now).css("background","none")
	}
	$(".yuan1").click(function(){
		var index=$(this).index();
		$(".bannertu").css("opacity","0").eq(index).css("opacity","1");
		$(".yuan1").css("background","white").eq(index).css("background","none")
		now=index;
	})
	
	$(".leftjt").click(function(){
		banner1()
	})
	$(".rightjt").click(function(){
		banner()
	})
	$(".bannertu").mouseover(function(){
		clearInterval(t)
	})
	$(".bannertu").mouseout(function(){
		t=setInterval(banner,2000)
	})
})