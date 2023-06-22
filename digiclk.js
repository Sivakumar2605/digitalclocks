function digiclk()
{
    var date= new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getUTCFullYear();
    var day=date.getDay();
    var am_pm="AM"
    if(hh>=12){
        am_pm="PM";
        if(hh>12){
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12
    }
    if(mo==0){
        mo="Jan"
    }
    else if (mo==1){
        mo="Feb"
    }
    else if (mo==2){
        mo="Mar"
    }
    else if (mo==3){
        mo="Apr"
    }
    else if (mo==4){
        mo="May"
    }
    else if (mo==5){
        mo="Jun"
    }
    else if (mo==6){
        mo="July"
    }
    else if (mo==7){
        mo="Aug"
    }
    else if (mo==8){
        mo="Sep"
    }
    else if (mo==9){
        mo="Oct"
    }
    else if (mo==10){
        mo="Nov"
    }
    else{
        mo="Dec"
    }
    switch(day)
    {
        case 0: day="SUNDAY"
        document.body.style.backgroundImage="url(./sun.jpg)"
        break;
        case 1: day="MONDAY"
        document.body.style.backgroundImage="url(./mon.jpg)"
        break;
        case 2: day="TUESDAY"
        document.body.style.backgroundImage="url(./tue.jpg)"
        break;
        case 3: day="WEDNESDAY"
        document.body.style.backgroundImage="url(./wed.jpg)"
        break;
        case 4: day="THURSDAY"
        document.body.style.backgroundImage="url(./thu.jpg)"
        break;
        case 5: day="FRIDAY"
        document.body.style.backgroundImage="url(./fri.jpg)"
        break;
        case 6: day="SATURDAY"
        document.body.style.backgroundImage="url(./sat.jpg)"
        break;
    }
    document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`;
    document.getElementById("time").innerHTML=`${hh}:${mm}:${am_pm}`;
    document.getElementById("day").innerHTML=day;
    document.getElementById("sec").innerHTML=ss;

    setTimeout(digiclk,1000)

}
digiclk()