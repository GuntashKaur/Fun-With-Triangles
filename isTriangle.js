const angles = document.querySelectorAll(".angle");
const isTrianglebtn = document.querySelector("#isTriangle");
const outputDiv = document.querySelector(".outputDiv");


function sumOfAngles(angle1, angle2, angle3){

    const result = angle1 + angle2+ angle3;
    return result;  
}


function clickHandler(){
    const sum = sumOfAngles(Number(angles[0].value) , Number(angles[1].value) , Number(angles[2].value));

    if(sum === 180){
        outputDiv.innerText("Angles form a triangle")
    }
    else{
        outputDiv.innerText("Angles do not form a triangle")
    }
}

isTrianglebtn.addEventListener("click", clickHandler);