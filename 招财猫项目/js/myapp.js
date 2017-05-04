

var myApp = {
    //轮播图的js效果
    swiper:function(){
            var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false
        });
    },
    //首页百分比数据效果
    datas:function(){         
        $('.data3').each(function(index,el){
            var pro = $(this).attr('data-pro');
            var deg = pro*360/100;
            $(this).find('.bg').html(pro+"%");
            if(deg <= 180){
                $(this).find('.over50').hide();
                $(this).find('.inner').css({"clip":"rect(0 1.3rem 2.6rem 0)","transform":"rotate("+deg+"deg)"});
                $(this).find('.outer').css("clip","rect(0 2.6rem 2.6rem 1.3rem)");
            }else if(deg <= 360){
                $(this).find('.over50').show();
                $(this).find('.over50').css("clip","rect(0 2.6rem 2.6rem 1.3rem)");
                $(this).find('.inner').css({"clip":"rect(0 1.3rem 2.6rem 0)","transform":"rotate("+deg+"deg)"});
                $(this).find('.outer').css("clip","rect(0 1.3rem 2.6rem 0)");
            }
        })
    },
    //验证手机号码的js效果
    model:function(){
        $('#btn').click(function(e){
			e.preventDefault();
			var phone = $("#phone").val();
			var _phone = /^(13[0-9]|17[0-9]|14[57]|15([0-3]|[5-9])|18[0-9])\d{8}$/;
			if(!_phone.test(phone)){
				layer.open({
					type: 1,
					title: "",
					area: ["12rem", "6rem"],
					content: $('#menu'),
					btn:['确定'],
				});
			}
		})
        $('#phone').focus(function(){
            $(this).attr('placeholder','手机号是你登录的帐号');
        }).blur(function(){
            $(this).attr('placeholder','请输入手机号码');
        });
    },
    headdata:function(){
        //头部的js效果
            var flag = true;
            $('header i').click(function(e){
                $('.menu').show();  
                flag = !flag;
                e.stopPropagation();
            })
            $(document).click(function(){
                if(flag === false){
                    $('.menu').hide();
                    flag = !flag;
                }
            })      
    },
    prodata:function(){
        //我要投资的数据效果
        $('.content .percent').each(function(index,el){
            //获取自定义的属性，保存到一个变量里
            var pro = $(this).attr('data-pro');
            var deg = pro*360/100;
            //console.log(pro,deg);
            var txt = $(this).find('.bg').html(pro+"%");
            if(deg <= 180){
                //当文本设置的值是一半以内(就是小于等于180deg)，就让over50这个隐藏
                $(this).find('.over50').hide();
                //Inner只显示左边一半,旋转角度（默认顺时针，向右转）
                $(this).find('.inner').css({"clip":"rect(0 1.2rem 2.4rem 0)","transform":"rotate("+ deg + "deg)"});
                //oute只显示右边一半
                $(this).find('.outer').css("clip","rect(0 2.4rem 2.4rem 1.2rem)");
            }else if(deg <=360){
                //over50显示   只显示右边一半（表示整个度数中的180度）
                $(this).find('.over50').show;
                $(this).find('.over50').css("clip","rect(0 2.4rem 2.4rem 1.2rem)");
                //inner只显示左边一半旋转角度（默认顺时针，向右转）
                $(this).find('.inner').css({"clip":"rect(0 1.2rem 2.4rem 0)","transform":"rotate("+ deg + "deg)"});
                //outer只显示左边一半
                $(this).find('.outer').css("clip","rect(0 1.2rem 2.4rem 0)");
            }
        })
    },
    //详情页的进度条效果
    progress:function(){
        //根据设置box的自定义属性，获取data的自定义属性
        var pro_data = $('#box').attr('data-pro');
        //计算出 span#flag的宽度
        var left = $('#box').width()*pro_data/100 - $('#flag').width()/2;
        console.log(pro_data,left)        
        requestAnimationFrame(function(){
            //修改data中的宽度
            $('#data').css("width",pro_data + "%");
            //修改flag中的文字
            $('#flag').html(pro_data + "%");
            //设置flag的位置
            $('#flag').css("left",left);
        })  
    },
    //意见反馈页面的验证js效果
    opinion:function(){
        var tel_val = $('#tel').val();
        var phone = /^(13[0-9]|17[0-9]|14[57]|15([0-3]|[5-9])|18[0-9])\d{8}$/;
         $('#tel').blur(function(){
            if(tel_val == ""|| !phone.test(tel_val)){
                $('#_phone').show();
            }
         })
    }
}








