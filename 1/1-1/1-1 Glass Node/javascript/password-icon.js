const checkbox = document.getElementById("checkbox");
const open_btn = document.getElementById("open");
const close_btn = document.getElementById("close")
const icon_Btn = document.getElementById("password-icon");
const password = document.getElementById("password");

open_btn.addEventListener("click", () => {
    icon_Btn.classList.add("active");
    password.type = "text";
});

close_btn.addEventListener("click", () => {
    icon_Btn.classList.remove("active");
    password.type = "password";
});

if (checkbox){
    checkbox.remove();
}
