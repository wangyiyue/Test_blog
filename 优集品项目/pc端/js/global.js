;(function(){
	// 点击下拉按钮，列表框高度变大，再次点击列表框恢复正常
	$('.area .btn').click(function(){
		// 判断列表框的高度时候小于等于30
		if($('.multiLine').height() <= 30){
			$('.multiLine').stop().animate({height:"700px"},500);
			$('.area .btn img').css({"transform":"rotate(-180deg)"});
		}else{
			$('.multiLine').stop().animate({height:"30px"},500);
			$('.area .btn img').css({"transform":"rotate(0deg)"});
		}
	});
// 点击排序按钮时，剩余的排序方式显示
	$('.order li').click(function(){
		// console.log($(this).text());
		// 将选中的li放于最前面
		$(this).parent().prepend($(this));
		$(this).css({"border":"1px solid transparent"});
		$(this).find('i').show();
		if($('.order li').eq(1).is(':hidden')){
			$('.order li i').css({'transform':'rotate(-90deg)'});
			$('.order li').eq(1).show().css({"border-right":"1px solid #F2F2F2","border-left":"1px solid #F2F2F2"});
			$('.order li i').eq(1).hide();
			$('.order li').eq(2).show().css({"border":"1px solid #F2F2F2","border-top":"0 none"});
			$('.order li i').eq(2).hide();
			// 鼠标滑过第二三个ol li时，背景色变灰色
			$('.order li').slice(1,3).hover(function(){
				$(this).css('background','#f7f7f7').siblings().css('background','#fff');
			},function(){
				$(this).css('background','#fff').siblings().css('background','#fff');
			});
		}else{
			$('.order li i').css({'transform':'rotate(0deg)'});
			$('.order li').eq(1).hide();
			$('.order li').eq(2).hide();
		}
	});

	// 商品列表
		MVC.controller.init("goodsBox","template");
		MVC.controller.start();
})()

