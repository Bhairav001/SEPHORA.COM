document.querySelector("#container").addEventListener("submit", getData);

let userData = JSON.parse(localStorage.getItem("signupData")) || [];

function getData(event) {
  let signupObj = {
    userFname: document.querySelector("#first_name").value,
    userLname: document.querySelector("#last_name").value,
    userEmail: document.querySelector("#email").value,
    userPassword: document.querySelector("#password").value,
    userMonth:document.querySelector("#month").value,
    userDay:document.querySelector("#day").value,
  };
  validateDuplicate(signupObj);
  console.log(getData(signupObj))
}
let blanck = { userEmail: "", userPassword: "" };
function validateDuplicate(elem) {
  let Data = userData.filter(function (element) {
    return elem.userEmail !== element.userEmail;
  });
  if (
    blanck.userEmail == elem.userEmail &&
    blanck.userPassword == elem.userPassword
  ) {
    alert("Please fill required field for signup.");
  } else if (Data.length !== userData.length) {
    alert("This email id already exist");
  } else {
    userData.push(elem);
    localStorage.setItem("signupData", JSON.stringify(userData));
    window.location.href = "login.html";
    alert("You are successfully signup.");
  }
}