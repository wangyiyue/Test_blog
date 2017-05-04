/*
 *判断是否为一个正整数 
 */
function isPositiveNum(s){//是否为正整数 
    var re = /^[0-9]*[1-9][0-9]*$/ ; 
    return re.test(s) 
} 
//检查
function check(num,cls){
    if(!num || num<=0){
        //showMsgbtn("输入正确的正整数");           
        return 0;
    }
    if(isNaN(num)){
        //showMsgbtn("输入正确的正整数");       
        return 0;
    }
    if(!isPositiveNum(num)){
        //showMsgbtn("输入正确的正整数");       
        return 0;
    }
    return true;
}
/* 正则验证式函数 */
function validate(telmsg){
  var reg = /^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}(-\d{3,4})?$|^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/gi;
  return telmsg.match(reg); 
}
function validatezipcode(zipcode){
  var reg = /^[0-9]{6}$/gi;
  return zipcode.match(reg);
}
