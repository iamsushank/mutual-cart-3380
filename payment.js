    let button1 = document.getElementById("btn1");
    let button2 = document.getElementById("btn2");

    let changecolor1 = () => {
        button1.style.backgroundColor = "#4fb4f3" ;
        button2.style.backgroundColor = "#91cbee" ;
    }
    let changecolor2 = () => {
        button2.style.backgroundColor = "#4fb4f3" ;
        button1.style.backgroundColor = "#91cbee" ;
    }

let form = document.querySelector("#pay_page");
let payment = JSON.parse(localStorage.getItem("payment")) || [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = {
        first_name: document.querySelector("#first_name").value,
        last_name: document.querySelector("#last_name").value,
        email: document.querySelector("#email").value,
        company: document.querySelector("#company").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        zip: document.querySelector("#zip").value,
        state: document.querySelector("#state").value,
        atm1: document.querySelector("#atm1").value,
        atm2: document.querySelector("#atm2").value,
        atm_no: document.querySelector("#atm_no").value,
        month: document.querySelector("#month").value,
        year: document.querySelector("#year").value,
        cvv: document.querySelector("#cvv").value
    }

    if((data.first_name.length === 0) || (data.last_name.length === 0) || (data.email.length === 0) || 
    (data.company.length === 0) || (data.address.length === 0) ||(data.city.length === 0) ||
    (data.zip.length === 0) || (data.state.length === 0) ||(data.atm1.length === 0) ||(data.atm2.length === 0)
    || (data.atm_no.length === 0) || (data.month.length === 0) || (data.year.length === 0) || (data.cvv.length === 0))
    {
        alert("Fields cannot be empty");
    } 
    else {
        if((data.first_name.value === data.atm1.value) && (data.last_name.value === data.atm2.value))
        {
            if(data.atm_no.length === 16){
                console.log("yes");
                payment.push(data);
                localStorage.setItem("payment", JSON.stringify(payment));
                alert("yout otp is 1234");
                window.location.href = "otp.html";
            } else {
                alert("please enter 16-digit valid card number");
            }
        } else {
            alert("name on form should be equal to name on card");
        }
    }
})

let changeprice2 = (event) => {
    event.preventDefault();
    document.getElementById("pro").innerHTML = null;
    document.getElementById("rate").innerHTML = null;
    document.getElementById("rate2").innerHTML = null;

    document.getElementById("pro").innerText = "Pro Annually";
    document.getElementById("rate").innerText = "$114";
    document.getElementById("rate2").innerText = "$114";
}

let changeprice3 = (event) => {
    event.preventDefault();
    document.getElementById("pro").innerHTML = null;
    document.getElementById("rate").innerHTML = null;
    document.getElementById("rate2").innerHTML = null;

    document.getElementById("pro").innerText = "Pro Monthly";
    document.getElementById("rate").innerText = "$14";
    document.getElementById("rate2").innerText = "$14";
}

let show_coupon = (event) => {
    event.preventDefault();
    let text = document.getElementById("text");
    text.innerHTML = null;
    let div = document.createElement("div");

    let label = document.createElement("label");
    label.innerText = "DISCOUNT COUPON/REFERAL CODE";
    let div1 = document.createElement("div");
    div1.setAttribute("class","newdiv")
    let input =  document.createElement("input");
    input.type = "text";
    input.setAttribute("id", "promocode");
    let button = document.createElement("button");
    button.innerText = "Apply";
    button.setAttribute("id", "apply");

    div1.append(input, button);
    div.append(label, div1);
    text.append(div);
}

//     let x = document.getElementById("rate").innerText;
    // let y = document.getElementById("rate2").innerText;
//     let promocode=document.querySelector('#promocode');
//  document.querySelector('#apply').addEventListener("click",function(){
    // if(promocode.value=="masai30"){
    //   y = (+y * 0.7).toFixed(2);    }
//     else{
//       y.innerText= +y;
//       alert("Invalid Code")
//     }
    
    
  

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
