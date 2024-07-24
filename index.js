

let Days = ["Sunday","Monday","Tuesday","Wednesday","Thurday","friday","Saturday"];
let Months= ["January","February","March","April","May","June","July","August",
            "September","November","December"];
    

setInterval(function(){
    
    let a = new Date();
    document.getElementById("hr").innerHTML = a.getHours();
    document.getElementById("min").innerHTML = a.getMinutes();
    document.getElementById("sec").innerHTML = a.getSeconds();
    let second = a.getSeconds();
    if(second<10){
        document.getElementById("sec").innerHTML ="0" + a.getSeconds(); 
    }
    document.getElementById("ddy").innerHTML = ` ${Days[a.getDay()]} , ${a.getDate()} ${Months[a.getMonth()]}  ${a.getFullYear()}`; 
},1000)



