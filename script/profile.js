let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let fname = document.getElementById("fname");
fname.value = userDetails["fullname"];
let email = document.getElementById("email");
email.value = userDetails["email"];
if (fname.value === "") {
  fname.setAttribute("required", "");
}
