
function validateName(){
    let tname = document.getElementById("name").value;
    let regex = /^[a-zA-Z]+$/;
    if(regex.test(tname)){
        document.getElementById("warning-name").innerHTML("Success")
        document.getElementById("warning-name").style.color="green"
        return true;
    }
    else{
        document.getElementById("warning-name").innerHTML("Failed")
        document.getElementById("warning-name").style.color="red"
        return false;
    }
}

function validateEmail(){
    let temail = document.getElementById("email").value;
    let regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\.-]{2,20})\.([a-z]{2,6})(.[a-z]{2,6})?$/;
    if(regex.test(temail)){
        document.getElementById("warning-email").innerHTML("Success")
        document.getElementById("warning-email").style.color="green"
        return true;
    }
    else{
        document.getElementById("warning-email").innerHTML("Failed")
        document.getElementById("warning-email").style.color="red"
        return false;
    }
}

function validatePhone(){
    let tphone = document.getElementById("phone").value;
    let regex = /^[0-9]{10}$/;
    if(regex.test(tphone)){
        document.getElementById("warning-phone").style.color="green"
        document.getElementById("warning-phone").innerHTML("Success")
        return true;
    }
    else{
        document.getElementById("warning-phone").innerHTML("Failed")
        document.getElementById("warning-phone").style.color="red"
        return false;
    }
}

function validateMessage(){
    let tmessage = document.getElementById("message").value;
    let regex = /^[a-zA-Z]+$/;
    if(regex.test(tmessage)){
        document.getElementById("warning-message").innerHTML("Success")
        document.getElementById("warning-message").style.color="green"
        return true;
    }
    else{
        document.getElementById("warning-message").style.color="red"
        document.getElementById("warning-message").innerHTML("Failed")
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