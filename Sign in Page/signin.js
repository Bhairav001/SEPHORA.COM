
let form = document.querySelector("form")
form.addEventListener("submit", getLoginData);

let LogindataArr = JSON.parse(localStorage.getItem("SignUp_Data")) || [] ;
console.log(LogindataArr)

let  SignIn_Data = JSON.parse(localStorage.getItem("SignIn")) ;

function getLoginData(event){
  event.preventDefault()
  if(LogindataArr.length === 0)
  {
    alert("No user till now");
    return;
  }
  let LogindataObj = {
    Email:form.email.value,
    Password:form.password.value,
   }
   
  //  LogindataArr.push(LogindataObj)
   let isSignedin = false;
   LogindataArr.forEach(function(elem){
    
    if(elem.userEmail == "" || elem.userPassword == "")
     {
        alert("Please fill required field for signup.")
        return ;
     }
     
    else if(elem.userEmail === LogindataObj.Email  &&  elem.userPassword === LogindataObj.Password  ) 
      {
        isSignedin = true;
         alert("You are succesfully Sign in.")
        //  SignIn_Data.push(LogindataObj)
         localStorage.setItem("SignIn",JSON.stringify(elem))
         window.location.href = ""
         return ;
      }
      
   })
   if(isSignedin == false)
   {
    alert ("user does not exist");
   }
   
  }






