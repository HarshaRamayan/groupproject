
function dlgLogin()
{
    var whitebg = document.getElementById("white-background");
    var dlg = document.getElementById("dlgbox");
    whitebg.style.display = "none";
    dlg.style.display = "none";
}

function showDialog()
{
    var whitebg = document.getElementById("white-background");
    var dlg = document.getElementById("dlgbox");
    whitebg.style.display = "block";
    dlg.style.display = "block";

    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    dlg.style.left = (winWidth/2) - 480/2 + "px";
    dlg.style.top = "150px";
}

function validate(){
    var valid = false;
    var x =document.myform.selection;

    for(var i=0;i<x.length;i++){
        if(x[i].checked)
        valid = true;
        break;
    }
}
function myFunction(){
    var x = document.getElementById("txt2");
    x.disabled = true;
    document.getElementById("phone").checked = false;
}
function myFunction2(){
    var x = document.getElementById("txt1");
    x.disabled = true;
    document.getElementById("email").checked = false;
}
function fun3(){
    if(document.getElementById("email").checked === true)
    {
        document.getElementById("selection").innerHTML = "OTP has been sent to your " + document.getElementById(txt1).value;
    } else{
        document.getElementById("selection").innerHTML = "OTP has been sent to your " + document.getElementById("txt2").value;
        }
}