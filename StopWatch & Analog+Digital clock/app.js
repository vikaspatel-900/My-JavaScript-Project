let timer = document.getElementById("timer")
let time = document.getElementById("time")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let restart = document.getElementById("restart")
let myprogress = document.getElementById("myprogress")






//*******************************************************stopwatch******************************************************************** */


let hr = 0;
let min = 0;
let sec = 0;
let mytimer = false;


const startTimer = () => {
    if (mytimer == false) {
        mytimer = true;
        stopwatch()
    }
    start.classList.add("btn2")
    stop.classList.remove("btn2")
    myprogress.classList.add("progress")
}


const stopTimer = () => {
    if (mytimer == true) {
        mytimer = false
    }
    stop.classList.add("btn2")
    start.classList.remove("btn2")
}



const restartTimer = () => {
    mytimer = false;
    hr = 0;
    min = 0;
    sec = 0
    timer.innerHTML = "00:00:00"
    start.classList.remove("btn2")
    stop.classList.remove("btn2")
    myprogress.classList.remove("progress")
}


const stopwatch = () => {
    if (mytimer === true) {

        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);


        sec++;

        if (sec === 60) {
            min = min + 1
            sec = 0;
        }

        if (min === 60) {
            hr = hr + 1
            min = 0;
            sec = 0
        }

        if (sec < 10) {
            sec = "0" + sec
        }

        if (min < 10) {
            min = "0" + min
        }

        if (hr < 10) {
            hr = "0" + hr
        }


        timer.innerHTML = hr + ":" + min + ":" + sec

    }

    
}


setInterval(stopwatch, 1000)



start.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer)
restart.addEventListener("click", restartTimer)









//****************************************************************digital clock************************************************************* */

setInterval(function () {

    let date = new Date()
    let hour = date.getHours();
    let minut = date.getMinutes();
    let second = date.getSeconds();
    let interval = "AM"

    if (hour >= 12) {
        interval = "PM"
    }

    if (hour > 12) {
        hour = hour - 12
    }

    if (hour < 10) {
        hour = "0" + hour
    }

    if (minut < 10) {
        minut = "0" + minut
    }



    time.innerHTML = hour + ":" + minut + " " + interval




    //***************************************************************anolog-clock************************************************ */


    let Hhour = 30 * hour + minut / 6;
    let Mminut = 6 * minut;
    let Ssecond = 6 * second

    document.getElementById("line1").style.transform = `rotate(${Hhour}deg)`
    document.getElementById("line2").style.transform = `rotate(${Mminut}deg)`
    document.getElementById("line3").style.transform = `rotate(${Ssecond}deg)`



}, 1000)



let clock = document.getElementById("clock")
let parent_analog_clock = document.getElementById("parent-analog-clock")
let clock_inner = document.getElementById("clock_inner")



clock.addEventListener("click", function () {
    clock_inner.classList.toggle("myclock");
    parent_analog_clock.classList.toggle("anolog-block");
    document.getElementById("all-btn").classList.toggle("btn-hidden")
    time.classList.add("anolog-block")
})
