function time(){
    let clock=new Date();
    let hours=clock.getHours();
    let minutes=clock.getMinutes();
    let seconds=clock.getSeconds();

    if(hours<10)
        hours="0"+hours;
    if(minutes<10)
        minutes="0"+minutes;
    if(seconds<10)
        seconds="0"+seconds;

    document.getElementById("hrs").innerHTML=hours+" : ";
    document.getElementById("min").innerHTML=minutes+" : ";
    document.getElementById("sec").innerHTML=seconds;
}

setInterval(time,1000);
