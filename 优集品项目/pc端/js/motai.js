var login = {
	
    //注册登录部分
    //文本框获得和失去焦点的时候
	phone:function(){
		//当文本框获取焦点的时候，边框变色
        $("#phone_number").focus(function(){
        	$("#phone_number").css("border","1px solid black");
        }).blur(function(){
        	 login.checkUsercode(); 
        });
           
	     //当短信验证码获取焦点的时候
     	$("#mesg-code").focus(function(){
             //边框变色
            $("#mesg-code").css("border","1px solid black");
            login.checkUsercode(); 
   		});
        //点击注册协议的时候显示模态框
		$("#zhuce").click(function(){
			$("#motai").css("display","block");
	        $("#user").css("display","block");

	    });
	    //点击叉号的时候隐藏模态框
		$("#off").click(function(){
			$("#motai").css("display","none");
			 $("#user").css("display","none");
	   });
    },

    //校验电话号码
    checkUsercode:function(){
		   var usercode= $("#phone_number").val().trim();
		   if(usercode=="" && usercode.length == 0){
		     $("#txt").html("请输入正确的手机号");
		     $("#txt").css("display","block");
		     $("#spans").css("display","none"); 
		     return false;
		   }
		  var reg  =/^1[34578]\d{9}$/.test(usercode);
		  if(!reg){
		    $("#txt").html("请输入正确的手机号");
		    $("#txt").css("display","block");
		    $("#spans").css("display","none"); 
		     return false;
		  }
		    $("#txt").css("display","none"); 
		     $("#spans").css("display","block");      
		    return true;          
	},

    //获取验证码,判断手机号码输入正确以后,才能获取验证码
	countSeconds:function(){
		// var phone="13880207252";
		var cTime=time=60;
		function countdown(){
			    var seconds=time;
			    $("#yanzhen").text(seconds+"秒");
			    time--;
			    Timer=setTimeout(countdown,1000);
			    if(time<0){
			        clearTimeout(Timer);
			        $("#yanzhen").text("获取验证码");
			        time=cTime;
			    }
			}
		//login.countdown();
			$("#yanzhen").text("获取验证码");
		    $("#yanzhen").click(function(){
               
                if(!login.checkUsercode()){//判断手机号是否输入正确
                	return;
                } 
		        if(time!=cTime){
		            return false;
		        }
		        countdown();
		         
		       /* $.post("/registergetcode",{phone:phone},function(result){});  */  
		    });
	}
}