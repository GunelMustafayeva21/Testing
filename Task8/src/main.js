var passwordInput = document.getElementById("password"); 
var errorMessageElement = document.getElementById("errorMessage"); 
var submit = document.getElementById("signIn");
var key = document.getElementById("key");
var circle = document.getElementById("circle");
var colorfulLine= document.getElementById("colorfulLine");


var emailInput = document.getElementById("email"); 
var errorMessageForEmail = document.getElementById("errorMessageEmail"); 

function validateEmail(email){
    if (!(email.length >15 && email.length<100 && /[@]/.test(email) && /[.]/.test(email) && /[A-Za-z0-9]/.test(email)) ) {
        submit.disabled=true;
        return "Email is not in correct format";
    }
}
 emailInput.addEventListener("focusout", function(e){
 e.preventDefault();
 var email = emailInput.value.trim();
 var emailValidationMessage = validateEmail(email);
 errorMessageForEmail.textContent = emailValidationMessage;
 if(emailValidationMessage=="Email is not in correct format"){
    emailInput.style.borderColor = "red";
    errorMessageForEmail.style.color = "red";
 }
 })
 
 emailInput.addEventListener("focusin", function (e) {
    e.preventDefault();
    emailInput.value="";
    emailInput.style.borderColor = "blue";
    errorMessageEmail.style.color = "";
    errorMessageEmail.textContent="";
    submit.disabled=false;
});



function validatePassword(password) {
    
    if (password.length > 10 && /^(?=.*[A-Z])(?!.*[a-z\d]).*$/.test(password) && /[_,@#$]/.test(password)) {
        submit.disabled=true;
        return "Password is weak";
    }
    
    if (password.length > 10 && /[A-Za-z0-9]/.test(password) && /[_,@#$]/.test(password)) {

        return "Password is secure";
    }
    
        submit.disabled=true;
        return "Password is not valid";
}



passwordInput.addEventListener("focusout", function (e) {
    e.preventDefault();
    var password = passwordInput.value.trim();
    var validationMessage = validatePassword(password);
    errorMessageElement.textContent = validationMessage;
    colorfulLine.classList.remove("invisible");
    if (validationMessage == "Password is not valid" || validationMessage == "Enter the password") {
        passwordInput.style.borderColor = "red";
        errorMessageElement.style.color = "red";
        key.style.color="red";
        circle.style.backgroundColor="red";
        circle.textContent="X"
    }
    else if (validationMessage == "Password is weak") {
        passwordInput.style.borderColor = "yellow";
        errorMessageElement.style.color = "yellow";
        key.style.color="blue";
        circle.style.backgroundColor="yellow";
        circle.textContent="!"
    }
    else {
        passwordInput.style.borderColor = "green";
        errorMessageElement.style.color = "green";
        key.style.color="green";
        circle.style.backgroundColor="green";
        circle.innerHTML="<i class='bi bi-check-lg'></i>";
    }

});

passwordInput.addEventListener("focusin", function (e) {
    e.preventDefault();
    colorfulLine.classList.add("invisible");
    circle.style.backgroundColor="white";
    key.style.color="blue";
    passwordInput.style.borderColor = "blue";
    errorMessageElement.style.color = "";
    errorMessageElement.textContent="";
    submit.disabled=false;
});