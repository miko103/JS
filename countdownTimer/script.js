const inputField = document.getElementById("timeInput");
const submit = document.getElementById("sumbitButton");
const time = document.getElementById("currentTime");
var myCoolInterval;


function buttonHandler(){
    let currentTime = inputField.value
    let times = currentTime.split(":")
    //perform first checks to all the time values
    for(let i = 0; i < times.length; i++){
        if (times[i].length != 2){
            console.log("invalid length")
            break;
        }
        if (times[i] > 60){
            console.log(times[i].concat(" ", "is an invalid time number"))
            break;
        } 
    }
    //sets times to the actual content on the webpage
    time.innerHTML = times[0].concat(":", times[1]).concat(":",times[2])
    console.log(times[0].concat(":", times[1]).concat(":",times[2]))
}

function startCountdown(){
    if (!myCoolInterval){
        myCoolInterval = setInterval(decreaseTime, 1000);
        console.log(`interval ${myCoolInterval} set`)
    }
}

function decreaseTime(){
    let times = time.innerHTML.split(":")
    let now = new Date()
    let currentTime = new Date(now.getFullYear(),now.getMonth(),now.getDate(),...times)
    let newcurrentTime = new Date(currentTime - 1000)
    time.innerHTML = `${newcurrentTime.getHours()}:${newcurrentTime.getMinutes()}:${newcurrentTime.getSeconds()}`
    console.log("time decreased")
}

function pauseCountdown(myCoolInterval){
    clearInterval(myCoolInterval);
    console.log(`interval ${myCoolInterval} cleared`)
    //myCoolInterval = null;
    console.log(myCoolInterval)
}

document.getElementById("start").addEventListener("click", startCountdown);
document.getElementById("pause").addEventListener("click", pauseCountdown);