function validatePassword() {
    var password = document.getElementById("password").value;
    var lengthRegex = /^.{8,}$/
    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var digitRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*]/;
    var num = 0;
    
    var liLowercase = document.getElementById("liLowercase");
    var liThreeOfFour = document.getElementById("liThreeOfFour");
    var liUppercase = document.getElementById("liUppercase");
    var liDigit = document.getElementById("liDigit");
    var liSpecialChar = document.getElementById("liSpecialChar");
    var liLength = document.getElementById("liLength");

    liLength.className = lengthRegex.test(password) ? "length" : " ";

    if (lowercaseRegex.test(password)){
        num++;
        liLowercase.className = "valid";
    }
    else{
        liLowercase.className = "invalid";
    }

    if (uppercaseRegex.test(password)){
        num++;
        liUppercase.className = "valid";
    }
    else{
        liUppercase.className = "invalid";
    }

    if (digitRegex.test(password)){
        num++;
        liDigit.className = "valid";
    }
    else{
        liDigit.className = "invalid";
    }

    if (specialCharRegex.test(password)){
        num++;
        liSpecialChar.className = "valid";
    }
    else{
        liSpecialChar.className = "invalid";
    }

    if (num >= 3){
        liThreeOfFour.className = "liThreeOfFour";
    }
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    var passwordInput = document.getElementById('password');
    var email = document.getElementById('email');
    var input_field_ps = document.getElementById('input-field-password');
    var input_field_em = document.getElementById('input-field-email')
    var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^&*]).{8,}$/;
    var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!password_regex.test(passwordInput.value)) {
        event.preventDefault();
        input_field_ps.classList.add('error-input');
    }

    if (!email_regex.test(email.value)) {
        event.preventDefault();
        input_field_em.classList.add('error-input');
    }
});