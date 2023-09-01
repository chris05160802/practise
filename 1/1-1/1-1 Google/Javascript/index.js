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

