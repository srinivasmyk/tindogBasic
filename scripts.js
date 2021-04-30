
function login(){
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    var c;
    
    if(a!= "")
    {
        if(a == "surendra@gmail.com" )
      {
         alert("valid User");
        
         b = a.substr(0, 8);
         alert("Logged in user id :" + b);
       
         window.location = "index.html";// Keep your index page (page you want to navigate after login)
      
      }
    else
        alert("Invalid User,enter \"surendra@gmail.com\"");
    }
    else
    alert("enter \"surendra@gmail.com\"");
      return b;
}