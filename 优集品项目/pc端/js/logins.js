
var loginRes={

	//手机文本框获取和失去焦点的时候
	zhanghao:function(){
		var usercode= $("#zhanghao");
          usercode.focus(function(){
          usercode.css("border","1px solid black");
          });
         usercode.blur(function(){
          if( !loginRes.checkUsercode()){
            return;
          }
         
        });
    },

    //密码框获取和失去焦点的时候
    pwd:function(){
     var pwd=$("#pwd");
      pwd.focus(function(){
      pwd.css("border","1px solid black");
      });
      pwd.blur(function(){
        if(!loginRes.checkPwd()){
           return;
        }

       });
    },

   	//验证密码
    checkPwd:function (){
    	var pwd= $("#pwd").val();
	   	if(pwd==""|| pwd.length==0){
	      $("#str").html("请输入密码");
	      $("#str").css("display","block");
	      return false;//如果是否后面就不执行
        }     
         //密码至少6个字符,最多16个字符！
        var reg=/^[a-zA-Z0-9]{6,16}$/.test(pwd);
	   	if (!reg){//密码不符合规则，就要提示
	       $("#str").html("密码必须为6-16位数字或字母密码");
	       $("#str").css("display","block");
	       return false;
        } 
        $("#str").css("display","none");
        return true;
    },

    //验证用户名
    checkUsercode:function(){
   	   var usercode= $("#zhanghao").val().trim();
       if(usercode=="" && usercode.length == 0){
           $("#hao").html("账号不能为空");
           $("#hao").css("display","block");
           return false;
       }
      var reg  =/^1[34578]\d{9}$/.test(usercode);
      if(!reg){
	     $("#hao").html("账号输入不正确");
	     $("#hao").css("display","block");
	     return false;
       }
     $("#hao").css("display","none");       
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
               
                if(!loginRes.checkUsercode()){
                	return;
                } 
		        if(time!=cTime){
		            return false;
		        }
		        countdown();
		         
		       /* $.post("/registergetcode",{phone:phone},function(result){});  */  
		    });
	},
	//短信验证码获取和失去焦点的时候
    ma_msg:function(){
		var ma_msg= $("#ma_msg");
	        ma_msg.focus(function(){
	        ma_msg.css("border","1px solid black");
	       });
	   
	       ma_msg.blur(function(){
	       ma_msg.css("border","1px solid #ccc");
	       });
	}
}

