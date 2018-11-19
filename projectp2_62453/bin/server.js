var io = require('socket.io')();
var PythonShell = require('python-shell');
var Stopwatch = require('timer-stopwatch');
var TimeFormat = require('hh-mm-ss')
var t1, t2, t3, t4, t5, t6, t7, t8 = {}
var m1, m2, m3, m4, m5, m6, m7, m8 = 0;
var opt =
{
    scriptPath: __dirname + "/scripts/",
    args: []
}
io.sockets.on('connection', (socket) => {
    console.log("nuevo Cliente conectado con id: " + socket.id);
    socket.on('prender', (data) => {
        opt.args = [];
        opt.args.push(JSON.stringify(data));
        PythonShell.run("leds.py", opt, (err, res) => {
            opt.args = []
            if (err) {
                throw err;
            }
            else {
                console.log(res[0])
            }
        });
        switch (data.id) {
            case 0:
                t1 = new Stopwatch(Number(data.time));
                t1.start();
                t1.onDone(function () {
                    io.sockets.emit('termino', data.id);
                    opt.args = [];
                    id = data.id
                    data.state = false
                    opt.args.push(JSON.stringify(data));
                    PythonShell.run("leds.py", opt, (err, res) => {
                        opt.args = []
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log(res[0])
                        }
                    });
                });
                t1.onTime(function (ms) {
                    m1 = ms.ms;
                    io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(ms.ms) });
                });
                break;
            case 1:
                t2 = new Stopwatch(Number(data.time));
                t2.start();
                t2.onDone(function () {
                    io.sockets.emit('termino', data.id);
                    opt.args = [];
                    id = data.id
                    data.state = false
                    opt.args.push(JSON.stringify(data));
                    PythonShell.run("leds.py", opt, (err, res) => {
                        opt.args = []
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log(res[0])
                        }
                    });
                });
                t2.onTime(function (ms) {
                    m2 = ms.ms;
                    io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(ms.ms) });
                });
                break;
            case 2:
                t3 = new Stopwatch(Number(data.time));
                t3.start();
                t3.onDone(function () {
                    io.sockets.emit('termino', data.id);
                    opt.args = [];
                    id = data.id
                    data.state = false
                    opt.args.push(JSON.stringify(data));
                    PythonShell.run("leds.py", opt, (err, res) => {
                        opt.args = []
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log(res[0])
                        }
                    });
                });
                t3.onTime(function (ms) {
                    m3 = ms.ms;
                    io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(ms.ms) });
                });
                break;
            case 3:
                t4 = new Stopwatch(Number(data.time));
                t4.start();
                t4.onDone(function () {
                    io.sockets.emit('termino', data.id);
                    opt.args = [];
                    id = data.id
                    data.state = false
                    opt.args.push(JSON.stringify(data));
                    PythonShell.run("leds.py", opt, (err, res) => {
                        opt.args = []
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log(res[0])
                        }
                    });
                });
                t4.onTime(function (ms) {
                    m4 = ms.ms;
                    io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(ms.ms) });
                });
                break;
            case 4:
                t5 = new Stopwatch(Number(data.time));
                t5.start();
                t5.onDone(function () {
                    io.sockets.emit('termino', data.id);
                    opt.args = [];
                    id = data.id
                    data.state = false
                    opt.args.push(JSON.stringify(data));
                    PythonShell.run("leds.py", opt, (err, res) => {
                        opt.args = []
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log(res[0])
                        }
                    });
                });
                t5.onTime(function (ms) {
                    m5 = ms.ms;
                    io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(ms.ms) });
                });
                break;
            case 5:
                t6 = new Stopwatch(Number(data.time));
                t6.start();
                t6.onDone(function () {
                    io.sockets.emit('termino', data.id);
                    opt.args = [];
                    id = data.id
                    data.state = false
                    opt.args.push(JSON.stringify(data));
                    PythonShell.run("leds.py", opt, (err, res) => {
                        opt.args = []
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log(res[0])
                        }
                    });
                });
                t6.onTime(function (ms) {
                    m6 = ms.ms;
                    io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(ms.ms) });
                });
                break;
            case 6:
                t7 = new Stopwatch(Number(data.time));
                t7.start();
                t7.onDone(function () {
                    io.sockets.emit('termino', data.id);
                    opt.args = [];
                    id = data.id
                    data.state = false
                    opt.args.push(JSON.stringify(data));
                    PythonShell.run("leds.py", opt, (err, res) => {
                        opt.args = []
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log(res[0])
                        }
                    });
                });
                t7.onTime(function (ms) {
                    m7 = ms.ms;
                    io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(ms.ms) });
                });
                break;
            case 7:
                t8 = new Stopwatch(Number(data.time));
                t8.start();
                t8.onDone(function () {
                    io.sockets.emit('termino', data.id);
                    opt.args = [];
                    id = data.id
                    data.state = false
                    opt.args.push(JSON.stringify(data));
                    PythonShell.run("leds.py", opt, (err, res) => {
                        opt.args = []
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log(res[0])
                        }
                    });
                });
                t8.onTime(function (ms) {
                    m8 = ms.ms;
                    io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(ms.ms) });
                });
                break;
        }


    });
    socket.on('stop', (data) => {
        opt.args = [];
        opt.args.push(JSON.stringify(data));
        PythonShell.run("leds.py", opt, (err, res) => {
            opt.args = []
            if (err) {
                throw err;
            }
            else {
                console.log(res[0])
            }
        });
        switch (data.id) {
            case 0:
                t1.stop();
                break;
            case 1:
                t2.stop();
                break;
            case 2:
                t3.stop();
                break;
            case 3:
                t4.stop();
                break;
            case 4:
                t5.stop();
                break;
            case 5:
                t6.stop();
                break;
            case 6:
                t7.stop();
                break;
            case 7:
                t8.stop();
                break;
        }
        io.sockets.emit('restante', { id: data.id, time: TimeFormat.fromMs(0) });
        io.sockets.emit('termino', data.id);
    });
    socket.on('pause', (data) => {
        switch (data.id) {
            case 0:
                t1.stop();
                break;
            case 1:
                t2.stop();
                break;
            case 2:
                t3.stop();
                break;
            case 3:
                t4.stop();
                break;
            case 4:
                t5.stop();
                break;
            case 5:
                t6.stop();
                break;
            case 6:
                t7.stop();
                break;
            case 7:
                t8.stop();
                break;
        }
    });
    socket.on('resume', (data) => {
        switch (data.id) {
            case 0:
                t1.reset(m1);
                t1.start();
                break;
            case 1:
                t2.reset(m2);
                t2.start();
                break;
            case 2:
                t3.reset(m3);
                t3.start();
                break;
            case 3:
                t4.reset(m4);
                t4.start();
                break;
            case 4:
                t5.reset(m5);
                t5.start();
                break;
            case 5:
                t6.reset(m6);
                t6.start();
                break;
            case 6:
                t7.reset(m7);
                t7.start();
                break;
            case 7:
                t8.reset(m8);
                t8.start();
                break;
        }
    });
});

module.exports = io;
