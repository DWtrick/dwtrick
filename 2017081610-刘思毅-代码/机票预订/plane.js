i = 0;
p = 0;
m = 0;
c = 0;
t = 0;

function doit(e) {
    var checkboxs = document.getElementsByClassName("check");

    if (checkboxs[e].checked) {
        insertl(checkboxs[e]);
    } else {
        deletel(checkboxs[e]);
    }
}

function insertl(e) {
    var div = document.createElement("div");
    if (e == null) {
        var name = "";
        div.id = i;
        var str = "<h3 id=" + i + 100 + ">乘机人：" + name + "</h3><hr>购票类型：<select class='money' onchange='showMoney()'><option value='成人票'>成人票</option><option value='特价票'>特价票</option></select><br>&nbsp;&nbsp;&nbsp;&nbsp;姓名&nbsp;&nbsp;&nbsp;&nbsp;：<input type='text' value='" + name + "' onblur='change(" + i + ")' id=" + i + 99 + " class='notnull'> <br>证件类型：<select><option value=‘护照’>护照</option><option value=‘身份证’>身份证</option></select><br>证件号码：<input type='text' class='notnull'><button id=" + i + 98 + " onclick='deletel(this)'>删除</button><hr>";
        div.innerHTML = str;
        var parent = document.getElementById("ckxx");
        parent.appendChild(div);
        i++;
    } else {
        div.id = e.value;
        var name = e.value;
        var str = "<h3>乘机人：" + name + "</h3><hr>购票类型：<select class='money' onchange='showMoney()'><option value='成人票'>成人票</option><option value='特价票'>特价票</option></select><br>&nbsp;&nbsp;&nbsp;&nbsp;姓名&nbsp;&nbsp;&nbsp;&nbsp;：<input type='text' value=" + name + " readonly> <br>证件类型：<select><option value=‘护照’>护照</option><option value=‘身份证’>身份证</option></select><br>证件号码：<input type='text' onfocus='focus()' class='notnull' class='number'><hr>";
        div.innerHTML = str;
        var parent = e.parentNode.parentNode;
        parent.appendChild(div);
    }
    p++;
    m = +2000;
    showMoney();
}

function deletel(e) {
    if (e.innerHTML == "删除") {
        var div = e.parentNode;
    } else {
        var div = document.getElementById(e.value);
    }
    div.parentNode.removeChild(div);
    p--;
    showMoney();
}

function change(id) {
    document.getElementById("" + id + 100).innerHTML = "乘机人：" + document.getElementById("" + id + 99).value;
}

function showMoney() {
    var money = document.getElementsByClassName("money");
    var sum = 0;
    c = 0;
    t = 0;
    for (var i = 0; i < money.length; i++) {
        var index = money[i].selectedIndex;
        var type = money[i][index].value;
        console.log(type);
        if (type == "成人票") {
            sum += 2000;
            c++;
        } else {
            sum += 1000;
            t++;
        }
    }
    document.getElementById("pprice").innerHTML = p + "人" + sum + "元";
}

function next() {
    var flag = true;
    var e = document.getElementsByClassName("notnull");
    for (var i = 0; i < e.length; i++) {
        if (e[i].value == "" || e[i].value == "该信息不能为空！") {
            e[i].value = "该信息不能为空！";
            flag = false;
        }
    }
    var phone = document.getElementById("phone").value;
    if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
        alert("手机号码有误，请重填");
        flag = false;
    }

    if (flag) {
        alert("success");
    }
}

function titl() {
    document.getElementById("tit").title = c + "张成人票（" + c * 2000 + "元）" + t + "张特价票（" + t * 1000 + "元）";
}