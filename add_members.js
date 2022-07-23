let form = document.querySelector("#team_members");
let userdata = JSON.parse(localStorage.getItem("userdata")) || [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        notes: document.querySelector("#notes").value,
        labor: document.querySelector("#labor").value,
        bill: document.querySelector("#bill").value
    }
    if((data.name.length === 0) || (data.email.length === 0) || (data.notes.length === 0) || (data.labor.length === 0) || (data.bill.length === 0)){
            alert("Fields cannot be empty");
    } else {
            if(ischecked() === true) {
                userdata.push(data);
                localStorage.setItem("userdata", JSON.stringify(userdata));
                alert("Team member is created");
                window.location.href = "team.html";
            } else if (ischecked() === false) {
                alert("Please Select a Role");
            }
    }
});

let ischecked = () => {
    let check1 = document.getElementById("accept1");
    let check2 = document.getElementById("accept2");
    let check3 = document.getElementById("accept3");
    let check4 = document.getElementById("accept4");

    let value1 = check1.value;
    let value2 = check2.value;
    let value3 = check3.value;

    if (((check1.checked) || (check2.checked) || (check3.checked)) === true) {
        return true;
    } else {
        return false;
    }
}

