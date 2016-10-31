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
//parttop减开始
    $(".pageselect span").eq(0).click(function(){
    	var now=parseInt($(".pageselect span").eq(2).text())
    	if (now-1<=0) {
    		now=1
    	}
    	$(".pageselect span").eq(2).text("0"+(now-1))
 	
    })
//减结束   	
//加开始
    $(".pageselect span").eq(1).click(function(){
    	var now=parseInt($(".pageselect span").eq(2).text())
    	if (now+1>=3) {
    		now=2
    	}
    	$(".pageselect span").eq(2).text("0"+(now+1))
 	
    })
//加结束     

//partbottom减开始
    $(".pageselect span").eq(4).click(function(){
    	var now=parseInt($(".pageselect span").eq(6).text())
    	if (now-1<=0) {
    		now=1
    	}
    	$(".pageselect span").eq(6).text("0"+(now-1))
 	
    })
//减结束   	
//加开始
    $(".pageselect span").eq(5).click(function(){
    	var now=parseInt($(".pageselect span").eq(6).text())
    	if (now+1>=3) {
    		now=2
    	}
    	$(".pageselect span").eq(6).text("0"+(now+1))
 	
    })
//加结束  
})





