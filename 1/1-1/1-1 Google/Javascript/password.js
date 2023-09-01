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

const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
const checkPassword = document.getElementById('checkPassword');

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        checkPassword.type = 'text';
    } else {
        checkPassword.type = 'password';
    }
});