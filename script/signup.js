import fetchForm from "../component/signupnext.js";

let userDetails = {};

let form_1 = document.getElementById("form_1");
form_1.addEventListener("submit", function () {
  let body = document.querySelector("body");

  // taking data & storing in ls
  let ip_fn = document.getElementById("ip_fn").value;
  userDetails["fullname"] = ip_fn;

  let ip_em = document.getElementById("ip_em").value;
  userDetails["email"] = ip_em;

  let ip_ps = document.getElementById("ip_ps").value;
  userDetails["password"] = ip_ps;

  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  body.innerHTML = null;
  body.innerHTML = fetchForm();
});

// let createNC = () => {
//   window.location.href = "../login.html";
// };
