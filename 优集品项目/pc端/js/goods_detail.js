

$(function(){

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
		//详情页的菜单文档坐标值
		var target_top = $('.detail_menu').offset().top;
		// 屏幕的高度
		var winHeight = $(window).height();
		var H1=$(".detail_message").length>0 ? $(".detail_message").offset().top :0,
			H2=$(".brand").length>0 ? $(".brand").offset().top : H1,
			H3=$(".assess").length>0 ? $(".assess").offset().top : H1;
		$(window).scroll(function(){
			// 当滚动高度大于一屏时，显示客服和回到顶部按钮，反之隐藏
			if($(window).scrollTop >= winHeight){
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
			//详情页菜单栏的吸顶效果
			if($(window).scrollTop() >= target_top){
					$('.detail_menu').css({"position":'fixed',top:0});
				}else{
					$('.detail_menu').css("position",'static');
				}

			//用户口碑标题导航
			var nH=parseInt($(window).scrollTop());
	            if(nH>H1-20){
	            	if(H2!=H1 && nH>H2-120){
						if(H1!=H3 && nH>H3+60){
							$(".detail_menu>a").eq(2).addClass("on").siblings().removeClass("on");
						}else{
							$(".detail_menu>a").eq(1).addClass("on").siblings().removeClass("on");
						}
	            	}else{
	            		$(".detail_menu>a").eq(0).addClass("on").siblings().removeClass("on");
					}
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

		//图片放大镜效果
		$(function(){
			$(".jqzoom").jqueryzoom({xzoom:400,yzoom:400});
		});

		//点击小图片出现红色边框
		$('#thumblist li').on('click',function(){
			$(this).addClass('on').siblings().removeClass('on');
		});
		//点击选中的颜色
		$(".color").on("click","img",function(){
			$(".jqzoom img").attr("src",$(this).attr("src"));
			$(this).parent("li").addClass('on').siblings().removeClass('on');
		})
		//点击左右按钮
		var tempLength = 0; //临时变量,当前移动的长度
		var viewNum = 6; //设置每次显示图片的个数量
		var moveNum = 2; //每次移动的数量
		var moveTime = 300; //移动速度,毫秒
		var scrollDiv = $("#thumblist"); //进行移动动画的容器
		var scrollItems = $("#thumblist li"); //移动容器里的集合
		var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
		console.log(scrollItems.eq(0).width())
		var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度

		//点击下一张小图片
		$(".img_small #next").bind("click",function(){
			if(tempLength < countLength){
				if((countLength - tempLength) > moveLength){
					scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
					tempLength += moveLength;
				}else{
					scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
					tempLength += (countLength - tempLength);
				}
			}
		});
		//点击上一张小图片
		$(".img_small #prev").bind("click",function(){
			if(tempLength > 0){
				if(tempLength > moveLength){
					scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
					tempLength -= moveLength;
				}else{
					scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
					tempLength = 0;
				}
			}
		});

		//点击+号增加数量(input的值)
		$('.wrap_input #reduce').click(function(){
			var goods = $(this).next();
			goods.val(parseInt(goods.val())-1);
			if(goods.val() < 0){
				goods.val(0);
			}
		});
		//点击-号减少数量(input的值)
		$('.wrap_input #add').click(function(){
			var goods = $(this).prev();
			goods.val(parseInt(goods.val())+1);
			if(goods.val() >100){
				goods.val(100);
			}
		});
})

	//点击小图标
	function preview(img){
		$(".jqzoom img").attr("src",$(img).attr("src"));
		$(".jqzoom img").attr("jqimg",$(img).attr("bimg"));
	}































