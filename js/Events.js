const Button = document.getElementById("InputButton");
const UserLogin = document.getElementById("User__Login");
const Modal = document.getElementById("Modal__display")

UserLogin.onclick=function(){
Modal.style.display="block"
}

Button.addEventListener("click", function () {
  const UserInput = document.getElementById("userName").value;
  const PasswordInput = document.getElementById("Password").value;
  const UserError = document.getElementById("User__Err");
  const PasswordError = document.getElementById("Password__Err");

  UserInput === ""
    ? (UserError.style.display = "block")
    : PasswordInput === ""
    ? (PasswordError.style.display = "block")
    : ((UserError.style.display = "none"),
      (PasswordError.style.display = "none")),
    alert("Successfully LoggedIn");
});