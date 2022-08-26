const angles = document.querySelectorAll(".angle");

const isTrianglebtn = document.querySelector("#isTriangle");
const formData = document.querySelector(".form")

function sumOfAngles(angle1, angle2, angle3){

    const result = angle1 + angle2+ angle3;
    console.log(result)

    
}

function clickHandler(){
    const sum = sumOfAngles(45, 45, 90)
}

isTrianglebtn.addEventListener("click", clickHandler);