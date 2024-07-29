const ex1 = document.querySelector(".ex1")
const ex2 = document.querySelector(".ex2")
const ex3 = document.querySelector(".ex3")
const ex4 = document.querySelector(".ex4")
const ex5 = document.querySelector(".ex5")
const ex6 = document.querySelector(".ex6")
const ex7 = document.querySelector(".ex7")
const ex8 = document.querySelector(".ex8")
const ex9 = document.querySelector(".ex9")
const ex10 = document.querySelector(".ex10")
const ex11 = document.querySelector(".ex11")
const ex12 = document.querySelector(".ex12")

const generateButton = document.querySelector(".generateButton")

const start = document.querySelector(".startTimerButton")
const time = document.querySelector(".countdown")

const alarmSound = new Audio("images/bell-sound.mp3")

let timer;

function startTimer() {
  let count = 30;
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(function() {
    count--;
    time.textContent = "00:" + (count < 10 ? '0' : '') + count;
    console.log(count);
    if (count === 0) {
      clearInterval(timer);
      alarmSound.play();
    }
  }, 1000);
}

start.addEventListener("click", function(){
  startTimer()
})

function generate(){
    let picker1;
    let picker2;
    let picker3;
    let picker4;
    let picker5;
    let picker6;
    let picker7;
    let picker8;
    let picker9;
    let picker10;
    let picker11;
    let picker12;

    function getRandomNumber(max){
        picker1 = Math.floor(Math.random() * max);
        picker2 = Math.floor(Math.random() * max);
        picker3 = Math.floor(Math.random() * max);
        picker4 = Math.floor(Math.random() * max);
        picker5 = Math.floor(Math.random() * max);
        picker6 = Math.floor(Math.random() * max);
        picker7 = Math.floor(Math.random() * max);
        picker8 = Math.floor(Math.random() * max);
        picker9 = Math.floor(Math.random() * max);
        picker10 = Math.floor(Math.random() * max);
        picker11 = Math.floor(Math.random() * max);
        picker12 = Math.floor(Math.random() * max);
    }
    getRandomNumber(3)
    if(picker1 == 0){
        ex1.textContent = "Push ups"
    } else if (picker1 == 1){
        ex1.textContent = "Diamond push ups"
    } else {
        ex1.textContent = "Decline push ups"
    }

    if(picker2 == 0){
        ex2.textContent = "Incline push ups"
    } else if (picker2 == 1){
        ex2.textContent = "Push ups"
    } else {
        ex2.textContent = "One-leg push ups"
    }

    if(picker3 == 0){
        ex3.textContent = "Bird-dog "
    } else if (picker2 == 1){
        ex3.textContent = "Superman"
    } else {
        ex3.textContent = "Cat-cow"
    }

    if(picker4 == 0){
        ex4.textContent = "Bird-dog"
    } else if (picker2 == 1){
        ex4.textContent = "Superman"
    } else {
        ex4.textContent = "Cat-cow"
    }

    if(picker5 == 0){
        ex5.textContent = "Triceps dips"
    } else if (picker2 == 1){
        ex5.textContent = "Plank taps"
    } else {
        ex5.textContent = "Superman with arm extension"
    }

    if(picker6 == 0){
        ex6.textContent = "Inchworm"
    } else if (picker2 == 1){
        ex6.textContent = "Triceps dips"
    } else {
        ex6.textContent = "Side plank with arm extension"
    }

    if(picker7 == 0){
        ex7.textContent = "Glute bridge"
    } else if (picker2 == 1){
        ex7.textContent = "Single leg glute bridge "
    } else {
        ex7.textContent = "Hip thrust"
    }

    if(picker8 == 0){
        ex8.textContent = "Glute bridge"
    } else if (picker2 == 1){
        ex8.textContent = "Reverse leg lift"
    } else {
        ex8.textContent = "Side lunge"
    }

    if(picker9 == 0){
        ex9.textContent = "Reverse crunch"
    } else if (picker2 == 1){
        ex9.textContent = "Crunch"
    } else {
        ex9.textContent = "Russian twist"
    }

    if(picker10 == 0){
        ex10.textContent = "Knee to elbows crunch"
    } else if (picker2 == 1){
        ex10.textContent = "Leg raises"
    } else {
        ex10.textContent = "Flutter kicks"
    }

    if(picker11 == 0){
        ex11.textContent = "Squat"
    } else if (picker2 == 1){
        ex11.textContent = "Jump squat"
    } else {
        ex11.textContent = "Side squat"
    }

    if(picker12 == 0){
        ex12.textContent = "Squat to curtsy lunge"
    } else if (picker2 == 1){
        ex12.textContent = "Calf raises"
    } else {
        ex12.textContent = "Jump/Normal lunge"
    }
}
generate()
generateButton.addEventListener("click", function(){
    generate()
})
