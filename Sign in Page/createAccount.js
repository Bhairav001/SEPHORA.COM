// let form = document.querySelector("form")
// form.addEventListener("submit", getData);

// let dataArr = JSON.parse(localStorage.getItem("SignUp_Data")) || [] ;
// console.log(dataArr)

// function getData(event){
//   event.preventDefault()
//   let dataObj = {
//     userfirstName:form.first_name.value,
//     userlastName:form.last_name.value,
//     userEmail:form.email.value,
//     userPassword:form.password.value,
//     userPhone:form.phone_number.value,
//     userMonth:form.month.value,
//     userDay:form.day.value,
//     userZip_code:form.zip_code.value
//    }
   
//    dataArr.push(dataObj)
//    dataArr.forEach(function(elem){
//     if(dataObj.userEmail == "" || dataObj.userPassword == "" || dataObj.userfirstName == "" || dataObj.userlastName == "")
//    {
//     alert("Please fill required field for signup.");
//    }
    
//    else{
//      alert("You are succesfully created account.");
//     localStorage.setItem("SignUp_Data" , JSON.stringify(dataArr))
//     window.location.href="./signin.html"
//    }
//    })
   
   
// };

let form = document.querySelector("form")
form.addEventListener("submit", getData);

let dataArr = JSON.parse(localStorage.getItem("SignUp_Data")) || [] ;
console.log(dataArr)

function getData(event){
  event.preventDefault()
  let user_Email = document.querySelector("#email").value;
  let dataObj = {
    userfirstName:form.first_name.value,
    userlastName:form.last_name.value,
    userEmail:form.email.value,
    userPassword:form.password.value,
    userPhone:form.phone_number.value,
    userMonth:form.month.value,
    userDay:form.day.value,
    userZip_code:form.zip_code.value
   }
   
   dataArr.push(dataObj)
   dataArr.forEach(function(elem){
    if(elem.userEmail == "" || elem.userPassword == "" || elem.userfirstName == "" || elem.userlastName == "")
   {
    alert("Please fill required field for signup.");
   }
   else if(user_Email == elem.userEmail  )
   {
    alert("User Alredy Exist.");
   }
    else{
     alert("You are succesfully created account.");
     window.location.href="./signin.html"
     localStorage.setItem("SignUp_Data" , JSON.stringify(dataArr))
    
   };
   });
  //  localStorage.setItem("SignUp_Data" , JSON.stringify(dataArr))
  };

  
 

 
 




