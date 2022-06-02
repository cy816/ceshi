var list = document.getElementById('list'); //总
var are = document.getElementsByClassName('area')[0]; //区域块
var qu = document.getElementsByClassName('qu')[0] // 区域
var district = document.getElementsByClassName('district')[0]; //颜色
qu.onclick = function () {
    list.style.display = 'flex';
    district.style.color = '#ff8a00'
    are.style.display = 'flex';

    mon.style.display = 'none';
    ren.style.color = '#666666';
    hou.style.color = '#666666';
    hou_.style.display = 'none';
    mo.style.color = '#666666';
    dev.style.display = 'none';

}


var yue = document.getElementsByClassName('yue')[0]; // 月租
var ren = document.getElementsByClassName('rent')[0]; //颜色
var mon = document.getElementsByClassName('month')[0]; // 月租块
yue.onclick = function () {
    list.style.display = 'flex';
    ren.style.color = '#ff8a00'
    mon.style.display = 'block'

    district.style.color = '#666666'
    are.style.display = 'none';
    hou.style.color = '#666666';
    hou_.style.display = 'none';
    mo.style.color = '#666666';
    dev.style.display = 'none';
}


var hou = document.getElementsByClassName('house')[0]; // 颜色
var fang = document.getElementsByClassName('fang')[0]; // 房型
var hou_ = document.getElementsByClassName('house_type')[0]; // 块
fang.onclick = function () {
    list.style.display = 'flex';
    hou.style.color = '#ff8a00';
    hou_.style.display = 'flex';

    ren.style.color = '#666666'
    mon.style.display = 'none'
    district.style.color = '#666666'
    are.style.display = 'none';
    mo.style.color = '#666666';
    dev.style.display = 'none';

}
var duo = document.getElementsByClassName('duo')[0]; // 更多
var mo = document.getElementsByClassName('more')[0]; // 颜色
var dev = document.getElementsByClassName('dev')[0]; // 块
duo.onclick = function () {
    list.style.display = 'flex';
    mo.style.color = '#ff8a00';
    dev.style.display = 'none';
    district.style.color = '#666666'
    are.style.display = 'flex';
    mon.style.display = 'none';
    ren.style.color = '#666666';
    hou.style.color = '#666666';
    hou_.style.display = 'none';
}

district.onclick = function () {
    list.style.display = 'flex';
    district.style.color = '#ff8a00'
    are.style.display = 'flex';

    mon.style.display = 'none';
    ren.style.color = '#666666';
    hou.style.color = '#666666';
    hou_.style.display = 'none';
    mo.style.color = '#666666';
    dev.style.display = 'none'
}
ren.onclick = function () {
    list.style.display = 'flex';
    ren.style.color = '#ff8a00'
    mon.style.display = 'block'

    mo.style.color = '#666666';
    dev.style.display = 'none';
    district.style.color = '#666666'
    are.style.display = 'none';
    hou.style.color = '#666666';
    hou_.style.display = 'none';

}
hou.onclick = function () {
    list.style.display = 'flex';
    hou.style.color = '#ff8a00';
    hou_.style.display = 'flex';

    ren.style.color = '#666666'
    mon.style.display = 'none'
    district.style.color = '#666666'
    are.style.display = 'none';
    mo.style.color = '#666666';
    dev.style.display = 'none';
}
mo.onclick = function () {
    list.style.display = 'flex';
    mo.style.color = '#ff8a00';
    dev.style.display = 'block';

    district.style.color = '#666666'
    are.style.display = 'none';
    mon.style.display = 'none';
    ren.style.color = '#666666';
    hou.style.color = '#666666';
    hou_.style.display = 'none';
}
var li_2 = document.getElementsByClassName('list_')[0];
li_2.onclick = function () {
    are.style.display = 'none';
    mon.style.display = 'none';
    hou_.style.display = 'none';
    dev.style.display = 'none';
}