const dropup = document.querySelector(".dropup")
const btn = document.querySelector(".function-btn")
var j = 0; 

btn.addEventListener("click", () => {
    j = j + 1;
    if (j % 2 == 0){
        btn.classList.add("active");
    }
    else{
        btn.classList.remove("active");
    }
    
});

const blindBTN = document.querySelector(".blind")
const definition = document.querySelector(".definition")
const functionBTN = document.querySelector(".functionBTN")
const functionBTN1 = document.querySelector(".functionBTN1")

blindBTN.addEventListener("click", () => {
    definition.classList.add("click");
});

functionBTN.addEventListener("click", () => {
    definition.classList.remove("click");
});

functionBTN1.addEventListener("click", () => {
    definition.classList.remove("click");
});
