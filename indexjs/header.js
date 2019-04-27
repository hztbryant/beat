// var li1 = document.querySelector(".nav ul li:nth-child(1) .ul-div1");


// var ceshi = document.querySelector(".ceshi");
// var ceshi3 = document.querySelector(".ceshi3");

// var icon1 = document.querySelector(".nav ul li a strong");
// var icon2 = document.querySelector("#icon2");
// var header=document.querySelector(".header")
//头戴式耳机
  $(".ceshi").hide();
  $(".ul-div1-1").click(function () {
      $(".ceshi").slideUp(500);
    }).click(function () {
    $(".ceshi").slideDown(500);
  });
 
$(".ceshi3").mouseenter(function () {
  $(".ceshi").fadeOut(500);
  })
    //扬声器
// var li3 = document.querySelector(".nav ul li:nth-child(3) a");
// var line = document.querySelector(".line");

// li3.onmouseenter = function() {
//     line.style.display = "block";
// };
// li3.onmouseleave = function() {
//     line.style.display = "none";
// };

// //支持
// var li4 = document.querySelector(".nav ul li:nth-child(4) a");
// var line2 = document.querySelector(".line2");
// li4.onmouseenter = function() {
//     line2.style.display = "block";
// };
// li4.onmouseleave = function() {
//     line2.style.display = "none";
// };


//第一个弹出层的第一个大图
// var ceshi22 = document.querySelector(".ceshi2-2");
// var screenbox1 = document.querySelector(".ceshi2-2-in-screen");
// var ceshi22img = document.querySelector(".ceshi2-2-in-img img");
// ceshi22.onmouseenter = function() {
//     screenbox1.style.display = "block";
//     animate(screenbox1, { "opacity": 1 });
//     ceshi22img.style.transform = "scale("+1.08+")";
// };
// ceshi22.onmouseleave = function() {
//     screenbox1.style.display = "none";
//     animate(screenbox1, { "opacity": 0 });
//     ceshi22img.style.transform = "scale("+1.1+")";
// };

//  第一个弹出层文字动画





$(".test").hide();
  $(".ul-div2-1").mouseenter(function (e) {
    e.stopPropagation();
    
      $(".test").slideUp(500);
    }).mouseleave(function () {
    $(".test").slideDown(500);
  });
 
$(".test3").mouseenter(function () {
  $(".test").fadeOut(500);
  })
  // var li2 = document.querySelector(".nav ul li:nth-child(2) .ul-div2");
  // var test = document.querySelector(".test");
// 第二个页面
// li2.onmouseover = function() {
//     icon2.style.transform = "rotateX(" + 180 + "deg)";
//     icon2.style.color = "red";
//     test.style.display = "block";
//     animate(test, { "opacity": 1 });
//     menubck.style.display = "none";
//     animate(menubck, { "opacity": 0 });
// };
// var test3 = document.querySelector(".test3");
// test3.onmouseenter = function() {

//     animate(test, { "opacity": 0 });
//     test.style.display = "none";
// }
// li2.onmouseout = function() {
//     icon2.style.transform = "rotateX(" + 0 + "deg)";
//     icon2.style.color = "";
//     test.style.display = "none";
//     animate(test, { "opacity": 0 });
// };



    //第二个页面大图动画
// var test22 = document.querySelector(".test2-2");
// var screenbox2 = document.querySelector(".test2-2-in-screen");
// var test22img = document.querySelector(".test2-2-in-img img");
// test22.onmouseenter = function() {
//     screenbox2.style.display = "block";
//     animate(screenbox2, { "opacity": 1 });
//     test22img.style.transform = "scale("+1.08+")";;
// };
// test22.onmouseleave = function() {
//     screenbox2.style.display = "none";
//     animate(screenbox2, { "opacity": 0 });
//     test22img.style.transform = "scale("+1.1+")";;
// };


// //第三个页面菜单显示页面
// var menubck = document.querySelector(".menu-bck");
// var menua = document.querySelector(".menu a");
// menua.onclick = function() {
//     if (menubck.style.display == "none") {
//         menubck.style.display = "block";
//         animate(menubck, { "opacity": 1 });
//         this.innerHTML="";
//         document.onmousewheel = function() { return false; };
//     } else {
//         menubck.style.display = "none";
//         animate(menubck, { "opacity": 0 });
//         this.innerHTML="";
//         document.onmousewheel = function() { return true; };
//     }

// }

// window.onscroll=function () {
        
//     if(getScroll().top>0){
//         animate(ceshi, { "opacity": 0 });
//         ceshi.style.display = "none";
//         // fadeOut(ceshi,800);
//         test.style.display = "none";
//         animate(test, { "opacity": 0 });
//         // fadeOut(test,800);
//         menubck.style.display = "none";
//         animate(menubck, { "opacity": 0 });
//         navul.style.display="block";
//         ipt.style.display="none";
//         animate(ipt,{"opacity":0})
//         // fadeOut(menubck,800);
//     }
//     if(getScroll().top>=70){
//         header.style.display="none";
//         animate(header,{"opacity":0});
        
//     }else{
        
//         header.style.display="block";
//         animate(header,{"opacity":1});
//     }
//   };


// //新头部js
// var barmenu=document.querySelector(".bar-menu  span");
// var tain=document.querySelector(".tain");
// var sscreen=document.querySelector(".s-screen")
// barmenu.onclick=function () {
//     if(tain.style.display==""||tain.style.display=="block"){
//         tain.style.display="none";
//         sscreen.style.display="block";
//         animate(sscreen,{"opacity":1});
//     }else{
//         tain.style.display="block";
//         sscreen.style.display="none";
//         animate(sscreen,{"opacity":0});
//     }
//   }

// // 头部菜单弹出页第一个图
// var a1=document.querySelector(".a-1");
// var ul12=document.querySelector(".ul-12");
// var B1=document.querySelector(".B1");
// a1.onclick=function () {
//     // ul12.style.display="block";
//     if(ul12.style.display=="none"){
//         ul12.style.display="block";
//         animate(ul12,{"opacity":1});
//         B1.style.transform="rotateX("+180+"deg)";
        
//     }else{
//         ul12.style.display="none";
//         animate(ul12,{"opacity":0});
//         B1.style.transform="rotatex("+0+"deg)";
       
//     }
//   }
//   var a12=document.querySelector(".a-12");
//   var ul123=document.querySelector(".ul-123");
//   var li2ul=document.querySelector(".li2-ul");
//   var B2=document.querySelector(".B2");

//   a12.onclick=function () {
//     // ul12.style.display="block";
//     if(ul123.style.display=="none"){
//         ul123.style.display="block";
//         animate(ul123,{"opacity":1});
//         B2.style.transform="rotateX("+180+"deg)";
        
//     }else{
//         ul123.style.display="none";
//         animate(ul123,{"opacity":0});
//         B2.style.transform="rotateX("+0+"deg)";
//     }
//   }
//   var li2a=document.querySelector(".li2-a .a-12");
//   var B3=document.querySelector(".B3");
//   li2a.onclick=function () {
//     // ul12.style.display="block";
//     if(li2ul.style.display=="none"){
//         li2ul.style.display="block";
//         animate(li2ul,{"opacity":1});
//         B3.style.transform="rotateX("+180+"deg)";
        
//     }else{
//         li2ul.style.display="none";
//         animate(li2ul,{"opacity":0});
//         B3.style.transform="rotateX("+0+"deg)";
       
//     }
//   }

//   //第三个
//   var a3=document.querySelector(".a-3");
//   var companyul=document.querySelector(".company-ul");
//   var B4=document.querySelector(".B4");
//   a3.onclick=function () {
//     // ul12.style.display="block";
//     if(companyul.style.display=="none"){
//         companyul.style.display="block";
//         animate(companyul,{"opacity":1});
//         B4.style.transform="rotateX("+180+"deg)";
        
//     }else{
//         companyul.style.display="none";
//         animate(companyul,{"opacity":0});
//         B4.style.transform="rotateX("+0+"deg)";
       
//     }
//   }




//   //头部搜索
//   var search=document.querySelector("#ha");
//   var navul=document.querySelector(".header .nav .nav-ul");
//   var ipt=document.querySelector(".nav .input");
// //   var input=document.querySelector(".input input");
//   search.onclick=function () {
    
//       if(ipt.style.display=="none"){
//         navul.style.display="none";
//         ipt.style.display="block";
//         animate(ipt,{"opacity":1});
//         my$("txt").value="";
//         my$("ipt").removeChild(my$("dv"));
//       }else{
//         navul.style.display="block";
//         ipt.style.display="none";
//         animate(ipt,{"opacity":0})
       
//       }
//     }


//   var keyWords = [
//       "陈圣君:现代'张子强'的穷途末路之旅",
//       "陈圣君的贴身校花", 
//       "陈圣君今日与普京进行亲切会谈",
//       "陈圣君之异世邪君",
//       "陈圣君最新专辑《爱我，你怕了吗》",
//       "陈圣儿子陈圣君君",
//       "韦子轩之重生韦小宝",
//       "韦子轩性感热舞", 
//       "韦子轩180",
//       "陈阿姨的老年生活",
//       "陈瑶瑶僻邪剑谱美照", 
//       "陈瑶瑶是如何从马航370逃生的",
//       "陈世美之死"];
  
//   my$("txt").onkeyup = function () {


//     //每一次的键盘抬起都判断页面中有没有这个div
//     if(my$("dv")){
//       //删除一次
//       my$("ipt").removeChild(my$("dv"));
//     }
//     //获取文本框输入的内容
//     var text = this.value;
//     //临时数组--空数组------->存放对应上的数据
//     var tempArr = [];
//     //把文本框输入的内容和数组中的每个数据对比
//     for (var i = 0; i < keyWords.length; i++) {
//       //是否是最开始出现的
//       if (keyWords[i].indexOf(text) == 0) {
//         tempArr.push(keyWords[i]);//追加
//       }
//     }
//     //如果文本框是空的,临时数组是空的,不用创建div
//     if (this.value.length == 0 || tempArr.length == 0) {
//       //如果页面中有这个div,删除这个div
//       if (my$("dv")) {
//         my$("box").removeChild(my$("dv"));
//       }
//       return;
//     }
//     //创建div,把div加入id为box的div中
//     var dvObj = document.createElement("div");
//     my$("ipt").appendChild(dvObj);
//     dvObj.id = "dv";
//     dvObj.style.width = "100%";
//     //dvObj.style.height="100px";//肯定是不需要的------
//     dvObj.style.backgroundColor = "black";
//     dvObj.style.position="absolute";
//     dvObj.style.color="#757575";
//     dvObj.style.fontSize="24px"
//     var w=my$("txt").offsetHeight+15;
//     dvObj.style.top=w+"px";
//     //循环遍历临时数组,创建对应的p标签
//     for (var i = 0; i < tempArr.length; i++) {  
//       //创建p标签
//       var pObj = document.createElement("p");
//       //把p加到div中
//       dvObj.appendChild(pObj);
//       setInnerText(pObj, tempArr[i]);
//       pObj.style.margin = 0;
//       pObj.style.paddingLeft ="10px";
//       pObj.style.cursor = "pointer";
//       pObj.style.marginTop = "5px";
//       //鼠标进入
//       pObj.onmouseover = function () {
//         this.style.backgroundColor = "#999898";
//         this.style.color="white";
//       };
//       //鼠标离开
//       pObj.onmouseout = function () {
//         this.style.backgroundColor = "";
//         this.style.color="#757575";
//       };
//     }


//   };


