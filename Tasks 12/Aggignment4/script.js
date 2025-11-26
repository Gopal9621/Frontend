const form = document.getElementById("form");
const nameF = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");

function setError(input, msg, errBox){
  input.className = "invalid";
  errBox.textContent = msg;
}
function setSuccess(input, errBox){
  input.className = "valid";
  errBox.textContent = "";
}
form.addEventListener("submit", e => {
  e.preventDefault();
  let ok = true;
  
  // Name
  if(nameF.value.trim() === ""){
    setError(nameF,"Name is required",nameErr);
    ok = false;
  }else setSuccess(nameF,nameErr);

  // Email
  if(email.value.trim() === ""){
    setError(email,"Email is required",emailErr);
    ok = false;
  }else if(!email.value.includes("@")){
    setError(email,"Invalid email",emailErr);
    ok = false;
  }else setSuccess(email,emailErr);

  // Password
  if(pass.value.trim() === ""){
    setError(pass,"Password is required",passErr);
    ok = false;
  }else if(pass.value.length < 8){
    setError(pass,"Minimum 8 characters",passErr);
    ok = false;
  }else setSuccess(pass,passErr);

  if(ok){
    alert("Registration Successful!");
  }
});

