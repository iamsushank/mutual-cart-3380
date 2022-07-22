let userinfoas = JSON.parse(localStorage.getItem("userDetails"));

// setTimeout(() => {
let mainaccordin = document.getElementsByClassName("conBoxes");

for (i = 0; i < mainaccordin.length; i++) {
  mainaccordin[i].addEventListener("click", function () {
    this.classList.toggle("active");
    //   this.style.color ="blue"|| "black"
  });
}
// }, 2000);

if (userinfoas === null) {
  window.location.href = "../signup.html";
} else {
  let nameprofile = document.getElementById("name-profile");
  nameprofile.innerText = userinfoas["fullname"];
}

let profile = () => {
  window.location.href = "../profile.html";
};

let profileSignout = () => {
  localStorage.removeItem("userDetails");
  window.location.href = "../signup.html";
};
