;(function(){

	// 商品列表
	MVC.controller.init("lotionGoods","template");
	MVC.controller.start(MVC.model.data1);
	MVC.controller.init("creamGoods","template");
	MVC.controller.start(MVC.model.data2);
	MVC.controller.init("handCreamGoods","template");
	MVC.controller.start(MVC.model.data3);
	// 获取id为偶数的dl，将其margin-right=0
	$('.goods dl').each(function(){
		var id = ($(this).attr("id")+"").substr(2);
		// console.log(id);
		if(id % 4 == 0){
			$(this).addClass("none");
		}
	});
})()
