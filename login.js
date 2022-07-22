var userData=JSON.parse(localStorage.getItem("userData"))


var form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
   
    window.location.href="productpage.html"
 
   
   
});