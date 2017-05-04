;(function(){
	$('.advice').hover(function(){
		$('.btn1').toggle();
	});
	var index = 1;
	// 点击右按钮
	$('.rightBtn').click(function(){
		if(index < ($('.advice li').length - 2)){
			index++;
			$('.advice ul').stop().animate({'left':-1160 * index +'px'},500);
		}else{
			index = 1;
			$('.advice ul').stop().animate({'left':-1160 * ($('.advice li').length-1) +'px'},500,'swing',function(){
					$('.advice ul').css('left','-1160px');
			});
		}
	});
	$('.leftBtn').click(function(){
		if(index > 1){
			index--;
			$('.advice ul').stop().animate({'left':-1160 *index +'px'},500);
		}
		else{
			index = 2;
			$('.advice ul').stop().animate({'left':'0px'},500,'swing',function(){
				$('.advice ul').css('left',(-1160 * ($('.advice li').length-2)+'px'));
			});
		}
	});
})()	
	