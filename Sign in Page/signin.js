
let form = document.querySelector("form")
form.addEventListener("submit", getLoginData);

let LogindataArr = JSON.parse(localStorage.getItem("SignUp_Data")) || [] ;
console.log(dataArr)

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
      alert("Please fill required field for signup.")
     }
    
     else if(LogindataObj.userEmail == elem.userEmail && LogindataObj.userPassword == elem.userPassword ) 
      {
      alert("You are succesfully Sign in.")
      }
      else   
      {
        alert("Please enter correct details")
       }
   })
  }






