var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
var Form4 = document.getElementById("Form4");
var Form5 = document.getElementById("Form5");
var Form6 = document.getElementById("Form6");

var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");
var Back4 = document.getElementById("Back4");
var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");
var Next4 = document.getElementById("Next4");
var Submit1 = document.getElementById("Submit1");

Back1.onclick = function() {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "80px";
}

Back2.onclick = function() {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "160px";
}

Next3.onclick = function() {
    Form3.style.left = "-450px";
    Form4.style.left = "40px";
    progress.style.width = "200px";
}

Back3.onclick = function() {
    Form3.style.left = "40px";
    Form4.style.left = "450px";
    progress.style.width = "240px";
}

Back4.onclick = function() {
    Form4.style.left = "40px";
    Form5.style.left = "450px";
    progress.style.width = "320px";
}

function validateBasic() {
    validateName();
    validateLastname();
    validateMail();
    validatePassword();
    validateConfirmPassword() ;
    pageChange1();

}

var mailField = 0;
var passwordField = 0;
var confirmPasswordField = 0;
var firstNameField = 0;
var lastNameField = 0;

var errorFirst = document.getElementById('nameError');

function validateName() {
    var firstName = document.getElementById("firstname").value;
    var nameregex = /^[a-zA-Z]{3,15}$/;
    if(firstName == ""){
        errorFirst.innerHTML = "Enter first name";
        return false;
    } else if (!nameregex.test(firstName)) {
        errorFirst.innerHTML = "Name should be in character";
        firstNameField = 0;
        return false;
    } else {
            errorFirst.innerHTML = "";
            firstNameField = 1;
    }
}

var nameregex = /^[a-zA-Z]{0,15}$/

function validateLastname() {
    var errorLast = document.getElementById('lastNameError');
    var lastName = document.getElementById("lastname").value;
    if (!nameregex.test(lastName)) {
        errorLast.innerHTML = "Name should be in character";
        lastNameField = 0;
        return false;
    } else {
            errorLast.innerHTML = "";
            lastNameField = 1;
    }
}

var errorMail = document.getElementById('emailError');

function validateMail() {
    var emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z.-]+\.[a-z]{2,3}$/;
    var email = document.getElementById("mail").value
    if (email === "") {
        errorMail.innerHTML = "Enter Mail ID";
        mailField = 0;
        return false;
    } else if (!emailregex.test(email)) {
            errorMail.innerHTML = "Enter a valid email";
        mailField = 0;
        return false;
    } else {
            errorMail.innerHTML = "";
        mailField = 1;
    }
}

var errorPassword = document.getElementById('passwordError');

function validatePassword() { 
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9!@#$%^&*]{6,15}$/;
    var password = document.getElementById("password").value;
    if (password === "") {
       errorPassword.innerHTML = "Enter password";
        passwordField  = 0;
        return false;
    
    } else if (!passwordRegex.test(password)) {
            errorPassword.innerHTML = "Enter a valid password";
    } else {
        errorPassword.innerHTML = "";
        passwordField  = 1;
    }
}

var errorConfirmPassword = document.getElementById('confirmPasswordError');

function validateConfirmPassword() {
    var confirmPassword = document.getElementById("confirmpass").value;
    var password = document.getElementById("password").value;
    if (confirmPassword === "") {
        errorConfirmPassword.innerHTML = "Enter confirm password";
         confirmPasswordField  = 0;
         return false;
    } else if (password !== confirmPassword) {
        errorConfirmPassword.innerHTML = "Passwords didn't match";
        confirmPasswordField = 0;
        return false;
    } else {
        errorConfirmPassword.innerHTML = "";
        confirmPasswordField = 1;
    }
}

var Next1 = document.getElementById("Next1");

function pageChange1()
{
    if (mailField === 1 && passwordField === 1 && confirmPasswordField === 1 && firstNameField === 1 ){
        Next1.onclick = function() {
                Form1.style.left = "-450px";
                Form2.style.left = "40px";
                progress.style.width = "40px";
        }
    } else {
        alert("Please match the required details!");
    }
}

function validateOthers() {
    validateDob();
    validateState() ;
    validateGender() ;
    validatePhone() ;
    pageChange2();

}

var dobField = 0;
var phoneField = 0;
var stateField = 0;
var errorDob = document.getElementById('dobError');

function validateDob() {
if (validateAge()<18) {
        errorDob.innerHTML = "Age should be greater than 18";
        dobField = 0;
        return false;
} else {
        errorDob.innerHTML = "";
        dobField=1;
    }
}

function validateAge() {

var dateOfBirth = document.getElementById("dob").value;
var dob = new Date(dateOfBirth);  
var monthDifference = Date.now() - dob.getTime();   
var age = new Date(monthDifference);       
var year = age.getUTCFullYear(); 
var newAge = Math.abs(year - 1970);
return newAge;
}

var errorState = document.getElementById('stateError');

function validateState() {
    var stateVal = document.getElementById("state").value;
    if(stateVal === "Select a state") {
        errorState.innerHTML = "select a state";
        stateField = 0;
        return false;
        
        } else {
            errorState.innerHTML = "";
            stateField = 1;
        }
}

var genderMale = document.getElementById("male");
var genderFemale = document.getElementById("female");
var genderField=0;
var errorGender = document.getElementById("genderError");

function validateGender() {
    if (genderMale.checked === false && genderFemale.checked === false) {
        errorGender.innerHTML = "Enter gender.";
        genderField=0;
        return false;
    }
    else {
        errorGender.innerHTML = "";
        genderField=1;
    }
}

var errorPhone = document.getElementById('phoneError');

function validatePhone() {
    var phoneNo = document.getElementById("phonenum").value;
    var phoneRegex = /^[6-9]{1}[0-9]{9}$/;
    if (phoneNo === "") {
        errorPhone.innerHTML = "Enter phone no.";
        phoneField = 0;
        return false;
    } else if (!phoneRegex.test(phoneNo)) {
           errorPhone.innerHTML = "Number should contain 10 digits";
            phoneField = 0;
            return false;
    } else {
            errorPhone.innerHTML = "";
            phoneField = 1;
    }
}
var Next2 = document.getElementById("Next2");

function pageChange2() { 

    if (dobField === 1 && phoneField === 1 && stateField === 1 && genderField ===1) {
        Next2.onclick = function() {
                Form2.style.left = "-450px";
                Form3.style.left = "40px";
                progress.style.width = "120px";
            }
    } else {
        alert("Please match the required details!");
    }
}

var gradeField = 0;
var yearOfPassingField = 0;

function validateEducation() {
    validateGrade();
    validateYearOfPassing();
    pageChange4()
}

var errorGrade = document.getElementById('gradeError');

function validateGrade() {

    var grade = document.getElementById('grades').value;

    if (grade === "Select a Graduation" ) {
        errorGrade.innerHTML = "Select a Graduation";
        gradeField = 0;
        return false;
       
    } else {
            errorGrade.innerHTML = "";
            gradeField = 1; 
    }
}

var errorYearOfPaasing = document.getElementById('yearOfPassingError');

function validateYearOfPassing() {
    var yopFormat = /^(0[1-9]|1[012])[\/\-](19[5-9]\d|20[0-2]\d)$/;
    var yearOfPassing = document.getElementById("pass").value;
    if (yearOfPassing === "") {
        errorYearOfPaasing.innerHTML = "This field is required";
        yearOfPassingField=0;
        return false;
        
    } else if (!yopFormat.test(yearOfPassing)) {
        errorYearOfPaasing.innerHTML = "Enter a valid pattern";
        yearOfPassingField = 0;
        return false;
        
    } else {
        errorYearOfPaasing.innerHTML = "";
        yearOfPassingField = 1;
    }
}
var Next4 = document.getElementById("Next4");

function pageChange4() {
    if (gradeField === 1 && yearOfPassingField === 1) {
        Next4.onclick = function() {
                Form4.style.left = "-450px";
                Form5.style.left = "40px";
                progress.style.width = "280px";
            }
    } else {
        alert("Please fill all the required details!");
    }
}

function validateTeam() {
    validateDepartment() ;
    validateTermsAndConditions();
    pageChange5();
}

var checkBox = document.getElementById('check');
var departmentField = 0;
var conditionField = 0;

function validateDepartment() {
    var department = document.getElementById('dept').value;
    var errorDepartment = document.getElementById('departmentError');
    if (department === "Select a Department") {
        errorDepartment.innerHTML = "Select a Department";
        departmentField = 0;
        return false;
} else {
        errorDepartment.innerHTML = "";
        departmentField = 1;
    } 
}

function validateTermsAndConditions() {

    if (check === false) {
        alert("Please accept terms and conditions");
        conditionField = 0;
        return false;
    } else {
        conditionField = 1;
    }
}

function pageChange5() {
   
    if (departmentField === 1 && conditionField === 1) {
        Submit1.onclick = function() {
            Form5.style.left = "-450px";
            Form6.style.left = "40px";
            progress.style.width = "360px";
}
    } 
}




