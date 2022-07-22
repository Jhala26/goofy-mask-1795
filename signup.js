var userData=JSON.parse(localStorage.getItem("userData"))
var p2=document.getElementById("p2");
p2.innerText=userData.email;

var form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    // var userDetails=JSON.parse(localStorage.getItem("userDetails")) || [];
    // var data={
    //     firstname:form.firstname.value,
    //     lastname:form.lastname.value,
    //   password:  form.password.value,
    // }
    // localStorage.setItem("userDetails",JSON.stringify(data));
    window.location.href="productpage.html"
   
});