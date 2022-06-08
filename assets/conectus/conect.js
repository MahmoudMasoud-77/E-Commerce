/* ****************** nav ************************ */
burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

function toggleNav() {
  burger.classList.toggle('fa-bars');
  burger.classList.toggle('fa-times');
  nav.classList.toggle('nav-active');
}

 burger.addEventListener('click', function() {toggleNav();});

/* *************************************Contact Us********************************************* */
//  display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// validate form 
function validateForm() {
    
    /* let name = document.contactForm.name.value,
        email = document.contactForm.email.value,
        mobile = document.contactForm.mobile.value,
        message = document.contactForm.message.value; */
    let name = document.querySelector('#name').value,
        email = document.querySelector('#mail').value,
        mobile = document.querySelector('#mobile').value,
        message = document.querySelector('#message').value;    

	//flag
    let nameErr = emailErr = mobileErr = messageErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        let regex = /^01[0125][0-9]{8}$/gm;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    // Validate Massage
    if(message == "") {
        printError("messageErr", "Please enter your Message");
    } else {
            printError("messageErr", "");
            mobileErr = false;
    }
    
    // Prevent the form from being submitted
    if((nameErr || emailErr || mobileErr || messageErr ) == true) {
       return false;
    } else {
        
        let dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Message: " + message + "\n"                  
        // Display input data 
        alert(dataPreview);
    }
};

/* ************ go top************ */
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
scrollToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })