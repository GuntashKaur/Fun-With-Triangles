const quizform = document.querySelector(".form");
const button = document.querySelector("#submitbtn");
const output = document.querySelector("#output");

const answers = ["A geometric figure", "Polygon", "3", "Equilateral", "Geometry"];

function clickHandler(){

    index = 0;
    score = 0;

    const form = new FormData(quizform);
    for(let value of form.values()){
        if(value == answers[index]){
            score = score + 1;
        }
       
        index = index +1;
    }

    output.innerText = "Your score is: " + score;

}

button.addEventListener("click", clickHandler);
