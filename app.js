let horn=0
let min=0
let sec=0

let hrhead= document.getElementById("hr")
let minhead= document.getElementById("min")
let sechead= document.getElementById("sec")
let interval;

function Timmer() {
    sec++
    sechead.innerHTML=sec
    if(sec>100){
       
        min++
        minhead.innerHTML=min
        sec = 0
    }

        if(min>60){
            horn++
            hrhead.innerHTML=horn;
            min=0;
        }

            else if (horn>24) {
                
            }

        }
    

    



function paus() {
    clearInterval(interval)
}

function start() {
    interval=setInterval(Timmer,100)
}
function Resert() {
     horn=0
     min =0
     sec =0

     hrhead.innerHTML=horn 
    minhead.innerHTML=min  
    sechead.innerHTML=sec  
 paus() 
    
}