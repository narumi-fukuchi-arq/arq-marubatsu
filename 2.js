var count = 0;

function clickA(a) {
    if (a.innerText != "") {
        alert("そこは選べないよ！");
        return;
    }

    var mark;
    if (count % 2 === 0) {
        mark = "〇"
    } else {
        mark = "✕"
    }

    a.innerText = mark;
    count++;

    var ret = judge();
    if (ret) {
        alert(ret);
    }
}

function judge() {
    var c0 = document.getElementById("C0").innerText;
    var c1 = document.getElementById("C1").innerText;
    var c2 = document.getElementById("C2").innerText;
    var c3 = document.getElementById("C3").innerText;
    var c4 = document.getElementById("C4").innerText;
    var c5 = document.getElementById("C5").innerText;
    var c6 = document.getElementById("C6").innerText;
    var c7 = document.getElementById("C7").innerText;
    var c8 = document.getElementById("C8").innerText;

    winer = null;
    if (c0 == c1 && c1 == c2 && c0 != "") {
        winer = c0;
    } else if (c3 == c4 && c4 == c5 && c3 != "") {
        winer = c3;
    } else if (c6 == c7 && c7 == c8 && c6 != "") {
        winer = c6;
    } else if (c0 == c3 && c3 == c6 && c0 != "") {
        winer = c0;
    } else if (c1 == c4 && c4 == c7 && c1 != "") {
        winer = c1;
    } else if (c2 == c5 && c5 == c8 && c2 != "") {
        winer = c2;
    } else if (c0 == c4 && c4 == c8 && c0 != "") {
        winer = c0;
    } else if (c2 == c4 && c4 == c6 && c2 != "") {
        winer = c2;
    }
    var str;
    if (winer) {
        str = winer + "の勝ち！";
    } else if (count == 9) {
        str = "引分け！";
    } else {
        str = null;
    }
    return str;;
}
