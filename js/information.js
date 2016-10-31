$(document).ready(function(){
	$(".mid li").on("mouseover",function(){
		a=$(".mid li").index($(this))
		$(".main").eq(a).css("display","block")
	})
	$(".mid li").on("mouseout",function(){
        $(".main").eq(a).css("display","none");
   })
	
	
	
})
