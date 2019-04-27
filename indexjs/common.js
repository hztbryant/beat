function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
}

function animate(element, json) {
    clearInterval(element.timeId); //清理定时器
    //定时器,返回的是定时器的id
    element.timeId = setInterval(function() {
        var flag = true; //默认,假设,全部到达目标
        //遍历json对象中的每个属性还有属性对应的目标值
        for (var attr in json) {
            //判断这个属性attr中是不是opacity
            if (attr == "opacity") {
                //获取元素的当前的透明度,当前的透明度放大100倍
                var current = getStyle(element, attr) * 100;
                //目标的透明度放大100倍
                var target = json[attr] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step; //移动后的值
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") { //判断这个属性attr中是不是zIndex
                //层级改变就是直接改变这个属性的值
                element.style[attr] = json[attr];
            } else {
                //普通的属性
                //获取元素这个属性的当前的值
                var current = parseInt(getStyle(element, attr));
                //当前的属性对应的目标值
                var target = json[attr];
                //移动的步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step; //移动后的值
                element.style[attr] = current + "px";
            }
            //是否到达目标
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            //清理定时器
            clearInterval(element.timeId);
            //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
        }
        //测试代码

    }, 30);
}


//淡入淡出动画
function fadeIn(el, time) {

    if (el.style.opacity === ""||el.style.opacity === 1) {

        el.style.opacity = 0;

    }

    if (el.style.display === "" || el.style.display === "none") {

        el.style.display = 'block';

    }



    var t = setInterval(function() {
        var num=true;
        if (el.style.opacity < 1) {
            flag=false;
            el.style.opacity = parseFloat(el.style.opacity) + 0.01;

        } else {
            num=true;
            clearInterval(t);

        }

    }, time / 100);

}

function fadeOut(el, time) {

    if (el.style.opacity === ""||el.style.opacity === 0) {

        el.style.opacity = 1;

    }

    if (el.style.display === "" || el.style.display === "none") {

        el.style.display = 'block';

    }



    var t = setInterval(function() {
        var num=true;
        if (el.style.opacity > 0) {
            var num=false;
            el.style.opacity = parseFloat(el.style.opacity) - 0.01;

        } else {
            var num=true;
            clearInterval(t);

            el.style.display = 'none'

        }

    }, time / 100);

}


//禁用鼠标滚动
// function disabledMouseWheel() {

//     if (document.addEventListener) {

//         document.addEventListener('DOMMouseScroll', scrollFunc, false);

//     } //W3C

//     window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome

// }

// function scrollFunc(evt) {

//     evt = evt || window.event;

//     if (evt.preventDefault) {

//         // Firefox

//         evt.preventDefault();

//         evt.stopPropagation();

//     } else {

//         // IE

//         evt.cancelBubble = true;

//         evt.returnValue = false;

//     }

//     return false;

// }

// window.onload = disabledMouseWheel;



function getScroll() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft||0,
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  }

  function my$(id) {
    return document.getElementById(id);
}
function setInnerText(element, text) {
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}
  