
var MVC = function(){
	var model ={
		maxId:11,
		data:[
				{id:1,href:"#",imgSrc:"images/advices1.jpg",info:"仿真毛绒睡眠抱抱熊",newPrice:"¥256.00",oldPrice:"¥313.00"},
				{id:2,href:"#",imgSrc:"images/advices2.jpg",info:"Tom Ford黑管唇膏 08",newPrice:"¥385",oldPrice:"¥448"},
				{id:3,href:"#",imgSrc:"images/advices3.jpg",info:"玻璃密封罐/梅森瓶 绿色宽口 947ml",newPrice:"¥69",oldPrice:"¥105"},
				{id:4,href:"#",imgSrc:"images/advices4.jpg",info:"LED化妆镜 ",newPrice:"¥198",oldPrice:"¥168"},
				{id:5,href:"#",imgSrc:"images/advices5.jpg",info:"意大利香槟慕斯超细腻面料洗衣液1000ml",newPrice:"¥58",oldPrice:"¥69"},
				{id:6,href:"#",imgSrc:"images/advices6.jpg",info:"石塚硝子 储存瓶 果茶瓶泡酒瓶",newPrice:"¥79",oldPrice:"¥88"},
				{id:7,href:"#",imgSrc:"images/advices7.jpg",info:"花香系列洗发水+护发套装 菊花/毛根",newPrice:"¥104",oldPrice:"¥168"},
				{id:8,href:"#",imgSrc:"images/advices8.jpg",info:"赫本至爱 荷兰皇室御用七叶树籽眼霜",newPrice:"¥158",oldPrice:"¥168"},
				{id:9,href:"#",imgSrc:"images/advices9.jpg",info:"多彩铸铁珐琅汤锅",newPrice:"¥219",oldPrice:"¥938"},
				{id:10,href:"#",imgSrc:"images/advices10.jpg",info:"PITTA MASK 立体可清洗口罩",newPrice:"¥78",oldPrice:"¥84"}
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