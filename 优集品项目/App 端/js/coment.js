 ;(function(){
 	/**************************菜单*****************************/ 
	// 点击搜索放大镜，弹出模态框和一级菜单
	$('.sousuo').click(function(){
		$('body').toggleClass('dropDown');
		// 获取窗口高度
		var winH = ($(window).height()-56)/100+"rem";
		if($('body').hasClass('dropDown')){
			$('body').height(winH);
		}
	});
	// 点击item里的span关闭一级菜单和模态框
	$('.item span').click(function(){
		$('body').removeClass('dropDown');
	});
	// 点击p关闭和打开二级菜单
	$('.item p').not('.lastBarnd').click(function(){
		$(this).parent().toggleClass('open').siblings().removeClass('open');
	});

	// 点击叉号，关闭底部推荐
	$('.cha').click(function(){
		$(this).parent().hide();
	});

 })()
