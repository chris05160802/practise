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