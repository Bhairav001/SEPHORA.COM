
let form = document.querySelector("form")
form.addEventListener("submit", getLoginData);

let LogindataArr = JSON.parse(localStorage.getItem("SignUp_Data")) || [] ;
console.log(LogindataArr)

function getLoginData(event){
  event.preventDefault()
  let LogindataObj = {
    userEmail:form.email.value,
    userPassword:form.password.value,
   }
   
   LogindataArr.push(LogindataObj)

   LogindataArr.forEach(function(elem){
    
    if(LogindataObj.userEmail == "" || LogindataObj.userPassword == "")
     {
      return  alert("Please fill required field for signup.")
     }
    
     else if(LogindataObj.userEmail == elem.userEmail && LogindataObj.userPassword == elem.userPassword ) 
      {
        return  alert("You are succesfully Sign in.")
      }
      else   
      {
        return  alert("Please enter correct details")
       }
   })
  }






