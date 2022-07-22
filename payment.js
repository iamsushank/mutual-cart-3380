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

    let changecolor4 = (event) => {
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
        let input =  document.createElement("input");
        input.type = "text";
        let button = document.createElement("button");
        button.innerText = "Apply";
        div1.append(input, button);
        div.append(label, div1);
        text.append(div);
    }


// let form = document.querySelector("#pay_page");
// let payment = JSON.parse(localStorage.getItem("payment")) || [];

// form.addEventListener("submit", () => {
//     event.preventDefault();
//     let data = {
//         first_name: document.querySelector("#first_name").value,
//         last_name: document.querySelector("#last_name").value,
//         email: document.querySelector("#email").value,
//         company: document.querySelector("#company").value,
//         address: document.querySelector("#address").value,
//         city: document.querySelector("#city").value,
//         zip: document.querySelector("#zip").value,
//         state: document.querySelector("#state").value,
//         atm1: document.querySelector("#atm1").value,
//         atm2: document.querySelector("#atm2").value,
//         atm_email: document.querySelector("#atm_email").value,
//         month: document.querySelector("#month").value,
//         year: document.querySelector("#year").value,
//         cvv: document.querySelector("#cvv").value,

//     }

//     if((data.first_name.length === 0) || (data.last_name.length === 0) || (data.email.length === 0) || (data.company.length === 0) || (data.address.length === 0) || (data.city.length === 0) || (data.zip.length === 0) || (data.state.length === 0) || (data.city.length === 0) || (data.atm2.length === 0) || (data.atm_email.length === 0) || (data.month.length === 0) || (data.year.length === 0) || (data.cvv.length === 0))
//     {
//         alert("Fields cannot be empty");
//     } else {
//             userdata.push(data);
//             localStorage.setItem("payment", JSON.stringify(payment));
//             alert("yout otp is 1234");
//             window.location.href = "otp.html";
//         }
// })
