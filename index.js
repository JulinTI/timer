var sec = 00;
var min = 00;
var hr = 00;
var interval;

function start() {
    interval = setInterval(watch, 1000);

}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    sec = 00;
    min = 00;
    hr = 00;
    document.getElementById('watch').innerText = '00:00:00';
}



function watch() {
sec++
if (sec == 60) {
    min++;
    sec = 00;
}
if (min == 60) {
    hr++;
    min = 00;
}
var format = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
document.getElementById('watch').innerText = format;
}