





$(".data3").each(function(){
    //加的新属性，找到data-pro,他用来装百分比
    var pro=$(this).attr("data-pro");
    //根据百分比算出旋转的度数
    var deg=pro*360/100;
    //把百分比加到bg里面去
    //$(this).find(".bg").html(pro+"%");
    //$(this).find(".bg").css("background","url(images/lazy.png) no-repeat");
    if(deg<=180){
      $(this).find(".over50").hide();
       $(this).find(".inner").css({"clip":"rect(0 46px 99px 0px)","transform":"rotate("+deg+"deg)"});
      
      $(this).find(".outer").css({"clip":"rect(0 46px 99px 46px)"});
    }
        else if(deg<=360){
          $(this).find(".over50").show();
            $(this).find(".over50").css("clip","rect(0 99px 99px 46px)");
          $(this).find(".inner").css({"clip":"rect(0px 46px 99px 0px)","transform":"rotate("+deg+"deg)"});
          $(this).find(".outer").css("clip","rect(0px 46px 99px 0px)");

        }
 
  });

//展开部分

$("#offs").on("click",function(){
    $(".grow_top_off").slideDown(800);
    $(".grow_top_off").toggleClass("ons");

   if($('.grow_top_off').hasClass('ons')){
     $(this).html("收起");

   }else{
     $(".grow_top_off").slideUp(800);
    $(this).html("展开");
     
   }
    
});

$("#kai").on("click",function(){
  $(".txt").toggleClass("txts");
});


