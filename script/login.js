let userDetails = JSON.parse(localStorage.getItem("userDetails"));

let signIn = (e) => {
  e.preventDefault();
  let ip_em = document.getElementById("ip_em").value;
  let ip_ps = document.getElementById("ip_ps").value;
  if (userDetails.email === ip_em && userDetails.password === ip_ps) {
    window.location.href = "";
  } else {
    alert("Incorrect email or password");
  }
};
