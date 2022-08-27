const inputs = document.querySelectorAll("#input");
const clickbtn = document.querySelector("#areabtn");
const outputElement = document.querySelector("#output");

function calculate(a, b){
    const areaOfTraingle = (a*b)/2 ; 
    return areaOfTraingle;
}

function clickHandler(){

    const areaOfTraingle = calculate(Number(inputs[0].value) , Number(inputs[1].value));

    outputElement.innerText = "Area of Triangle = " + areaOfTraingle;

}

clickbtn.addEventListener("click", clickHandler);


