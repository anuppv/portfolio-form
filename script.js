
function validateName(){
    let text = document.getElementById("name").value;
    let regex = /^[a-zA-Z]+$/;
    if(regex.test(text)){
        document.getElementById("warning-name").innerHTML="Your name is validated"
        document.getElementById("warning-name").style.color="green"
        return true;
    }
    else{
        document.getElementById("warning-name").innerHTML="Please enter correct name"
        document.getElementById("warning-name").style.color="red"
        return false;
    }
}

function validateEmail(){
    let text = document.getElementById("email").value;
    let regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\.-]{2,20})\.([a-z]{2,6})(.[a-z]{2,6})?$/;
    if(regex.test(text)){
        document.getElementById("warning-email").innerHTML="Your email is Validated"
        document.getElementById("warning-email").style.color="green"
        return true;
    }
    else{
        document.getElementById("warning-email").innerHTML="Emter a valid email address"
        document.getElementById("warning-email").style.color="red"
        return false;
    }
}

function validatePhone(){
    let text = document.getElementById("phone").value;
    let regex = /^[0-9]{10}$/;
    if(regex.test(text)){
        document.getElementById("warning-phone").innerHTML="Your Phone number is validated"
        document.getElementById("warning-phone").style.color="green"
        return true;
    }
    else{
        document.getElementById("warning-phone").innerHTML="Enter a valid phone number"
        document.getElementById("warning-phone").style.color="red"
        return false;
    }
}

function validateMessage(){
    let text = document.getElementById("message").value;
    let regex = /^[a-zA-Z0-9\.-=+()*&^%$#@!?><":';||}{[]]+$/;
    if(regex.test(text)){
        document.getElementById("warning-message").innerHTML="Your message is successfully validated"
        document.getElementById("warning-message").style.color="green"
        return true;
    }
    else{
        document.getElementById("warning-message").innerHTML="Check and correct your message before submutting"
        document.getElementById("warning-message").style.color="red"
        return false; 
    }
}


const validateForm=()=> {
    validateName()
    validateEmail()
    validatePhone()
    validateMessage()

    if(validateName() && validateEmail() && validatePhone() && validateMessage()){
        return true;
    }
    else{
        return false;
    }
}