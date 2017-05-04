
var Myjs = {
	//首页的轮播图效果 
	swiper:function(){
		var len = $('.content ol li').length;
		//console.log(len);
		var i = 0;//初始化当前图片
		var timer;
		//改变li标签和图片动画的效果函数
		function changStyle(){
			$('ol li').eq(i).addClass('cur').siblings().removeClass('cur');
			$('.imglist li').eq(i).stop().fadeIn('slow').siblings().stop().fadeOut('slow');
		}
		//定时器函数
		function auto(){
			timer = setInterval(function(){
				nextbtn();
			},3000)
		}
		auto();
		//鼠标移动到图片上时 显示左右按钮;鼠标离开图片上时 隐藏左右按钮
		$('.swiper-slider').mouseenter(function(){
			$('.btn').fadeIn(300);
		}).mouseleave(function() {
			$('.btn').fadeOut(300);
		});
		//鼠标移动到图片上时停止播放
		$('.swiper-slider').mouseenter(function(){
			clearInterval(timer);
		});
		//鼠标离开 图片 开启定时播放
		$('.swiper-slider').mouseleave(function(){
				auto();
		});
		//下面的角标添加事件
		$('.content ol li').mouseenter(function(){
			var _index = $(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			$('.imglist li').eq(_index).stop().fadeIn('slow').siblings().stop().fadeOut('slow');
		})
		//左边按钮点击时事件
		$('.prev').click(function(){
			i--;
			if(i < 0){
				i = $('.imglist li').length - 1;
			}
			changStyle();
		})
		//右边按钮点击时事件
		$('.next').click(function(){
			nextbtn();
		})

		function nextbtn(){
			i++;
			if(i == len-1){
				i = -1;
			}
			changStyle();
		}
	},
	//首页秒杀专区的倒计时
	Times:function(){
		function countDown(time,hour_elem,minute_elem,second_elem){
	  	var end_times = new Date(time).getTime(); //离目标时间的总时间戳
	  	var sys_seconds = end_times - new Date().getTime();
	  	//console.log(sys_seconds);
	  	//定义一个定时器
	  	var timer = setInterval(function(){
	  		if(sys_seconds > 0){
	  			sys_seconds -= 10;
	  			var hour = Math.floor((sys_seconds/1000/3600)%24);//小时
	  			var min = Math.floor((sys_seconds/1000/60)%60);//分
	  			var sec = Math.floor(sys_seconds/1000 % 60);//秒
  				$(hour_elem).text(hour<10?"0"+hour + '':hour +'');
				$(minute_elem).text(min<10?"0"+min + '':min+'');
				$(second_elem).text(sec<10?"0"+sec + '':sec+'');
	  		}else{
	  			clearInterval(timer);
	  		}
	  	},10);
	  }
	  countDown('2016-12-25 00:00:00',".hours",".minutes",".seconds")
	},
	//鼠标移到商品上，背景色变透明色
	changes:function(){
		$(".hotin ul li").each(function(){
	    	$(this).mouseenter(function(){
	        	$(this).find(".mask").css({"display":"block"});
	        	$(this).find(".kiss").css({"display":"block"});
	    	}).mouseleave(function(){
	    		$(this).find(".mask").css({"display":"none"});
	        	$(this).find(".kiss").css({"display":"none"});

	    	});
    	});
	},
	//详情页品牌部分
    Product:function(){
    	var iscals=$("#iscals");
		var shows=$("#shows");
		//点击箭头的时候旋转显示下拉单
		iscals.click(function(){
			tog();
		});

		$("#pop_sort").click(function(){
			$("#product_right").html("按人气排序");
			$("#mon").addClass("money");
			$("#pop").removeClass("popularity");
            tog();
		});
		$("#mon_sort").click(function(){
		    $("#mon").removeClass("money");
			$("#pop").addClass("popularity");
			$("#product_right").html("按价格排序");

			tog();
			
		});

		function tog(){
			iscals.toggleClass("scales");
			shows.toggleClass("on");
		}

    },
}
