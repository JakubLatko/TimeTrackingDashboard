var dailyButton = document.getElementById("dailyButton")
var weeklyButton = document.getElementById("weeklyButton")
var monthlyButton = document.getElementById("monthlyButton")

var workMeter = document.getElementById("workMeter")
var workPrevious = document.getElementById("workPrevious")

var playMeter = document.getElementById("playMeter")
var playPrevious = document.getElementById("playPrevious")

var studykMeter = document.getElementById("studyMeter")
var studyPrevious = document.getElementById("studyPrevious")

var exercisekMeter = document.getElementById("exerciseMeter")
var exercisePrevious = document.getElementById("exercisePrevious")

var socialMeter = document.getElementById("socialMeter")
var socialPrevious = document.getElementById("socialPrevious")

var selfcareMeter = document.getElementById("selfcareMeter")
var selfcarePrevious = document.getElementById("selfcarePrevious")






dailyButton.addEventListener("click", ()=>{
    dailyButton.style.color = "white"
    weeklyButton.style.color = "hsl(236, 100%, 87%)"
    monthlyButton.style.color = "hsl(236, 100%, 87%)"
    workMeter.innerText = "5hrs"
    workPrevious.innerText = "Previous - 7hrs"
    playMeter.innerText = "1hr"
    playPrevious.innerText = "Previous - 2hrs"
    studyMeter.innerText = "0hrs"
    studyPrevious.innerText = "Previous - 1hr"
    exerciseMeter.innerText = "1hr"
    exercisePrevious.innerText = "Previous - 1hr"
    socialMeter.innerText = "1hr"
    socialPrevious.innerText = "Previous - 3hrs"
    selfcareMeter.innerText = "0hrs"
    selfcarePrevious.innerText = "Previous - 1hr"
})


weeklyButton.addEventListener("click", ()=>{
    dailyButton.style.color = "hsl(236, 100%, 87%)"
    weeklyButton.style.color = "white"
    monthlyButton.style.color = "hsl(236, 100%, 87%)"
    workMeter.innerText = "32hrs"
    workPrevious.innerText = "Previous - 36hrs"
    playMeter.innerText = "10hrs"
    playPrevious.innerText = "Previous - 8hrs"
    studyMeter.innerText = "4hrs"
    studyPrevious.innerText = "Previous - 7hrs"
    exerciseMeter.innerText = "4hrs"
    exercisePrevious.innerText = "Previous - 5hrs"
    socialMeter.innerText = "5hrs"
    socialPrevious.innerText = "Previous - 10hrs"
    selfcareMeter.innerText = "2hrs"
    selfcarePrevious.innerText = "Previous - 2hrs"
})


monthlyButton.addEventListener("click", ()=>{
    dailyButton.style.color = "hsl(236, 100%, 87%)"
    weeklyButton.style.color = "hsl(236, 100%, 87%)"
    monthlyButton.style.color = "white"
    workMeter.innerText = "103hrs"
    workPrevious.innerText = "Previous - 128hrs"
    playMeter.innerText = "23hrs"
    playPrevious.innerText = "Previous - 29hrs"
    studyMeter.innerText = "13hrs"
    studyPrevious.innerText = "Previous - 19hrs"
    exerciseMeter.innerText = "11hrs"
    exercisePrevious.innerText = "Previous - 18hrs"
    socialMeter.innerText = "21hrs"
    socialPrevious.innerText = "Previous - 23hrs"
    selfcareMeter.innerText = "7hrs"
    selfcarePrevious.innerText = "Previous - 11hrs"
})