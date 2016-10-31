$(document).ready(function(){
     $(".tx").mouseover(function(){
     	$(".checked").css("display","none")
     $(this).children(".checked").css("display","block")
     })
	
	$(".btn").mouseover(function(){
		$(this).css("color","black")
	})
	$(".btn").mouseout(function(){
		$(this).css("color","")
	})
	
     $(".list li").click(function(){
     	$(".list li").css("background","#fff")
     	$(this).css("background","#f0c310")
     })	
     
     $(".listone li").click(function(){
     	$(".listone li").css("background","#fff")
     	$(this).css("background","#f0c310")
     })	
	
})





