;(function(){
	$('.search').css('width',190);
	// 搜索框获得焦点时，ol显示 、背景变白色 、 长度变宽
	$('.sear').focus(function(){
		$('.search').animate({"width":'260px'});
		$(this).animate({'width':'240px'},function(){
			$('.search').css('background-color',"#fff");
			$('.search ol').stop().show();
		});
	});
	// 搜索框失去焦点时，ol隐藏 、背景变灰色 、 长度变小
	$('.sear').blur(function(){
		$('.search ol').stop().hide();
		$('.search').css('background-color',"#F8F8F8");
		$(this).stop().animate({'width':'170px'},500);
		$('.search').animate({"width":'260px'},500);
	});
	// 移到ol li标签上时将其背景变色，其兄弟不变
	$('.search ol li').mouseenter(function(){
		$(this).css("background-color","#F8F8F8").siblings().css("background-color","#fff");
	});
	// 判断内容是否为空，不为空时将ol隐藏
	$('.sear').on('input',function(){
		if($('.sear').val() !== "" ){
			$('.search ol').stop().hide();
		}
	});
	// 鼠标进入手机图标时显示微信,离开隐藏
	$('.function1').hover(function(){
		$('.weixin').stop().fadeToggle(500);
	});
	// 鼠标进入导航时，显示对应的二级菜单
	$('.nav a').mouseenter(function(){
		var index = $(this).index();
		if(index == 0 || index == 1 || index == 7 || index == 8)
			$('.hasSecont').hide();
		else{
			if($('.hasSecont').is(':hidden')){
				$('.hasSecont').slideDown(600);
			}
			$('.hasSecont').show();
			$('.hasSecont .txt').eq(index).show().siblings().hide();
		}
	});
	
	// 鼠标离开导航时，隐藏二级菜单
	$('.navWrap').mouseleave(function(){
		$('.hasSecont').slideUp(1000);
		$('.hasSecont .txt').slideUp(1000);
	});

	// 导航的文档坐标值
	var navTop = $('.navWrap').offset().top;
	// 屏幕的高度
	var winHeight = $(window).height();
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		// 当滚动的高度大于等于导航位置时，导航固定定位，反之导航位于标准流中
		if(scrollTop >= navTop){
			$('.navWrap').css({position:'fixed',top:0,left:0});
			$('.navBox .custorm').stop().hide();
			$('.navBox .bag').stop().show();
		}else{
			$('.navWrap').css({position:'relative'});
			$('.navBox .bag').stop().hide();
			$('.navBox .custorm').stop().show();
		}
		// 当滚动高度大于一屏时，显示客服和回到顶部按钮，反之隐藏
		if(scrollTop >= winHeight){
			$('.slide').show();
			// 鼠标进入回到顶部按钮时，图片变成文字
			$('.toTop').hover(function(){
				$(this).find('img').stop().fadeOut(500,function(){
					$('.toTop p').stop().fadeIn(500);
				});
				// 鼠标离开回到顶部按钮时，文字变成图片
			},function(){
				$(this).find('p').stop().fadeOut(500,function(){
					$('.toTop img').stop().fadeIn(500);
				});
			});
		}else{
			$('.slide').stop().hide();
		}
	});

	// 点击回到顶部按钮 回到顶部
	$('.toTop').click(function(){
		$('html,body').animate({scrollTop:0},600);
	});

	// 鼠标进入微信小图标时，显示二维码图片，反之隐藏
	$('.pic').hover(function(){
		$('#weixin').stop().toggle();
	});
})()

