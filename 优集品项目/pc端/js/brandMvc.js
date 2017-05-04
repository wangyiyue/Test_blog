
var MVC = function(){
	var model ={
		maxId:11,
		data1:[
				{id:1,href1:"#",href2:"#",info1:"韩国",info2:"被称为“therapy-cal”的医学和家庭护理品牌",imgsrc1:"images/brand/1.jpg",imgsrc2:"images/brand/2.jpg"},
				{id:2,href1:"#",href2:"#",info1:"澳大利亚",info2:"开启健康时尚新生活",imgsrc1:"images/brand/c5d2a52dcb9ffc770ada052f80cdcb99",imgsrc2:"images/brand/2593b45d59a913f8047fa20922f828e3"},
				{id:3,href1:"#",href2:"#",info1:"加拿大",info2:"美国妈妈最爱的婴幼儿品牌",imgsrc1:"images/brand/d153489c8ae6fe7cf81397ea0be8e911",imgsrc2:"images/brand/4786cabb943b894d85a0b1247009fa49"}
		],
		data2:[
				{id:1,href1:"#",href2:"#",info1:"韩国",info2:"体验KUSO搞怪欢乐精神",imgsrc1:"images/brand/a1",imgsrc2:"images/brand/a2"},
				{id:2,href1:"#",href2:"#",info1:"日本",info2:"当代设计向传统有田烧的致敬",imgsrc1:"images/brand/a3.jpg",imgsrc2:"images/brand/a4.jpg"},
				{id:3,href1:"#",href2:"#",info1:"韩国",info2:"韩国殿堂级美容专业线高端品牌",imgsrc1:"images/brand/a5.jpg",imgsrc2:"images/brand/a6"},
				{id:4,href1:"#",href2:"#",info1:"韩国",info2:"众多韩星御用团队研发",imgsrc1:"images/brand/a7.jpg",imgsrc2:"images/brand/a8.jpg"},
				{id:5,href1:"#",href2:"#",info1:"澳大利亚",info2:"澳洲百年驱蚊领导品牌",imgsrc1:"images/brand/a9",imgsrc2:"images/brand/a10"},
				{id:6,href1:"#",href2:"#",info1:"美国",info2:"全球最流行的手冲咖啡器具",imgsrc1:"images/brand/a11",imgsrc2:"images/brand/a12"},
				{id:7,href1:"#",href2:"#",info1:"日本",info2:"日本居家收纳第一品牌",imgsrc1:"images/brand/a13",imgsrc2:"images/brand/a14"},
				{id:8,href1:"#",href2:"#",info1:"中国",info2:"瓷器中的艺术之作",imgsrc1:"images/brand/a15",imgsrc2:"images/brand/a16"},
				{id:9,href1:"#",href2:"#",info1:"韩国",info2:"韩国第一日化品牌",imgsrc1:"images/brand/a17",imgsrc2:"images/brand/a18"},
				{id:10,href1:"#",href2:"#",info1:"日本",info2:"深受日本本土居家主妇欢迎的家居用品",imgsrc1:"images/brand/a19",imgsrc2:"images/brand/a20"},
				{id:11,href1:"#",href2:"#",info1:"德国",info2:"德国专业护齿60年牙膏品牌",imgsrc1:"images/brand/a21",imgsrc2:"images/brand/a22"},
				{id:12,href1:"#",href2:"#",info1:"日本",info2:"实用的家居用品",imgsrc1:"images/brand/a23",imgsrc2:"images/brand/a24"},
				{id:13,href1:"#",href2:"#",info1:"日本",info2:"日本高级化妆品牌",imgsrc1:"images/brand/a25.jpg",imgsrc2:"images/brand/a26.jpg"},
				{id:14,href1:"#",href2:"#",info1:"日本",info2:"日本知名的洁面护肤品牌",imgsrc1:"images/brand/a27.jpg",imgsrc2:"images/brand/a28.jpg"},
				{id:15,href1:"#",href2:"#",info1:"德国",info2:"德国咖啡因护发防脱品牌",imgsrc1:"images/brand/29",imgsrc2:"images/brand/30"},
				{id:16,href1:"#",href2:"#",info1:"日本",info2:"实用的家居收纳用品",imgsrc1:"images/brand/31",imgsrc2:"images/brand/32"},
				{id:17,href1:"#",href2:"#",info1:"日本",info2:"简美.温暖日系餐具",imgsrc1:"images/brand/33",imgsrc2:"images/brand/34"},
				{id:18,href1:"#",href2:"#",info1:"中国",info2:"高品质与设计感兼具的家纺品牌",imgsrc1:"images/brand/35",imgsrc2:"images/brand/36"},
				{id:19,href1:"#",href2:"#",info1:"韩国",info2:"韩国宠物界家喻户晓宠物用品",imgsrc1:"images/brand/37",imgsrc2:"images/brand/38"},
				{id:20,href1:"#",href2:"#",info1:"美国",info2:"世界领先的3D立体铝箔气球",imgsrc1:"images/brand/39",imgsrc2:"images/brand/40"},
				{id:21,href1:"#",href2:"#",info1:"新加坡",info2:"世界顶级品牌悦椿SPA专用",imgsrc1:"images/brand/41",imgsrc2:"images/brand/42"},
				{id:22,href1:"#",href2:"#",info1:"日本",info2:"实用富有趣味",imgsrc1:"images/brand/43.jpg",imgsrc2:"images/brand/44.jpg"},
				{id:23,href1:"#",href2:"#",info1:"澳大利亚",info2:"古医药智慧与现代科研的结晶",imgsrc1:"images/brand/45.jpg",imgsrc2:"images/brand/46.jpg"},
				{id:24,href1:"#",href2:"#",info1:"美国",info2:"6000万美国家庭选择的小苏打品牌",imgsrc1:"images/brand/47",imgsrc2:"images/brand/48"},
				{id:25,href1:"#",href2:"#",info1:"意大利",info2:"世界知名奢侈品牌",imgsrc1:"images/brand/49.jpg",imgsrc2:"images/brand/50.jpg"},
				{id:26,href1:"#",href2:"#",info1:"日本",info2:"畅销日本的生活家电品牌",imgsrc1:"images/brand/51",imgsrc2:"images/brand/52"},
				{id:27,href1:"#",href2:"#",info1:"中国台湾",info2:"为你打造时尚简易家居生活",imgsrc1:"images/brand/53",imgsrc2:"images/brand/54"},
				{id:28,href1:"#",href2:"#",info1:"日本",info2:"采用法国专利除臭除菌技术",imgsrc1:"images/brand/55.jpg",imgsrc2:"images/brand/56.jpg"},
				{id:29,href1:"#",href2:"#",info1:"日本",info2:"备受日本主妇推崇的日用品牌",imgsrc1:"images/brand/57",imgsrc2:"images/brand/58"},
				{id:30,href1:"#",href2:"#",info1:"日本",info2:"让你会心一笑的贴心小物",imgsrc1:"images/brand/59",imgsrc2:"images/brand/60"},
				{id:31,href1:"#",href2:"#",info1:"韩国",info2:"韩国敏感肌肤护理专业品牌",imgsrc1:"images/brand/61",imgsrc2:"images/brand/62"},
				{id:32,href1:"#",href2:"#",info1:"美国",info2:"全球10大好用的洗发水之一",imgsrc1:"images/brand/63",imgsrc2:"images/brand/64"},
				{id:33,href1:"#",href2:"#",info1:"美国",info2:"美国有机个人护理品牌",imgsrc1:"images/brand/65",imgsrc2:"images/brand/66"},
				{id:34,href1:"#",href2:"#",info1:"法国",info2:"敏感肌肤活泉水疗",imgsrc1:"images/brand/67",imgsrc2:"images/brand/68"},
				{id:35,href1:"#",href2:"#",info1:"日本",info2:"健康修复 自然美肌 青春朝气",imgsrc1:"images/brand/69",imgsrc2:"images/brand/70"},
				{id:14,href1:"#",href2:"#",info1:"德国",info2:"德国家居瓷器第一品牌",imgsrc1:"images/brand/71",imgsrc2:"images/brand/72"},
				{id:14,href1:"#",href2:"#",info1:"日本",info2:"世界上第一双无缝丝袜的开拓者",imgsrc1:"images/brand/73.jpg",imgsrc2:"images/brand/74.jpg"},
				{id:14,href1:"#",href2:"#",info1:"日本",info2:"化妆棉界的老大",imgsrc1:"images/brand/75",imgsrc2:"images/brand/76"},
				{id:14,href1:"#",href2:"#",info1:"日本",info2:"日本认知度第一名的官方萌物",imgsrc1:"images/brand/77",imgsrc2:"images/brand/78"}
			],
		data3:[
				{id:1,href1:"#",href2:"#",info1:"美国",info2:"纯天然儿童专用清洁用品",imgsrc1:"images/brand/b1",imgsrc2:"images/brand/b2"},
				{id:2,href1:"#",href2:"#",info1:"法国",info2:"来自法国最时尚的育儿方式",imgsrc1:"images/brand/b3",imgsrc2:"images/brand/b4"},
				{id:3,href1:"#",href2:"#",info1:"荷兰",info2:"让宝宝一觉睡到天亮",imgsrc1:"images/brand/b5",imgsrc2:"images/brand/b6"},
				{id:4,href1:"#",href2:"#",info1:"美国",info2:"有机保养品牌",imgsrc1:"images/brand/b7",imgsrc2:"images/brand/b8"},
				{id:5,href1:"#",href2:"#",info1:"美国",info2:"纽约“背心”环保袋",imgsrc1:"images/brand/b9",imgsrc2:"images/brand/b10"},
				{id:6,href1:"#",href2:"#",info1:"英国",info2:"东西方结合的灵动画作",imgsrc1:"images/brand/b11",imgsrc2:"images/brand/b12.jpg"},
				{id:7,href1:"#",href2:"#",info1:"日本",info2:"高科技日化产品制造专家",imgsrc1:"images/brand/b13",imgsrc2:"images/brand/b14"},
				{id:8,href1:"#",href2:"#",info1:"日本",info2:"美味、创新健康品牌",imgsrc1:"images/brand/b15.jpg",imgsrc2:"images/brand/b16.jpg"},
				{id:9,href1:"#",href2:"#",info1:"德国",info2:"享誉德国的亲民专业护理品牌",imgsrc1:"images/brand/b17.jpg",imgsrc2:"images/brand/b18"},
				{id:10,href1:"#",href2:"#",info1:"中国",info2:"重新定义防晒美学",imgsrc1:"images/brand/b19",imgsrc2:"images/brand/b20"},
				{id:11,href1:"#",href2:"#",info1:"韩国",info2:"韩国超高人气的时尚护肤品牌",imgsrc1:"images/brand/b21",imgsrc2:"images/brand/b22"},
				{id:12,href1:"#",href2:"#",info1:"新加坡",info2:"全球顶尖香薰SPA专用",imgsrc1:"images/brand/b23",imgsrc2:"images/brand/b24"},
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