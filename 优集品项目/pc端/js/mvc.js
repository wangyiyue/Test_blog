
var MVC = function(){
	var model ={
		maxId:11,
		data:[
		{href:"#",href1:"#",href2:"#",info:"橙舍[中国]",info1:"创意简约小茶几 一几两垫",imgsrc:"images/newgoods/1.jpg",price:"¥375.00",price1:"¥750.00"},
		{href:"#",href1:"#",href2:"#",info:"橙舍[中国]",info1:"橙舍 创意简约小茶几 不带桌垫款",imgsrc:"images/newgoods/2.jpg",price:"¥298.00",price1:"¥596.00"},
		{href:"#",href1:"#",href2:"#",info:"橙舍[中国]",info1:"橙舍 现代简约原竹餐桌",imgsrc:"images/newgoods/3.jpg",price:"¥265.00",price1:"¥396.00"},
		{href:"#",href1:"#",href2:"#",info:"橙舍[中国]",info1:"橙舍 现代简约灯具",imgsrc:"images/newgoods/4.jpg",price:"¥432.00",price1:"¥556.00"},
		{href:"#",href1:"#",href2:"#",info:"橙舍[中国]",info1:"橙舍 现代简约灯具",imgsrc:"images/newgoods/5.jpg",price:"¥532.00",price1:"¥786.00"},
		{href:"#",href1:"#",href2:"#",info:"飞利浦[荷兰]",info1:"飞利浦 净颜焕彩洁面仪",imgsrc:"images/newgoods/6.jpg",price:"¥1099.00",price1:"¥2599.00"},
		{href:"#",href1:"#",href2:"#",info:"cutipol[葡萄牙]",info1:"DUNA 镀金刀叉勺三件套",imgsrc:"images/newgoods/7.jpg",price:"¥348.00",price1:"¥561.00"},
		{href:"#",href1:"#",href2:"#",info:"BALL MASON JAR[美国]",info1:"梅森罐 玻璃密封罐 4oz水晶杯",imgsrc:"images/newgoods/8.jpg",price:"¥29.00",price1:"¥55.00"},
		{href:"#",href1:"#",href2:"#",info:"阿摩家居[中国]",info1:"阿摩家居 全棉条纹格子四件套 慕尼黑",imgsrc:"images/newgoods/9.jpg",price:"¥319.00",price1:"¥329.00"},
		{href:"#",href1:"#",href2:"#",info:"阿摩家居[中国]",info1:"阿摩家居 专版花色全棉活性喷气四件套",imgsrc:"images/newgoods/10.jpg",price:"¥349.00",price1:"¥359.00"},
		{href:"#",href1:"#",href2:"#",info:"阿摩家居[中国]",info1:"阿摩家居 专版花色全棉活性喷气四件套",imgsrc:"images/newgoods/11.jpg",price:"¥349.00",price1:"¥359.00"},
		{href:"#",href1:"#",href2:"#",info:"阿摩家居[中国]",info1:"阿摩家居 专版花色全棉活性喷气四件套",imgsrc:"images/newgoods/12.jpg",price:"¥349.00",price1:"¥359.00"},
		{href:"#",href1:"#",href2:"#",info:"奇居良品[中国]",info1:"奇居良品 手工编织海草收纳3件套",imgsrc:"images/newgoods/13.jpg",price:"¥108.00",price1:"¥198.00奇居良品[中国]"},
		{href:"#",href1:"#",href2:"#",info:"奇居良品[中国]",info1:"奇居良品 不锈钢底座双面梳妆镜",imgsrc:"images/newgoods/14.jpg",price:"¥99.00",price1:"¥158.00"},
		{href:"#",href1:"#",href2:"#",info:"奇居良品[中国]",info1:"奇居良品 加厚透明玻璃蜡烛烛台",imgsrc:"images/newgoods/15.jpg",price:"¥39.00",price1:"¥49.00"},
		{href:"#",href1:"#",href2:"#",info:"奇居良品[中国]",info1:"奇居良品  加厚透明玻璃蜡烛烛台",imgsrc:"images/newgoods/16.jpg",price:"¥46.00",price1:"¥58.00"},
		{href:"#",href1:"#",href2:"#",info:"奇居良品[中国]",info1:"奇居良品  家居饰品仿真花摆件",imgsrc:"images/newgoods/17.jpg",price:"¥69.00",price1:"¥118.00"},
		{href:"#",href1:"#",href2:"#",info:"AOYOSHI[日本]",info1:"磨砂玫瑰金正餐刀叉勺三件套",imgsrc:"images/newgoods/18.jpg",price:"¥319.00",price1:"¥587.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"瘦瓶陶台灯 麻布灯罩款",imgsrc:"images/newgoods/19.jpg",price:"¥580.00",price1:"¥696.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"瘦瓶陶台灯 竹叶纸罩款",imgsrc:"images/newgoods/20.jpg",price:"¥39.00",price1:"¥89.00"},
		{href:"#",href1:"#",href2:"#",info:"BALL MASON JAR[美国]",info1:"玻璃密封罐/梅森瓶宽口 947ml",imgsrc:"images/newgoods/21.jpg",price:"¥29.00",price1:"¥59.00"},
		{href:"#",href1:"#",href2:"#",info:"BALL MASON JAR[美国]",info1:"梅森罐 玻璃密封罐 12oz水晶杯",imgsrc:"images/newgoods/22.jpg",price:"¥39.00",price1:"¥69.00"},
		{href:"#",href1:"#",href2:"#",info:"BALL MASON JAR[美国]",info1:"梅森罐 玻璃密封罐 700ml",imgsrc:"images/newgoods/23.jpg",price:"¥35.00",price1:"¥69.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"中式禅意紫竹云台灯",imgsrc:"images/newgoods/24.jpg",price:"¥298.00",price1:"¥358.00"},
		{href:"#",href1:"#",href2:"#",info:"JARLL 讃尔艺术[中国台湾]",info1:"立体雪花水晶球音乐盒",imgsrc:"images/newgoods/25.jpg",price:"¥398.00",price1:"¥408.00"},
		{href:"#",href1:"#",href2:"#",info:"JARLL 讃尔艺术[中国台湾]",info1:"雪景树水晶球音乐盒",imgsrc:"images/newgoods/26.jpg",price:"¥1280.00",price1:"¥1290.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"楠竹天使台灯",imgsrc:"images/newgoods/27.jpg",price:"¥580.00",price1:"¥696.00"},
		{href:"#",href1:"#",href2:"#",info:"HERMETICA[中国]",info1:"绿色草帽餐具套装",imgsrc:"images/newgoods/28.jpg",price:"¥280.00",price1:"¥302.00"},
		{href:"#",href1:"#",href2:"#",info:"JARLL 讃尔艺术[中国台湾]",info1:"孩子与雪人水晶球音乐盒",imgsrc:"images/newgoods/29.jpg",price:"¥498.00",price1:"¥508.00"},
		{href:"#",href1:"#",href2:"#",info:"JARLL 讃尔艺术[中国台湾]",info1:"奇幻圣诞树水晶球音乐盒",imgsrc:"images/newgoods/30.jpg",price:"¥458.00",price1:"¥468.00"},
		{href:"#",href1:"#",href2:"#",info:"JARLL 讃尔艺术[中国台湾]",info1:"雪花圣诞树水晶球音乐盒",imgsrc:"images/newgoods/31.jpg",price:"¥398.00",price1:"¥408.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"《等》竹编台灯",imgsrc:"images/newgoods/32.jpg",price:"¥308.00",price1:"¥458.00"},
		{href:"#",href1:"#",href2:"#",info:"JARLL 讃尔艺术[中国台湾]",info1:"房屋雪景树水晶球音乐盒",imgsrc:"images/newgoods/33.jpg",price:"¥398.00",price1:"¥408.00"},
		{href:"#",href1:"#",href2:"#",info:"BALL MASON JAR[美国]",info1:"玻璃密封罐/梅森瓶宽口矮瓶 240ml",imgsrc:"images/newgoods/34.jpg",price:"¥33.00",price1:"¥75.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"麻布灯罩禅意竹灯",imgsrc:"images/newgoods/35.jpg",price:"¥390.00",price1:"¥468.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"《鼓》禅意竹编台灯",imgsrc:"images/newgoods/36.jpg",price:"¥198.00",price1:"¥238.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"马尾竹编花瓶",imgsrc:"images/newgoods/37.jpg",price:"¥138.00",price1:"¥166.00"},
		{href:"#",href1:"#",href2:"#",info:"NatureBamboo 自然家  [中国]",info1:"屏风禅意竹编花器",imgsrc:"images/newgoods/38.jpg",price:"¥199.00",price1:"¥239.00"},
		{href:"#",href1:"#",href2:"#",info:"橙舍[中国]",info1:"创意简约小茶几 一几两垫",imgsrc:"images/newgoods/39.jpg",price:"¥300.00",price1:"¥750.00"},
		{href:"#",href1:"#",href2:"#",info:"橙舍[中国]",info1:"橙舍 创意简约小茶几 不带桌垫款",imgsrc:"images/newgoods/40.jpg",price:"¥238.00",price1:"¥596.00"}
		],
	
		add:function(href,href1,href2,info,info1,imgsrc,price,price1){
			var obj = {
				id:this.maxId++,
				href:href,
				href1:href1,
				href2:href2,
				info:info,
				info1:info1,
				imgsrc:imgsrc,
				price:price,
				price1:price1
			}
			this.data.push(obj);
		},
		del:function(id){
			var index = -1;
			for (var i = 0; i < this.data.length; i++) {
				if(this.data[i].id == id){
					index = i;
					break;
				}
			}
			if(index != -1){
				this.data.splice(index,1);
			}
		},
		mod:function(id,newPrice){
			for (var i = 0; i < this.data.length; i++) {
				if(this.data[i].id == id){
					this.data[i].price = newPrice;
				}
			}
		}
	};
	var view = {
		content:"",
		template:"",
		showData:function(){
			var newStr="";
			for(var i = 0;i < model.data.length;i++){
				var str = this.template.innerHTML;
				for(var pName in model.data[i]){
					var pattern  = new RegExp("{{"+pName+"}}","g");
					str = str.replace(pattern,model.data[i][pName]);
				}
				newStr += str;
			}
			this.content.innerHTML = newStr;
		}
	};
	var controller = {
		init:function(content,template){
			view.content = document.getElementById(content);
			view.template = document.getElementById(template);
		},
		start:function(){
			view.showData();
		},
		// 添加商品
		addgood:function(href,href1,href2,info,info1,imgsrc,price,price1){
			model.add(href,href1,href2,info,info1,imgsrc,price,price1);
			view.showData();//更新视图
		},
		// 删除商品
		delgood:function(id){
			model.del(id);
			view.showData();//更新视图
		},
		// 修改商品
		modgood:function(id,newPrice){
			model.mod(id,newPrice);
			view.showData();
		}
	};
	return{
		controller:controller
	}
}();