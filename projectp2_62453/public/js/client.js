var socket = io('http://192.168.55.55:3000');

var min1 = document.getElementById("min1");
var sec1 = document.getElementById("sec1");
var img1 = document.getElementById("img1");
var lbl1 = document.getElementById("lbl1");
var min2 = document.getElementById("min2");
var sec2 = document.getElementById("sec2");
var img2 = document.getElementById("img2");
var lbl2 = document.getElementById("lbl2");
var min3 = document.getElementById("min3");
var sec3 = document.getElementById("sec3");
var img3 = document.getElementById("img3");
var lbl3 = document.getElementById("lbl3");
var min4 = document.getElementById("min4");
var sec4 = document.getElementById("sec4");
var img4 = document.getElementById("img4");
var lbl4 = document.getElementById("lbl4");
var min5 = document.getElementById("min5");
var sec5 = document.getElementById("sec5");
var img5 = document.getElementById("img5");
var lbl5 = document.getElementById("lbl5");
var min6 = document.getElementById("min6");
var sec6 = document.getElementById("sec6");
var img6 = document.getElementById("img6");
var lbl6 = document.getElementById("lbl6");
var min7 = document.getElementById("min7");
var sec7 = document.getElementById("sec7");
var img7 = document.getElementById("img7");
var lbl7 = document.getElementById("lbl7");
var min8 = document.getElementById("min8");
var sec8 = document.getElementById("sec8");
var img8 = document.getElementById("img8");
var lbl8 = document.getElementById("lbl8");
var c1, c2, c3, c4, c5, c6, c7, c8 = false;
// Function
function miliseconds(min, sec) {

    if (sec != 0 && min == 0)
        return ((min * 60 + sec) * 1000);
    else if (sec != 0 && min != 0)
        return (((min + sec) - (40 * min)) * 1000);
    else
        return ((min * 60 + sec) * 10);

}

function timeFormat(time) {
    if (time < 0)
        time = time * -1
    if (time < 10)
        return "0" + time
    else
        return time
}


var turn_led = (param) => {
    var led_obj = {
        id: param,
        time: "",
        state: true
    }
    switch (param) {
        case 0:
            if (!c1) {
                c1 = true;
                if (parseInt(min1.value) == 0 && parseInt(sec1.value) == 0) {
                    alert("Asigna numero para de encender");
                } else {
                    img1.src = "./images/on.png"
                    led_obj.time = timeFormat(min1.value) + ":" + timeFormat(sec1.value)
                    var timeParts = led_obj.time.split(":");
                    led_obj.time = miliseconds(timeParts[0], timeParts[1]);
                    socket.emit('prender', led_obj);
                }
            }
            break;
        case 1:
            if (!c2) {
                c2 = true;
                if (parseInt(min2.value) == 0 && parseInt(sec2.value) == 0) {
                    alert("Asigna numero para de encender");
                } else {
                    img2.src = "./images/on.png"
                    led_obj.time = timeFormat(min2.value) + ":" + timeFormat(sec2.value)
                    var timeParts = led_obj.time.split(":");
                    led_obj.time = miliseconds(timeParts[0], timeParts[1]);
                    socket.emit('prender', led_obj);
                }
            }
            break;
        case 2:
            if (c3) {
                c3 = true;
                if (parseInt(min3.value) == 0 && parseInt(sec3.value) == 0) {
                    alert("Asigna numero para de encender");
                } else {
                    img3.src = "./images/on.png"
                    led_obj.time = timeFormat(min3.value) + ":" + timeFormat(sec3.value)
                    var timeParts = led_obj.time.split(":");
                    led_obj.time = miliseconds(timeParts[0], timeParts[1]);
                    socket.emit('prender', led_obj);
                }
            }
            break;
        case 3:
            if (!c4) {
                c4 = true;
                if (parseInt(min4.value) == 0 && parseInt(sec4.value) == 0) {
                    alert("Asigna numero para de encender");
                } else {
                    img4.src = "./images/on.png"
                    led_obj.time = timeFormat(min4.value) + ":" + timeFormat(sec4.value)
                    var timeParts = led_obj.time.split(":");
                    led_obj.time = miliseconds(timeParts[0], timeParts[1]);
                    socket.emit('prender', led_obj);
                }
            }
            break;
        case 4:
            if (!c5) {
                c5 = true;
                if (parseInt(min5.value) == 0 && parseInt(sec5.value) == 0) {
                    alert("Asigna numero para de encender");
                } else {
                    img5.src = "./images/on.png"
                    led_obj.time = timeFormat(min5.value) + ":" + timeFormat(sec5.value)
                    var timeParts = led_obj.time.split(":");
                    led_obj.time = miliseconds(timeParts[0], timeParts[1]);
                    socket.emit('prender', led_obj);
                }
            }
            break;
        case 5:
            if (!c6) {
                c6 = true
                if (parseInt(min6.value) == 0 && parseInt(sec6.value) == 0) {
                    alert("Asigna numero para de encender");
                } else {
                    img6.src = "./images/on.png"
                    led_obj.time = timeFormat(min6.value) + ":" + timeFormat(sec6.value)
                    var timeParts = led_obj.time.split(":");
                    led_obj.time = miliseconds(timeParts[0], timeParts[1]);
                    socket.emit('prender', led_obj);
                }
            }
            break;
        case 6:
            if (!c7) {
                c7 = true;
                if (parseInt(min7.value) == 0 && parseInt(sec7.value) == 0) {
                    alert("Asigna numero para de encender");
                } else {
                    img7.src = "./images/on.png"
                    led_obj.time = timeFormat(min7.value) + ":" + timeFormat(sec7.value)
                    var timeParts = led_obj.time.split(":");
                    led_obj.time = miliseconds(timeParts[0], timeParts[1]);
                    socket.emit('prender', led_obj);
                }
            }
            break;
        case 7:
            if (!c8) {
                c8 = true
                if (parseInt(min8.value) == 0 && parseInt(sec8.value) == 0) {
                    alert("Asigna numero para de encender");
                }
                else {
                    img8.src = "./images/on.png"
                    led_obj.time = timeFormat(min8.value) + ":" + timeFormat(sec8.value)
                    var timeParts = led_obj.time.split(":");
                    led_obj.time = miliseconds(timeParts[0], timeParts[1]);
                    socket.emit('prender', led_obj);
                }
            }
            break;
        default:
            break;
    }




}
var stop = (param) => {
    var led_obj = {
        id: param,
        state: false
    }
    switch (param) {
        case 0:
            sec1.value, min1.value = 0
            lbl1.innerHTML = "00:00:00";
            c1 = false;
            break;
        case 1:
            sec2.value, min2.value = 0
            lbl2.innerHTML = "00:00:00";
            c2 = false;
            break;
        case 2:
            sec3.value, min3.value = 0
            lbl3.innerHTML = "00:00:00";
            c3 = false;
            break;
        case 3:
            sec4.value, min4.value = 0
            lbl4.innerHTML = "00:00:00";
            c4 = false;
            break;
        case 4:
            sec5.value, min5.value = 0
            lbl5.innerHTML = "00:00:00";
            c5 = false;
            break;
        case 5:
            sec6.value, min6.value = 0
            lbl6.innerHTML = "00:00:00";
            c6 = false;
            break;
        case 6:
            sec7.value, min7.value = 0
            lbl7.innerHTML = "00:00:00";
            c7 = false;
            break;
        case 7:
            sec8.value, min8.value = 0
            lbl8.innerHTML = "00:00:00";
            c8 = false;
            break;
    }
    socket.emit('stop', led_obj);
}
var pause = (param) => {
    var led_obj = {
        id: param,
        state: false
    }
    switch (param) {
        case 0:
            sec1.value, min1.value = 0
            lbl1.innerHTML = "00:00:00";
            break;
        case 1:
            sec2.value, min2.value = 0
            lbl2.innerHTML = "00:00:00";
            break;
        case 2:
            sec3.value, min3.value = 0
            lbl3.innerHTML = "00:00:00";
            break;
        case 3:
            sec4.value, min4.value = 0
            lbl4.innerHTML = "00:00:00";
            break;
        case 4:
            sec5.value, min5.value = 0
            lbl5.innerHTML = "00:00:00";
            break;
        case 5:
            sec6.value, min6.value = 0
            break;
        case 6:
            sec7.value, min7.value = 0
            break;
        case 7:
            sec8.value, min8.value = 0
            break;
    }
    socket.emit('pause', led_obj);
}
var resume = (param) => {
    var led_obj = {
        id: param,
        state: false
    }
    socket.emit('resume', led_obj);
}
socket.on('restante', (data) => {
    switch (data.id) {
        case 0:
            img1.src = "./images/on.png";
            lbl1.innerHTML = data.time;
            c1 = true;
            break;
        case 1:
            img2.src = "./images/on.png";
            lbl2.innerHTML = data.time;
            c2 = true;
            cbreak;
        case 2:
            img3.src = "./images/on.png";
            lbl3.innerHTML = data.time;
            c3 = true;
            break;
        case 3:
            img4.src = "./images/on.png";
            lbl4.innerHTML = data.time;
            c4 = true;
            break;
        case 4:
            img5.src = "./images/on.png";
            lbl5.innerHTML = data.time;
            c5 = true;
            break;
        case 5:
            img6.src = "./images/on.png";
            lbl6.innerHTML = data.time;
            c6 = true;
            break;
        case 6:
            img7.src = "./images/on.png";
            lbl7.innerHTML = data.time;
            c7 = true;
            break;
        case 7:
            img8.src = "./images/on.png";
            lbl8.innerHTML = data.time;
            c8 = true;
            break;
    }
});
socket.on('termino', (data) => {
    switch (data) {
        case 0:
            img1.src = "./images/off.png";
            c1 = false;
            break;
        case 1:
            img2.src = "./images/off.png";
            c2 = false;
            break;
        case 2:
            img3.src = "./images/off.png";
            c3 = false;
            break;
        case 3:
            img4.src = "./images/off.png";
            c4 = false;
            break;
        case 4:
            img5.src = "./images/off.png";
            c5 = false;
            break;
        case 5:
            img6.src = "./images/off.png";
            c6 = false;
            break;
        case 6:
            img7.src = "./images/off.png";
            c7 = false;
            break;
        case 7:
            img8.src = "./images/off.png";
            c8 = false;
            break;

    }
});
