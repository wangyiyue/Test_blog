 ;(function(){
 	
 	/**************************轮播图**************************/

    var swiper = new Swiper('.swiper-top-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    /****************************秒杀专区******************************/

	// 获取span
	var $hours = $('.hours');
	var $minutes = $('.minutes');
	var $seconds = $('.seconds');
	// 秒杀总时间
	var time = 12 * 60 * 60;
	var timer = setInterval(function(){
		time --;
		// 获取当前所剩的小时
		var hours = Math.floor(time/( 60 * 60 ));
		// 获取当前所剩分钟
		var minutes = Math.floor(time/60%60);
		// 获取当前所剩的秒
		var seconds = Math.floor(time % 60);
		// 将时分秒分别添加到对应的span中
		$hours.html(hours);
		$minutes.html(minutes);
		$seconds.html(seconds);
	},1000);

	/**************************商品列表mvc******************************/

	MVC.controller.init("kmsList","template1");
	MVC.controller.start(MVC.model.data1);
	MVC.controller.init("officeList","template1");
	MVC.controller.start(MVC.model.data2);
	MVC.controller.init("christmas","template2");
	MVC.controller.start(MVC.model.data3);
	MVC.controller.init("create","template2");
	MVC.controller.start(MVC.model.data4);
	MVC.controller.init("hair","template2");
	MVC.controller.start(MVC.model.data5);
	MVC.controller.init("mouse","template2");
	MVC.controller.start(MVC.model.data6);
	MVC.controller.init("cool","template2");
	MVC.controller.start(MVC.model.data7);
	MVC.controller.init("water","template2");
	MVC.controller.start(MVC.model.data8);
	MVC.controller.init("eat","template2");
	MVC.controller.start(MVC.model.data9);
	MVC.controller.init("hug","template2");
	MVC.controller.start(MVC.model.data10);
	MVC.controller.init("flower","template2");
	MVC.controller.start(MVC.model.data11);

	/****************************商品展示***************************/

	var swiper = new Swiper('.swiper-goods-container', {
        paginationClickable: true,
        slidesPerView:'auto',//代表按照slide宽度作为一屏的宽度，也可以设置具体值
        spaceBetween: 8,
        freeMode: true,
        // centeredSlides: true,//默认slide居左，设为true会居中
        autoplay: false,
        lazyLoading : true,
        autoplayDisableOnInteraction: false
	});


	// 选中每个索引为奇数的item，将其margin-right设为0
	$('.sortItem .sort:nth-of-type(2n+1)').css('margin-right','.05rem');

	// // 点击叉号，关闭底部推荐
	// $('.cha').click(function(){
	// 	$(this).parent().hide();
	// });
 })()
