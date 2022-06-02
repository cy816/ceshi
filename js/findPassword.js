var inp = document.getElementsByTagName('input');
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
var btn = document.getElementsByClassName('bunn')[0];
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
inp[3].oninput = function () {
    if (inp[3].value == inp[2].value) {
        // alert('输入正确');
    }
}
inp[3].onblur = function () {
    if (!inp_4.test(inp[3].value)) {
        alert('密码输入不一致')
    }
}
var butt = document.getElementsByClassName('but')[0];
butt.onclick = function () {
    if (str.test(inp[0].value) && inp[1].value == arr && inp_4.test(inp[2].value) && inp[3].value == inp[2].value) {
        if (confirm('注册成功,是否自动登录---自动登录后将自动保存账号密码---')) {
            window.location.href = './myLogin.html';
            localStorage.setItem('auto', true);//是否自动登录
            localStorage.setItem('register', true);//是否已经登录
        } else {
            window.location.href = './login.html';
            localStorage.setItem('auto', true);//是否自动登录
            localStorage.setItem('register', true);//是否已经登录
        }
        localStorage.setItem('cellphone', inp[0].value);//手机号
        localStorage.setItem('password', inp[2].value);//密码
    } else {
        alert('请完成所有项目')
    }
}