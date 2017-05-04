
var MVC = function(){
	var model ={
		maxId:1,
		data1:[
				{id:1,href:"#",imgSrc:"images/KMSList1.jpg",info:"绿丽安 纯棉美人日用卫生巾",newPrice:"¥35.00",oldPrice:"¥35.00"},
				{id:2,href:"#",imgSrc:"images/KMSList2.jpg",info:"恩芝 超薄夜用卫生巾",newPrice:"¥16",oldPrice:"¥16"},
				{id:3,href:"#",imgSrc:"images/KMSList3.jpg",info:"樱恋 绵柔卫生巾周期装",newPrice:"¥29",oldPrice:"¥29"},
				{id:4,href:"#",imgSrc:"images/KMSList4.jpg",info:"Lil-Lets 导管式棉条",newPrice:"¥73",oldPrice:"¥73"},
				{id:5,href:"#",imgSrc:"images/KMSList5.jpg",info:"丝薄棉柔限量版卫生巾 量多夜用型 20片*29cm",newPrice:"¥35",oldPrice:"¥35"},
				{id:6,href:"#",imgSrc:"images/KMSList6.jpg",info:"乐而雅零触感特薄卫生巾 日用28片",newPrice:"¥39",oldPrice:"¥39"},
				{id:7,href:"#",imgSrc:"images/KMSList7.jpg",info:"极护液体夜用卫生巾 用过就不想换",newPrice:"¥84",oldPrice:"¥84"}
		],
		data2:[
				{id:1,href:"#",imgSrc:"images/office1.jpg",info:"Pico 小鸡笔插/书档",newPrice:"¥256.00",oldPrice:"¥256.00"},
				{id:2,href:"#",imgSrc:"images/office2.jpg",info:"百家印圣诞款印章",newPrice:"¥49",oldPrice:"¥49"},
				{id:3,href:"#",imgSrc:"images/office3.jpg",info:"节日快乐系列长款纸质贺卡",newPrice:"¥42",oldPrice:"¥42"},
				{id:4,href:"#",imgSrc:"images/office4.jpg",info:"黄铜制复古数字图案书签",newPrice:"¥106",oldPrice:"¥106"},
				{id:5,href:"#",imgSrc:"images/office5.jpg",info:"Safari（狩猎系列）钢笔",newPrice:"¥209",oldPrice:"¥209"},
				{id:6,href:"#",imgSrc:"images/office6.jpg",info:"TRAVELER'S Notebook 皮质笔记本 护照型",newPrice:"¥225",oldPrice:"¥225"},
				{id:7,href:"#",imgSrc:"images/office7.jpg",info:"节日使者系列纸质贺卡",newPrice:"¥35",oldPrice:"¥35"}
		],
		data3:[
				{id:1,href:"#",imgSrc:"images/christmas1.jpg",info1:"送上最真诚的祝福",info2:"城市立体镭射贺卡",newPrice:"¥28.00",oldPrice:"¥42.00"},
				{id:2,href:"#",imgSrc:"images/christmas2.jpg",info1:"触动着你的心弦",info2:"韩国进口高级贺卡 日常卡片",newPrice:"¥28.00",oldPrice:"¥36.00"},
				{id:3,href:"#",imgSrc:"images/christmas3.jpg",info1:"心意满满的祝福",info2:"礼物与高跟鞋婚礼贺卡",newPrice:"¥24.00",oldPrice:"¥37.00"},
				{id:4,href:"#",imgSrc:"images/christmas4.jpg",info1:"月球行走纸质贺卡",info2:"",newPrice:"¥35.00",oldPrice:"¥39.00"},
				{id:5,href:"#",imgSrc:"images/christmas5.jpg",info1:"完美手感书写顺滑",info2:"秋の韵 伊予和纸烫金信封6件套",newPrice:"¥37.00",oldPrice:"¥44.00"}
		],
		data4:[
				{id:1,href:"#",imgSrc:"images/create1.jpg",info1:"只想做你手中的宝",info2:"熊本熊暖手充电宝",newPrice:"¥148.00",oldPrice:"¥168.00"},
				{id:2,href:"#",imgSrc:"images/create2.jpg",info1:"潮流品味随时体现",info2:"小恶魔涂鸦版充电宝",newPrice:"¥133.00",oldPrice:"¥299.00"},
				{id:3,href:"#",imgSrc:"images/create3.jpg",info1:"取暖原来可以如此",info2:"Stylepie 马卡龙充电暖手宝",newPrice:"¥138.00",oldPrice:"¥228.00"},
				{id:4,href:"#",imgSrc:"images/create4.jpg",info1:"颜值五星吸睛神器",info2:"iPhone原创设计手机壳  裸色粉花朵 颜值五星吸睛神器",newPrice:"¥59.00",oldPrice:"¥99.00"},
				{id:5,href:"#",imgSrc:"images/create5.jpg",info1:"迷你轻量无压力",info2:"迷你创意超薄聚合物移动电源10000毫安 卡哆Kadoo 够薄才够范儿",newPrice:"¥141.00",oldPrice:"¥220.00"}
		],
		data5:[
				{id:1,href:"#",imgSrc:"images/hair1.jpg",info1:"秀发强韧有弹性",info2:"补水亮泽套装",newPrice:"¥158.00",oldPrice:"¥48.00"},
				{id:2,href:"#",imgSrc:"images/hair2.jpg",info1:"拯救“稻草人士”",info2:"深层补水洗发水+护发素",newPrice:"¥161.00",oldPrice:"¥238.00"},
				{id:3,href:"#",imgSrc:"images/hair3.jpg",info1:"淡淡清香萦绕",info2:"花香系列洗发水+护发套装 菊花/毛根",newPrice:"¥116.00",oldPrice:"¥168.00"},
				{id:4,href:"#",imgSrc:"images/hair4.jpg",info1:"三分钟奇迹滋养",info2:"三分钟奇迹发膜 不做表面功夫",newPrice:"¥44.00",oldPrice:"¥62.00"},
				{id:5,href:"#",imgSrc:"images/hair5.jpg",info1:"拒绝干枯稻草发",info2:"Appelles 小麦原蛋白洗发水",newPrice:"¥159.00",oldPrice:"¥228.00"}
		],
		data6:[
				{id:1,href:"#",imgSrc:"images/mouse1.jpg",info1:"淡桃晚礼服",info2:"Armani/阿玛尼 臻致丝绒哑光唇釉",newPrice:"¥240.00",oldPrice:"¥268.00"},
				{id:2,href:"#",imgSrc:"images/mouse2.jpg",info1:"秒变嘟嘟唇",info2:"YSL/圣罗兰 镜光唇釉 204号",newPrice:"¥248.00",oldPrice:"¥258.00"},
				{id:3,href:"#",imgSrc:"images/mouse3.jpg",info1:"明艳照人更出众",info2:"Tom Ford黑管唇膏 08",newPrice:"¥385.00",oldPrice:"¥428.00"},
				{id:4,href:"#",imgSrc:"images/mouse4.jpg",info1:"饱满丰唇效果",info2:"Tom Ford高闪度唇蜜 07",newPrice:"¥368.00",oldPrice:"¥409.00"},
				{id:5,href:"#",imgSrc:"images/mouse5.jpg",info1:"打造丰润美唇",info2:"亮泽聚光细管唇膏（唇芯） #229",newPrice:"¥255.00",oldPrice:"¥283.00"}
		],
		data7:[
				{id:1,href:"#",imgSrc:"images/cool1.jpg",info1:"看得到的温暖",info2:"Fashy 感温变色小鱼热水袋",newPrice:"¥117.00",oldPrice:"¥215.00"},
				{id:2,href:"#",imgSrc:"images/cool2.jpg",info1:"陪你度过温暖冬夜",info2:"HUGO FROSCH 羊驼系列热水袋",newPrice:"¥116.00",oldPrice:"¥168.00"},
				{id:3,href:"#",imgSrc:"images/cool3.jpg",info1:"为你强效保温6h",info2:"强效保温6h 德国原装进口小羊肖恩热水袋 暖手宝",newPrice:"¥381.00",oldPrice:"¥699.00"},
				{id:4,href:"#",imgSrc:"images/cool4.jpg",info1:"超可爱暖宝宝暖手圣蛋",info2:"",newPrice:"¥8.00",oldPrice:"¥11.00"},
				{id:5,href:"#",imgSrc:"images/cool5.jpg",info1:"冬天玩手机不冻手",info2:"女士触屏带翻盖羊毛手套",newPrice:"¥238.00",oldPrice:"¥458.00"}
		],
		data8:[
				{id:1,href:"#",imgSrc:"images/water1.jpg",info1:"补水淡斑神器",info2:"春雨黑卢卡蜂蜜面膜 补水淡斑祛痘印",newPrice:"¥99.00",oldPrice:"¥158.00"},
				{id:2,href:"#",imgSrc:"images/water2.jpg",info1:"拯救脆弱的敏感肌",info2:"高保湿乳霜",newPrice:"¥108.00",oldPrice:"¥170.00"},
				{id:3,href:"#",imgSrc:"images/water3.jpg",info1:"高浓度玻尿酸保湿面膜 ",info2:"",newPrice:"¥109.00",oldPrice:"¥306.00"},
				{id:4,href:"#",imgSrc:"images/water4.jpg",info1:"补水保湿人手一瓶",info2:"雅漾舒护活泉水喷雾300ml",newPrice:"¥89.00",oldPrice:"¥128.00"},
				{id:5,href:"#",imgSrc:"images/water5.jpg",info1:"嫩白肌肤清洁褪红 ",info2:"黑里透白冻膜",newPrice:"¥118.00",oldPrice:"¥131.00"}
		],
		data9:[
				{id:1,href:"#",imgSrc:"images/eat1.jpg",info1:"泰国香芒味生酵素奶昔代餐粉",info2:"",newPrice:"¥225.00",oldPrice:"¥248.00"},
				{id:2,href:"#",imgSrc:"images/eat2.jpg",info1:"尽享美食轻松减肥",info2:"graphico 让一切消失 白芸豆减肥 原味夜间",newPrice:"¥83.00",oldPrice:"¥103.00"},
				{id:3,href:"#",imgSrc:"images/eat3.jpg",info1:"瘦身塑形酵素原液720ml",info2:"",newPrice:"¥488.00",oldPrice:"¥499.00"},
				{id:4,href:"#",imgSrc:"images/eat4.jpg",info1:"仙人掌精华脂肪阻断剂18支",info2:"",newPrice:"¥145.00",oldPrice:"¥162.00"},
				{id:5,href:"#",imgSrc:"images/eat5.jpg",info1:"多C多健康",info2:"FANCL 芳珂 VC",newPrice:"¥27.00",oldPrice:"¥35.00"}
		],
		data10:[
				{id:1,href:"#",imgSrc:"images/hug1.jpg",info1:"拥抱圆润饱满肥猫",info2:"K'ful彩色地带抱枕",newPrice:"¥135.00",oldPrice:"¥186.00"},
				{id:2,href:"#",imgSrc:"images/hug2.jpg",info1:"给身体柔软支撑",info2:"羽绒棉可爱熊公仔沙发靠垫/抱枕",newPrice:"¥101.00",oldPrice:"¥111.00"},
				{id:3,href:"#",imgSrc:"images/hug3.jpg",info1:"呆萌可爱融化你心",info2:"Kishima小猫抱枕/靠垫",newPrice:"¥94.00",oldPrice:"¥101.00"},
				{id:4,href:"#",imgSrc:"images/hug4.jpg",info1:"我让你依靠",info2:"Ui Nordic北欧简约棉麻抱枕 黄色鹿 我让你依靠",newPrice:"¥84.00",oldPrice:"¥99.00"},
				{id:5,href:"#",imgSrc:"images/hug5.jpg",info1:"疗愈系安睡宝贝",info2:"睡衣羊娃娃抱枕/毛绒公仔大码",newPrice:"¥190.00",oldPrice:"¥240.00"}
		],
		data11:[
				{id:1,href:"#",imgSrc:"images/flower1.jpg",info1:"手工吹制颜值高",info2:"【手工吹制】猫头鹰花瓶 大号",newPrice:"¥101.00",oldPrice:"¥174.00"},
				{id:2,href:"#",imgSrc:"images/flower2.jpg",info1:"精灵样的蓝色神秘",info2:"仿古猫头鹰花瓶",newPrice:"¥127.00",oldPrice:"¥203.00"},
				{id:3,href:"#",imgSrc:"images/flower3.jpg",info1:"清新系文艺植器",info2:"悬挂式玻璃花瓶小号",newPrice:"¥51.00",oldPrice:"¥83.00"},
				{id:4,href:"#",imgSrc:"images/flower4.jpg",info1:"读书渲染更多姿彩",info2:"书堆造型手拉陶瓷书挡/花瓶",newPrice:"¥246.00",oldPrice:"¥395.00"},
				{id:5,href:"#",imgSrc:"images/flower5.jpg",info1:"OL花器",info2:"",newPrice:"¥320.00",oldPrice:"¥352.00"}
		],
		add:function(href,imgSrc,info,newPrice,oldPrice){
			var obj = {
				id:this.maxId++,
				href:href,
				imgSrc:imgSrc,
				info:info,
				newPrice:newPrice,
				oldPrice:oldPrice
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
		addgood:function(href,imgSrc,info,newPrice,oldPrice){
			model.add(href,imgSrc,info,newPrice,oldPrice);
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