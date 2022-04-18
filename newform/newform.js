var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
var Form4 = document.getElementById("Form4");
var Form5 = document.getElementById("Form5");
var Form6 = document.getElementById("Form6");

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

var field1=0;
var field2=0;
var field3=0;
var field4=0;
var field5=0;

function validateMail(){
    var emailregex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z.-]+.[a-z]{2,3}$/;
    var email=document.getElementById("mail").value;
    if(email=="")
    {
    alert("Enter email");
    field1=0;
    return false;
    }
    else if(!emailregex.test(email))
    {
        alert("Enter a valid email");
    field1=0;
    return false;
    }
    else{
        field1=1;
    }
}
function validatePass(){
    var pswd=document.getElementById("password").value;
    if(pswd=="")
    {
    alert("Enter password");
    return false;
    field4=0;
    }
    else{
        field4=1;
    }
}

function validateConfirm(){
    var cfrmpass=document.getElementById("cfrmpass").value;
    var pswd=document.getElementById("password").value;
    if(pswd != cfrmpass)
    {
        alert("Passwords didn't match");
        return false;
        field5=0;
    }
    else{
        field5=1;
    }
}

function validateName()
{
    var fname=document.getElementById("fname").value;
    var nameregex=/^[a-zA-Z]{3,15}$/;

    if(!nameregex.test(fname))
    {
    alert("name should be in character");
    return false;
    field2=0;
    } 
    else{
        field2=1;
    }
}

function validateLname(){
    var lname=document.getElementById("lname").value;
    var nameregex=/^[a-zA-Z]{3,15}$/;
        if(lname == "")
        {
            alert("enter the last name");
        return false; 
        field3=0; 
        }

        if(!nameregex.test(lname))
        {
        alert("name should be in character");
        return false;
        field3=0;
        }
        else{
            field3=1;
        }
}


function pageChange1()
{
    if(field1==1 && field2==1 && field3==1 && field4==1 && field5==1 )
    {
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


var field21=0;
var field22=0;
var field23=0;

function validateDob()
{

    if(validateAge()<18)
    {
        alert("Age should be greater than 18");
        return false;
        field21=0;
    }
    else{
        field21=1;
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
        return false;
        field22=0;
        }
        else{
            field22=1;
        }
}
function validatePhone()
{
    var phoneNo=document.getElementById("phonenum").value;
    var phoneregex=/^[6-9]{1}[0-9]{9}$/
        if(phoneNo == "")
        {
        alert("enter phone no.");
        return false;
        field23=0;
        }
      
        else if(!phoneregex.test(phoneNo))
        {
            alert("Number should start with 6/7/8/9 and contain 10 digits");
            field23=0;
        }
        else{
            field23=1;
        }
}
function pageChange2(){
    if(field21==1 && field22==1 && field23==1)
    {
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



var field41 = 0;
var field42 = 0;


function validateGrade()
{
    var grade=document.getElementById("grades").value;
    if(grade=="Select a grade")
        {
        alert("select a grade");
        return false;
        field41=0;
        }
        else{
            field41=1;
        }
}

function validateYOP() {
    var yopFormat = /^(0[1-9]|1[012])[\/\-](19[5-9]\d|20[0-2]\d)$/;
    var yop = document.getElementById("pass").value;
    if(yop==""){
        alert("This field is required");
        return false;
        field42=0;
    }
    else if(!yopFormat.test(yop))
    {
        alert("Enter a valid pattern");
        return false;
        field42=0;
    }
    else{
        field42=1;
    }
}

function pageChange4() {
    if(field41 == 1 && field42 == 1){
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
var field51=0;
var field52=0;
function validateDept()
{
    var dept = document.getElementById('dept').value;
    console.log(dept);
    if(dept=="Select a Department")
    {
    alert("select a Department");
    return false;
    field51=0;
    }
    else{
        field51=1;
    } 
}

function validateCheck()
{
    var check=document.getElementById("tnc").checked;
    if(check==false)
    {
        alert("Please accept terms and conditions");
        return false;
        field52=0;
    }
    else{
        field52=1;
    }

}
function pageChange5(){
   
    console.log(field51);
    if(field51 == 1 && field52 == 1){
        Submit1.onclick = function(){
    Form5.style.left = "-450px";
    Form6.style.left = "40px";
    progress.style.width = "360px";
}
    } 
    

}





