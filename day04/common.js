function my$id(id) {
    return document.getElementById(id);
}

function my$class(cls) {
    return document.getElementsByClassName(cls)[0];
}

function setInnerText(obj, text) {
    if (obj.textContent != undefined) {
        obj.textContent = text;
    }
    else {
        obj.innerText = text;
    }
}

function getInnerText(obj) {
    if (obj.textContent != undefined) {
        return obj.textContent
    }
    return obj.innerText
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    }
    return getComputedStyle(obj, false)[attr]
}

//既可以获取元素属性，又可以设置元素属性
function css(obj, attr, value) {
    //获取元素属性
    if (arguments.length === 2) {
        return getStyle(obj, attr)
    }
    //设置元素的行内样式
    else if (arguments.length === 3) {
        obj.style[attr] = value;
    }
}


function formatDate(date) {
    if (!date instanceof Date) {
        return;
    }

    var year = date.getFullYear();
    var month = date.getMonth() + 1 + '';
    var d = date.getDate() + '';
    var hour = date.getHours() + '';
    var m = date.getMinutes() + '';
    var s = date.getSeconds() + '';

    //month.padStart(2,0)  当month字符串不满两位的时候，前面用0来填充直到满两位为止
    //"abc".padStart(10,'0')  --> "0000000abc"
    month = month.padStart(2, 0)
    d = d.padStart(2, 0)
    hour = hour.padStart(2, 0)
    m = m.padStart(2, 0)
    s = s.padStart(2, 0)

    return year + '-' + month + '-' + d + ' ' + hour + ':' + m + ':' + s;
}