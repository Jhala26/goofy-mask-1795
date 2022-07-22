var form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
var userData=JSON.parse(localStorage.getItem("userData")) || [];
    var data={
        email:form.email.value,
    }

    if(userData.email===data.email){
        window.location.href="login.html"
    }
    
    else{
        localStorage.setItem("userData",JSON.stringify(data));
        window.location.href="signup.html";
    }
});