

let form = document.querySelector("form")
form.addEventListener("submit", getData);

let dataArr = JSON.parse(localStorage.getItem("SignUp_Data")) || [] ;
console.log(dataArr)

function getData(event){
  event.preventDefault()
  // let user_Email = document.querySelector("#email").value;
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
   
    if(dataObj.userfirstName == "" || dataObj.userlastName == "" || dataObj.userEmail == "" || dataObj.userPassword == "" ||   dataObj.userMonth == "" || dataObj.userDay == "")
      {
        alert ("Please fill all credintials")
        
        return;

       }
       else if(dataArr.forEach(function(elem){
         
         if(elem.userEmail == dataObj.userEmail)
         {
          alert ("User Alredy Exist")
          return; 
         }
        })){
         return;
       }
       else{
        
        dataArr.push(dataObj)
        localStorage.setItem("SignUp_Data" , JSON.stringify(dataArr))
        window.location.href="./signin.html"
       
     }
    
  };  
    

  









  
   
    
   
 
  

  
 

 
 




