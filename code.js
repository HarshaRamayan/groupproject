function myFunction(){
    var email = document.getElementById("txt1");
    email.disabled = false;
    var x = document.getElementById("txt2");
    x.disabled = true;
    document.getElementById("phone").checked = false;
}
function myFunction2(){
    var phone = document.getElementById("txt2");
    phone.disabled = false;
    var x = document.getElementById("txt1");
    x.disabled = true;
    document.getElementById("email").checked = false;
}
function fun3(){
    if(document.getElementById("email").checked === true)
    {
        document.getElementById("selection").innerHTML = "OTP has been sent to your " + document.getElementById("txt1").value;
    } else{
        document.getElementById("selection").innerHTML = "OTP has been sent to your " + document.getElementById("txt2").value;
        }
}
