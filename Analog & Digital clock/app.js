let hr=document.getElementById("hr")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let int=document.getElementById("int")
let btn=document.getElementById("d_clock")

setInterval(function(){

    let date=new Date();
    let hour=date.getHours()
    let minut=date.getMinutes()
    let second=date.getSeconds()


    let interval="AM"

    if(hour>12){
        interval="PM"
    }

    if(hour>12){
        hour=hour-12
    }

    hour=(hour<10)?"0"+hour:hour;
    minut=(minut<10)?"0"+minut:minut;
    second=(second<10)?"0"+second:second;


    hr.innerHTML=hour
    min.innerHTML=minut
    sec.innerHTML=second
    int.innerHTML=interval 



    let Hhour=30*hour+minut/6
    let Mminut=6*minut
    let Ssecond=6*second

    document.getElementById("line1").style.transform=`rotate(${Hhour}deg)`
    document.getElementById("line2").style.transform=`rotate(${Mminut}deg)`
    document.getElementById("line3").style.transform=`rotate(${Ssecond}deg)`

    },1000)

    btn.addEventListener("click",function(){
        document.getElementById("div-digital").classList.toggle("hidden-btn")
        document.querySelector(".h3-digi").classList.toggle("hidden-h3")
    })