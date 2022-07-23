

let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let fname = document.getElementById("fname");
fname.value = userDetails["fullname"];
let email = document.getElementById("email");
email.value = userDetails["email"];
if (fname.value === "") {
  fname.setAttribute("required", "");
}

// let save = document.getElementById("save")
let save = () => {
  alert("Profile was updated");
};

let signout = () => {
  localStorage.removeItem("userDetails");
  window.location.href = "../signup.html";
};
