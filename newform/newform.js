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

Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "80px";
}

Back2.onclick = function(){
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "160px";
}

Next3.onclick = function(){
    Form3.style.left = "-450px";
    Form4.style.left = "40px";
    progress.style.width = "200px";
}

Back3.onclick = function(){
    Form3.style.left = "40px";
    Form4.style.left = "450px";
    progress.style.width = "240px";
}

Back4.onclick = function(){
    Form4.style.left = "40px";
    Form5.style.left = "450px";
    progress.style.width = "320px";
}

var mailfield=0;
var passwordfield=0;
var confirmpasswordfield=0;
var firstnamefield=0;
var lastnamefield=0;

function validateMail(){
    var emailregex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z.-]+.[a-z]{2,3}$/;
    var email = document.getElementById("mail").value;
    if (email == "")
    {
    alert("Enter email");
    mailfield=0;
    return false;
    }
    else if(!emailregex.test(email))
    {
        alert("Enter a valid email");
    mailfield=0;
    return false;
    }
    else{
        mailfield=1;
    }
}
function validatePassword(){ 

    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9!@#$%^&*]{6,15}$/;
    var passWord = document.getElementById("password").value;
    if (passWord == "")
    {
    alert("Enter password");
    passwordfield=0;
    return false;
  
    }
    else if (!passwordRegex.test(passWord))
    {
        alert("Enter a valid password");
    }
    else{
        passwordfield=1;
    }
}

function validateConfirmPassword(){
    var confirmPassword=document.getElementById("confirmpass").value;
    var passWord=document.getElementById("password").value;
    if (passWord != confirmPassword)
    {
        alert("Passwords didn't match");
       confirmpasswordfield=0;
        return false;
        
    }
    else{
        confirmpasswordfield=1;
    }
}

function validateName()
{
    var firstname=document.getElementById("firstname").value;
    var nameregex=/^[a-zA-Z]{3,15}$/;

    if (!nameregex.test(firstname))
    {
    alert("Name should be in character");
    firstnamefield=0;
    return false;
    
    } 
    else{
        firstnamefield=1;
    }
}

function validateLastname(){
    var lastname=document.getElementById("lastname").value;
    var nameregex=/^[a-zA-Z]{0,15}$/;
        // if (lastname == "")
        // {
        //     alert("enter the last name");
        //     lastnamefield=0;
        //     return false; 
         
        // }

        if (!nameregex.test(lastname))
        {
        alert("name should be in character");
        lastnamefield=0;
        return false;
       
        }
        else{
            lastnamefield=1;
        }
}


function pageChange1()
{
    if (mailfield==1 && passwordfield==1 && confirmpasswordfield==1 && firstnamefield==1 )
    {
        var Next1=document.getElementById("Next1");
        Next1.onclick = function(){
                Form1.style.left = "-450px";
                Form2.style.left = "40px";
                progress.style.width = "40px";
            }
    }
    else{
        alert("Please fill the required details!");
    }
}


var dobfield=0;
var phonefield=0;
var statefield=0;

function validateDob()
{

    if (validateAge()<18)
    {
        alert("Age should be greater than 18");
        dobfield=0;
        return false;
       
    }
    else{
        dobfield=1;
    }
}
function validateAge()
{
var d_o_b=document.getElementById("dob").value;
var dob = new Date(d_o_b);  
var month_diff = Date.now() - dob.getTime();   
var age_dt = new Date(month_diff);       
var year = age_dt.getUTCFullYear(); 
var age = Math.abs(year - 1970);
return age;
}
function validateState()
{
    var stateVal=document.getElementById("state").value;
    if(stateVal=="Select a state")
        {
        alert("select a state");
        statefield=0;
        return false;
        
        }
        else{
            statefield=1;
        }
}
function validatePhone()
{
    var phoneNo=document.getElementById("phonenum").value;
    var phoneregex=/^[6-9]{1}[0-9]{9}$/
        if (phoneNo == "")
        {
        alert("enter phone no.");
        phonefield=0;
        return false;
       
        }
      
        else if(!phoneregex.test(phoneNo))
        {
            alert("Number should start with 6/7/8/9 and contain 10 digits");
            phonefield=0;
        }
        else{
            phonefield=1;
        }
}
function pageChange2(){
    if (dobfield==1 && phonefield==1 && statefield==1)
    {
        var Next2=document.getElementById("Next2");
        Next2.onclick = function(){
                Form2.style.left = "-450px";
                Form3.style.left = "40px";
                progress.style.width = "120px";
            }
    }
else{
    alert("Please fill all the required details!");
}
}



var gradefield = 0;
var yearofpassingfield = 0;

function validateEducation() {
    validateGrade();
    validateYearOfPassing();
    pageChange4()
}

function validateGrade()
{
    var grade;
    let checkBox = document.querySelectorAll('.check-box');
    console.log(checkBox)
    checkBox.forEach(c => {
        if(c.checked == true) {
            grade = true
        }
    })
    if (grade == false)
        {
        alert("select a grade");
        gradefield = 0;
        return false;
       
        }
        else{
            gradefield = 1; 
        }
}

function validateTermsAndConditions()
{
    var check = document.getElementById("tnc").checked;
    if (check == false)
    {
        alert("Please accept terms and conditions");
        conditionfield=0;
        return false;
    }
    else{
        conditionfield=1;
    }

}

function validateYearOfPassing() {
    var yopFormat = /^(0[1-9]|1[012])[\/\-](19[5-9]\d|20[0-2]\d)$/;
    var yop = document.getElementById("pass").value;
    if (yop == ""){
        alert("This field is required");
        yearofpassingfield=0;
        return false;
        
    }
    else if(!yopFormat.test(yop))
    {
        alert("Enter a valid pattern");
        yearofpassingfield=0;
        return false;
        
    }
    else{
        yearofpassingfield=1;
    }
}

function pageChange4() {
    if (gradefield == 1 && yearofpassingfield == 1){
        var Next4 = document.getElementById("Next4");
        Next4.onclick = function(){
                Form4.style.left = "-450px";
                Form5.style.left = "40px";
                progress.style.width = "280px";
            }
    } 
    else{
        alert("Please fill all the required details!");
    }
}

var checkBox = document.getElementById('check');
var departmentfield = 0;
var conditionfield = 0;
function validateDepartment()
{
    var department = document.getElementById('dept').value;
    
    if (department=="Select a Department")
    {
    alert("select a Department");
    departmentfield=0;
    return false;
   
    }
    else{
        departmentfield=1;
    } 
}

function validateTermsAndConditions()
{
    var check = document.getElementById("tnc").checked;
    if (check == false)
    {
        alert("Please accept terms and conditions");
        conditionfield=0;
        return false;
    }
    else{
        conditionfield=1;
    }

}
function pageChange5(){
   
    if (departmentfield == 1 && departmentfield == 1){
        Submit1.onclick = function(){
    Form5.style.left = "-450px";
    Form6.style.left = "40px";
    progress.style.width = "360px";
}
    } 
    

}





