let intervalId;
let num = 0;

document.getElementById('btn-start').addEventListener('click', function () {
    intervalId = setInterval(() => {
        ++num;
        document.getElementById('timer-value').innerText = num;
    }, 1000)

})

document.getElementById('btn-stop').addEventListener('click', function () {

    clearInterval(intervalId);

})

document.getElementById('btn-reset').addEventListener('click', function () {
    clearInterval(intervalId);
    num = 0;
    document.getElementById('timer-value').innerText = num;

})



