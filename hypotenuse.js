const calculatebtn = document.querySelector("#btn");
const outputelement = document.querySelector("#output");
const sides = document.querySelectorAll("#sides");


function calculateSum(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
    console.log(sumOfSquares)
}

function hypotenuse(){

    const sumOfSquares = calculateSum(Number(sides[0].value), Number(sides[1].value));


    const lengthofHypotenuse = Math.sqrt(sumOfSquares)    
    outputelement.innerText = "The length of Hypotenuse is : " + lengthofHypotenuse;
    // console.log("clicked")

}

calculatebtn.addEventListener("click", hypotenuse);