let arr = JSON.parse(localStorage.getItem("dataclient"))


let getData = (arr) => {

    let data = document.getElementById("datacollect")
    data.innerHTML = "" 

    arr.forEach(function (ele, index) {
        let name1 = document.createElement("td")
        name1.innerText = ele.name
        name1.setAttribute("id", "nameinfo")
        let contact = document.createElement("td")
        contact.innerText = ele.contact
        contact.setAttribute("id", "contactinfo")
        let email = document.createElement("td")
        email.innerText = ele.email
        email.setAttribute("id", "emailinfo")

        let active = document.createElement("td")
        active.innerText = "Active"
        active.setAttribute("id", "active_info")


        let action = document.createElement("td")
        action.setAttribute("id", "actioninfo")
        let iconji = document.createElement("i")
        iconji.setAttribute("class", "fa-solid fa-gear")

        let buttonji = document.createElement("select")
        var opt = document.createElement('option');
        opt.value = "";
        opt.innerHTML = "";
        buttonji.appendChild(opt);
        var opt = document.createElement('option');
        opt.value = "Edit";
        opt.innerHTML = "Edit";
        buttonji.appendChild(opt);
        var opt = document.createElement('option');
        opt.value = "Archieve";
        opt.innerHTML = "Archieve";
        buttonji.appendChild(opt);
        var opt = document.createElement('option');
        opt.value = "Delete";
        opt.innerHTML = "Delete";
        buttonji.appendChild(opt);
        // buttonji.addEventListener("click", function () {
        //     console.log(9)
        //     deletedata(ele, index)
        // })
        action.append(iconji, buttonji)

        let table_row = document.createElement("tr")
        table_row.append(name1, contact, email, active, action)

        let data = document.getElementById("datacollect")
        data.append(table_row)
    })
}
getData(arr);
//         function deletedata(ele, index) {

//             console.log(opt.value)


//         }
//     }



// })

let divji = document.getElementById("name-stng")
divji.addEventListener("click", sorting)
function sorting() {
            //console.log(arr)
            arr = arr.sort(function (a, b) {

                if (a.name < b.name) {

                    return -1
                }
                if (b.name > a.name) {
                    return 1
                }
                return 0
            })
            //Window.location.reload()
            console.log(arr)
            localStorage.setItem("dataclient", JSON.stringify(arr))
            // Window.location.reload();
            getData(arr);
}



//     console.log(arr)
// // let hji=[{name:"as"},{name:"hji"},{name:"bknfds"},{name:"ij"},{name:"cv"}]
// let hji = [4, 5, 6, 7, 2, 3]
// hji.sort(function (a, b) {
//     return a - b

// })
// console.log(hji)







// arr.forEach(function(ele,index){
//     let name=document.createElement("td")
// let nameji=document.createElement("p")
// nameji.innerText=ele.name
// nameji.setAttribute("id","namediv1")
// name.append(nameji)
// let contactji=document.createElement("p")
// let contact=document.createElement("td")

// contactji.innerText=ele.contact
// contactji.setAttribute("id","ji1")
// contact.append(contactji)
// let email=document.createElement("p")
// email.innerText=ele.email
// email.setAttribute("id","cd21")
// let emailji=document.createElement("td")
// emailji.append(email)
// let active=document.createElement("p")
// active.innerText="Active"
// active.setAttribute("id","cd9")
// let activeji=document.createElement("td")
// active.append(active)
// let div=document.createElement("div")
// div.setAttribute("id","cd5")
// let div2=document.createElement("td")
// let img=document.createElement("img")
// img.src="https://cdn-icons-png.flaticon.com/128/3524/3524659.png"

// let buttonji=document.createElement("select")
// var opt = document.createElement('option');
// opt.value = "";
// opt.innerHTML = "";
// buttonji.appendChild(opt);
// var opt = document.createElement('option');
// opt.value = "Edit";
// opt.innerHTML = "Edit";
// buttonji.appendChild(opt);
// var opt = document.createElement('option');
// opt.value = "Archieve";
// opt.innerHTML = "Archieve";
// buttonji.appendChild(opt);
// var opt = document.createElement('option');
// opt.value = "Delete";
// opt.innerHTML = "Delete";
// buttonji.appendChild(opt);
// buttonji.setAttribute("id","cd4")
// buttonji.addEventListener("click",function(){
//     deletedata(ele,index)
// })
// div.append(img,buttonji)
// let another_div=document.createElement("div")
// another_div.append(nameji,contactji,email,active,div)
// another_div.setAttribute("id","datacollectji")
// div2.append(another_div)
// let table_row=document.createElement("tr")
// table_row.append(another_div)
// data.append(table_row)

// function deletedata(ele)
// {
//     if(opt.value=="Delete")
//     {
//     arr.splice(index,1)
//     }
// }
// })