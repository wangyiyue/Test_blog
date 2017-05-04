;(function(){
	$('.search').width('190px');
	// 搜索框获得焦点时，ol显示 、背景变白色 、 长度变大
	$('.sear').focus(function(){
		$('.search').animate({'width':'260px'});
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
		$('.search').animate({'width':'190px'},500);
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
	var letterTop = $('.letter').offset().top;
	// 屏幕的高度
	var winHeight = $(window).height();
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		// // 当滚动的高度大于等于字母位置时，导航固定定位，反之导航位于标准流中
		if(scrollTop >= letterTop){
			$('.sortBox').addClass('scrollAfter');
		}else{
			$('.sortBox').removeClass('scrollAfter');
		}
		// 当滚动高度大于一屏时，显示客服和回到顶部按钮，反之隐藏
		if(scrollTop >= winHeight){
			$('.slide').show();
			// 鼠标进入回到顶部按钮时，图片变成文字
			$('.toTop').hover(function(){
				$(this).find('img').stop().fadeOut(300,function(){
					$('.toTop p').stop().fadeIn(300);
				});
				// 鼠标离开回到顶部按钮时，文字变成图片
			},function(){
				$(this).find('p').stop().fadeOut(300,function(){
					$('.toTop img').stop().fadeIn(300);
				});
			});
		}else{
			$('.slide').stop().hide();
		}
	});
	
	// var $a = $('.area a').slice(12);
	// // $a.hide();
	// var flag = true;
	// 点击下拉按钮，列表框高度变大，再次点击列表框恢复正常
	$('.area .btn').click(function(){
		// 判断列表框的高度时候小于等于30
		if($('.multiLine').height() <= 30){
			$('.multiLine').stop().animate({height:"120px"},500);
			$('.area .btn img').css({"transform":"rotate(-180deg)"});
		}else{
			$('.multiLine').stop().animate({height:"30px"},500);
			$('.area .btn img').css({"transform":"rotate(0deg)"});
		}
		// if(flag){
		// 	$a.stop().slideDown(600);
		// 	flag = false;
		// 	$('.area .btn').css("transform","rotate(-180deg)");
		// }else{
		// 	$a.stop().slideUp(600);
		// 	flag = true;
		// 	$('.area .btn').css("transform","rotate(0deg)");
		// }
	});

	// 点击字母导航，跳到对应的位置
	// 获取字母导航所对应位置的文档坐标值
	var offsetTops = [];
	$('.brand .letterLocation').each(function(index,el){
		offsetTops[index] = $(this).offset().top;
	});
	console.log(offsetTops);
	$('.letter a').click(function(){
		var indexs = $(this).index();
		console.log(indexs);
		$('html,body').animate({scrollTop:(offsetTops[indexs-1])-450},500);
		console.log(offsetTops[indexs-1]);
	});

	// 点击回到顶部按钮 回到顶部
	$('.toTop').click(function(){
		$('html,body').animate({scrollTop:0},600);
	});

	// 鼠标进入微信小图标时，显示二维码图片，反之隐藏
	$('.pic').hover(function(){
		$('#weixin').stop().toggle();
	});

	// 商品列表
	MVC.controller.init("brandItem#","template");
	MVC.controller.start(MVC.model.data1);
	MVC.controller.init("brandItemA","template");
	MVC.controller.start(MVC.model.data2);
	MVC.controller.init("brandItemB","template");
	MVC.controller.start(MVC.model.data3);

	// 获取id为偶数的dl，将其margin-right=0
	$('.brand dl').each(function(){
		var id = ($(this).attr("id")+"").substr(2);
		// console.log(id);
		if(id % 2 == 0){
			$(this).addClass("none");
		}
	});
})()

