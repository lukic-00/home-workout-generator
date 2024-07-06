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
        ex1.textContent = "A"
    } else if (picker1 == 1){
        ex1.textContent = "B"
    } else {
        ex1.textContent = "C"
    }

    if(picker2 == 0){
        ex2.textContent = "A"
    } else if (picker2 == 1){
        ex2.textContent = "B"
    } else {
        ex2.textContent = "C"
    }

    if(picker3 == 0){
        ex3.textContent = "A"
    } else if (picker2 == 1){
        ex3.textContent = "B"
    } else {
        ex3.textContent = "C"
    }

    if(picker4 == 0){
        ex4.textContent = "A"
    } else if (picker2 == 1){
        ex4.textContent = "B"
    } else {
        ex4.textContent = "C"
    }

    if(picker5 == 0){
        ex5.textContent = "A"
    } else if (picker2 == 1){
        ex5.textContent = "B"
    } else {
        ex5.textContent = "C"
    }

    if(picker6 == 0){
        ex6.textContent = "A"
    } else if (picker2 == 1){
        ex6.textContent = "B"
    } else {
        ex6.textContent = "C"
    }

    if(picker7 == 0){
        ex7.textContent = "A"
    } else if (picker2 == 1){
        ex7.textContent = "B"
    } else {
        ex7.textContent = "C"
    }

    if(picker8 == 0){
        ex8.textContent = "A"
    } else if (picker2 == 1){
        ex8.textContent = "B"
    } else {
        ex8.textContent = "C"
    }

    if(picker9 == 0){
        ex9.textContent = "A"
    } else if (picker2 == 1){
        ex9.textContent = "B"
    } else {
        ex9.textContent = "C"
    }

    if(picker10 == 0){
        ex10.textContent = "A"
    } else if (picker2 == 1){
        ex10.textContent = "B"
    } else {
        ex10.textContent = "C"
    }

    if(picker11 == 0){
        ex11.textContent = "A"
    } else if (picker2 == 1){
        ex11.textContent = "B"
    } else {
        ex11.textContent = "C"
    }

    if(picker12 == 0){
        ex12.textContent = "A"
    } else if (picker2 == 1){
        ex12.textContent = "B"
    } else {
        ex12.textContent = "C"
    }
}

generateButton.addEventListener("click", function(){
    generate()
})
