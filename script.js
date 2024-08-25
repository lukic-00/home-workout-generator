const exercises = [
  { element: document.querySelector(".ex1"), options: ["Push ups", "Diamond push ups", "Decline push ups"] },
  { element: document.querySelector(".ex2"), options: ["Incline push ups", "Push ups", "One-leg push ups"] },
  { element: document.querySelector(".ex3"), options: ["Bird-dog", "Superman", "Cat-cow"] },
  { element: document.querySelector(".ex4"), options: ["Bird-dog", "Superman", "Cat-cow"] },
  { element: document.querySelector(".ex5"), options: ["Triceps dips", "Plank taps", "Superman with arm extension"] },
  { element: document.querySelector(".ex6"), options: ["Inchworm", "Triceps dips", "Side plank with arm extension"] },
  { element: document.querySelector(".ex7"), options: ["Glute bridge", "Single leg glute bridge", "Hip thrust"] },
  { element: document.querySelector(".ex8"), options: ["Glute bridge", "Reverse leg lift", "Side lunge"] },
  { element: document.querySelector(".ex9"), options: ["Reverse crunch", "Crunch", "Russian twist"] },
  { element: document.querySelector(".ex10"), options: ["Knee to elbows crunch", "Leg raises", "Flutter kicks"] },
  { element: document.querySelector(".ex11"), options: ["Squat", "Jump squat", "Side squat"] },
  { element: document.querySelector(".ex12"), options: ["Squat to curtsy lunge", "Calf raises", "Jump/Normal lunge"] }
];

const generateButton = document.querySelector(".generateButton");
const start = document.querySelector(".startTimerButton");
const time = document.querySelector(".countdown");
const alarmSound = new Audio("images/bell-sound.mp3");

let timer;

function startTimer() {
  let count = 30;
  clearInterval(timer);
  timer = setInterval(() => {
    count--;
    time.textContent = `00:${count < 10 ? '0' : ''}${count}`;
    if (count === 0) {
      clearInterval(timer);
      alarmSound.play();
    }
  }, 1000);
}

function generate() {
  exercises.forEach(exercise => {
    const randomIndex = Math.floor(Math.random() * exercise.options.length);
    exercise.element.textContent = exercise.options[randomIndex];
  });
}

generate();
generateButton.addEventListener("click", generate);
start.addEventListener("click", startTimer);
