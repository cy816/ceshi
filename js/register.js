var inp = document.getElementsByTagName('input');
var but = document.getElementsByClassName('bunn')[0];
var yanzheng_ = document.getElementsByClassName('yz')[0];
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
yanzheng_.onclick = function () {
    yanzheng();
}

var arr = [];
function yanzheng() {
    clearInterval(timer)
    yanzheng_.onclick = null;
    var ax = 60;
    var timer = setInterval(function () {
        yanzheng_.innerHTML = ax + '秒后重试';
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
            yanzheng_.innerHTML = '重新发送';
            but.onclick = function () {
                yanzheng();
            }
        }
    }, 1000)
}
inp[1].oninput = function () {
    if (inp[1].value == arr) {
        // alert('输入正确');
    }
}
inp[1].onblur = function () {
    if (!inp[1].value == arr) {
        alert('验证码输入错误');
    }
}
var inp_4 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,8}$/;
inp[2].oninput = function () {
    if (inp_4.test(inp[2].value)) {
        // alert('输入正确');
    }
}
inp[2].onblur = function () {
    if (!inp_4.test(inp[2].value)) {
        alert('密码输入错误')
    }
}
but.onclick = function () {
    if (str.test(inp[0].value) && inp[1].value == arr && inp_4.test(inp[2].value)) {
        if (confirm('注册成功,是否自动登录---自动登录后将自动保存账号密码---')) {
            window.location.href = './myLogin.html';
        } else {
            window.location.href = './login.html';
        }
    }
}