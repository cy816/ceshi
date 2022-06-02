var inp = document.getElementsByClassName('in');
var str = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
inp[0].oninput = function () {
    if (str.test(inp[0].value)) {

    }
}
inp[0].onblur = function () {
    if (!str.test(inp[0].value)) {
        alert('手机号输入错误');
    }
}
var btn = document.getElementsByClassName('span_')[0];
btn.onclick = function () {
    yanzheng();
}
var arr = [];
function yanzheng() {
    clearInterval(timer)
    btn.onclick = null;
    var ax = 60;
    var timer = setInterval(function () {
        btn.innerHTML = ax + '秒后重试';
        ax--;
        if (ax == 56) {
            for (var i = 0; i < 4; i++) {
                arr.push(Math.floor(Math.random() * 10));
            }
            arr = arr.join('');
            alert('验证码为：' + arr);
        }
        if (ax < 0) {
            clearInterval(timer);
            ax = 60;
            btn.innerHTML = '重新发送';
            btn.onclick = function () {
                yanzheng();
            }
        }
    }, 1000)
}
inp[1].oninput = function () {
    if (inp[1] == arr) {

    }
}
inp[1].onblur = function () {
    if (!inp[1] == arr) {
        alert('验证码输入错误')
    }
}
var bn_ = document.getElementsByClassName('bn')[0];
bn_.onclick = function () {
    if (str.test(inp[0].value) && inp[1] == arr) {
        window.location.href = './index.html';

    }
    console.log(str.test(inp[0].value));
    console.log(inp[1] == arr);
}