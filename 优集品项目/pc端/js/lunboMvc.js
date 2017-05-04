
var MVC = function(){
	var model ={
		maxId:1,
		data1:[
		{id:"1",href:"#",href1:"#",href2:"#",info:"Philosophy自然哲理[美国]",info1:"Amazing Grace 香氛沐浴露",imgsrc:"images/lunbo/muyu1.jpg",price:"¥158.00",price1:"¥208.00"},
		{id:"2",href:"#",href1:"#",href2:"#",info:"COW/牛乳[日本]",info1:"COW牛乳石硷 玫瑰花香沐浴露",imgsrc:"images/lunbo/muyu2.jpg",price:"¥58.00",price1:"¥82.00"},
		{id:"3",href:"#",href1:"#",href2:"#",info:"SUKIN苏芊[澳大利亚]",info1:"SUKIN 草本沐浴露 500ml",imgsrc:"images/lunbo/muyu3.jpg",price:"¥56.00",price1:"¥77.00"},
		{id:"4",href:"#",href1:"#",href2:"#",info:"Crabtree[英国]",info1:"芦荟夏日沐浴套装",imgsrc:"images/lunbo/muyu4.jpg",price:"¥128.00",price1:"¥450.00"},
		{id:"5",href:"#",href1:"#",href2:"#",info:"Tesori d'Oriente 东方宝石[意大利]",info1:"白麝香香氛沐浴露  滋润保湿",imgsrc:"images/lunbo/muyu5.jpg",price:"¥64.00",price1:"¥98.00"},
		{id:"6",href:"#",href1:"#",href2:"#",info:"Onthebody[韩国]",info1:"梦幻香水沐浴露500ml",imgsrc:"images/lunbo/muyu6.jpg",price:"¥36.00",price1:"¥69.00"},
		{id:"7",href:"#",href1:"#",href2:"#",info:"KOSE高丝[日本]",info1:"高丝玫瑰香味沐浴露  浴室里的玫瑰之恋",imgsrc:"images/lunbo/muyu7.jpg",price:"¥65.00",price1:"¥83.00"},
		{id:"8",href:"#",href1:"#",href2:"#",info:"Pelican沛丽康[日本]",info1:"Pelican沛丽康For Back香皂",imgsrc:"images/lunbo/muyu8.jpg",price:"¥35.00",price1:"¥61.00"},
		{id:"9",href:"#",href1:"#",href2:"#",info:"femfresh[美国]",info1:"清新无味私密洗护液250ml",imgsrc:"images/lunbo/muyu9.jpg",price:"¥35.00",price1:"¥85.00"},
		{id:"10",href:"#",href1:"#",href2:"#",info:"Victoria's Secret[美国]",info1:"Victoria's Secret沐浴露",imgsrc:"images/lunbo/muyu10.jpg",price:"¥128.00",price1:"¥198.00"}
		],
		data2:[
		{id:"1",href:"#",href1:"#",href2:"#",info:"Philosophy自然哲理[美国]",info1:"Amazing Grace 香氛沐浴露",imgsrc:"images/lunbo/lotion1.jpg",price:"¥158.00",price1:"¥208.00"},
		{id:"2",href:"#",href1:"#",href2:"#",info:"COW/牛乳[日本]",info1:"COW牛乳石硷 玫瑰花香沐浴露",imgsrc:"images/lunbo/lotion2.jpg",price:"¥58.00",price1:"¥82.00"},
		{id:"3",href:"#",href1:"#",href2:"#",info:"SUKIN苏芊[澳大利亚]",info1:"SUKIN 草本沐浴露 500ml",imgsrc:"images/lunbo/lotion3.jpg",price:"¥56.00",price1:"¥77.00"},
		{id:"4",href:"#",href1:"#",href2:"#",info:"Crabtree[英国]",info1:"芦荟夏日沐浴套装",imgsrc:"images/lunbo/lotion4.jpg",price:"¥128.00",price1:"¥450.00"},
		{id:"5",href:"#",href1:"#",href2:"#",info:"Tesori d'Oriente 东方宝石[意大利]",info1:"白麝香香氛沐浴露  滋润保湿",imgsrc:"images/lunbo/lotion5.jpg",price:"¥64.00",price1:"¥98.00"},
		{id:"6",href:"#",href1:"#",href2:"#",info:"Onthebody[韩国]",info1:"梦幻香水沐浴露500ml",imgsrc:"images/lunbo/lotion6.jpg",price:"¥36.00",price1:"¥69.00"},
		{id:"7",href:"#",href1:"#",href2:"#",info:"KOSE高丝[日本]",info1:"高丝玫瑰香味沐浴露  浴室里的玫瑰之恋",imgsrc:"images/lunbo/lotion7.jpg",price:"¥65.00",price1:"¥83.00"},
		{id:"8",href:"#",href1:"#",href2:"#",info:"Pelican沛丽康[日本]",info1:"Pelican沛丽康For Back香皂",imgsrc:"images/lunbo/lotion8.jpg",price:"¥35.00",price1:"¥61.00"},
		{id:"9",href:"#",href1:"#",href2:"#",info:"femfresh[美国]",info1:"清新无味私密洗护液250ml",imgsrc:"images/lunbo/lotion9.jpg",price:"¥35.00",price1:"¥85.00"},
		{id:"10",href:"#",href1:"#",href2:"#",info:"Victoria's Secret[美国]",info1:"Victoria's Secret沐浴露",imgsrc:"images/lunbo/lotion10.jpg",price:"¥128.00",price1:"¥198.00"},
		{id:"11",href:"#",href1:"#",href2:"#",info:"Victoria's Secret[美国]",info1:"Victoria's Secret沐浴露",imgsrc:"images/lunbo/lotion11.jpg",price:"¥128.00",price1:"¥198.00"},
		{id:"12",href:"#",href1:"#",href2:"#",info:"Victoria's Secret[美国]",info1:"Victoria's Secret沐浴露",imgsrc:"images/lunbo/lotion12.jpg",price:"¥128.00",price1:"¥198.00"}
		],
		data3:[
		{id:"1",href:"#",href1:"#",href2:"#",info:"Roge Cavailles[法国]",info1:"滋润防裂抗过敏护手霜",imgsrc:"images/lunbo/handcream1.jpg",price:"¥80.00",price1:"¥116.00"},
		{id:"2",href:"#",href1:"#",href2:"#",info:"GLAMOURFLAGEG 格兰玛弗兰[澳大利亚]",info1:"格兰玛弗兰 滋润护手霜",imgsrc:"images/lunbo/handcream2.jpg",price:"¥147.00",price1:"¥229.00"},
		{id:"3",href:"#",href1:"#",href2:"#",info:"L'occitane 欧舒丹[法国]",info1:"欧舒丹 甜蜜樱花护手霜",imgsrc:"images/lunbo/handcream3.jpg",price:"¥69.00",price1:"¥85.00"},
		{id:"4",href:"#",href1:"#",href2:"#",info:"Crabtree[英国]",info1:"瑰柏翠玫瑰蔷薇护手霜",imgsrc:"images/lunbo/handcream4.jpg",price:"¥62.00",price1:"¥121.00"},
		{id:"5",href:"#",href1:"#",href2:"#",info:"小蜜蜂[美国]",info1:"柠檬油护甲霜 修复指甲 去死皮",imgsrc:"images/lunbo/handcream5.jpg",price:"¥65.00",price1:"¥128.00"},
		{id:"6",href:"#",href1:"#",href2:"#",info:"BEELY[中国]",info1:"BEELY彼丽 钻石隐形丝袜霜HELLO KITTY限量版",imgsrc:"images/lunbo/handcream6.jpg",price:"¥48.00",price1:"¥79.00"},
		{id:"7",href:"#",href1:"#",href2:"#",info:"BEELY[中国]",info1:"BEELY彼丽滋养美容手足套HELLO KITTY版",imgsrc:"images/lunbo/handcream7.jpg",price:"¥68.00",price1:"¥109.00"},
		{id:"8",href:"#",href1:"#",href2:"#",info:"Kokubo 小久保[日本]",info1:"天然树液力足底清爽贴",imgsrc:"images/lunbo/handcream8.jpg",price:"¥12.00",price1:"¥19.00"},
		{id:"9",href:"#",href1:"#",href2:"#",info:"BEELY[中国]",info1:"BEELY彼丽 去角质死皮手膜套装护手霜",imgsrc:"images/lunbo/handcream9.jpg",price:"¥35.00",price1:"¥49.00"},
		{id:"10",href:"#",href1:"#",href2:"#",info:"COGIT蔻吉特[日本]",info1:"【日本】豆乳磨脚石",imgsrc:"images/lunbo/handcream10.jpg",price:"¥45.00",price1:"¥145.00"}
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
		showData:function(data){
			var newStr="";
			for(var i = 0;i < data.length;i++){
				var str = this.template.innerHTML;
				for(var pName in data[i]){
					var pattern  = new RegExp("{{"+pName+"}}","g");
					str = str.replace(pattern,data[i][pName]);
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
		start:function(data){
			view.showData(data);
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
		controller:controller,
		model:model
	}
}();
