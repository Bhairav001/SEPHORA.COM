let form = document.querySelector("form")
form.addEventListener("submit", getData);

let dataArr = JSON.parse(localStorage.getItem("SignUp_Data")) || [] ;
console.log(dataArr)

function getData(event){
  event.preventDefault()
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
    if(dataObj.userEmail == "" || dataObj.userPassword == "" || dataObj.userfirstName == "" || dataObj.userlastName == "")
   {
    alert("Please fill required field for signup.");
   }
    
   else{
     alert("You are succesfully created account.");
    localStorage.setItem("SignUp_Data" , JSON.stringify(dataArr))
    window.location.href="./signin.html"
   }
   })
   
   
};
 




