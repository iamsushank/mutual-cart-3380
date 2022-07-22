let arr= JSON.parse(localStorage.getItem("dataclient"))
let data=document.getElementById("datacollect")
data.innerHTML=""
arr.forEach(function(ele,index){
let nameji=document.createElement("p")
nameji.innerText=ele.name
nameji.setAttribute("id","namediv1")
let contactji=document.createElement("p")
contactji.innerText=ele.contact
contactji.setAttribute("id","ji1")
let email=document.createElement("p")
email.innerText=ele.email
email.setAttribute("id","cd21")
let active=document.createElement("p")
active.innerText="Active"
active.setAttribute("id","cd9")
let div=document.createElement("div")
div.setAttribute("id","cd5")
let img=document.createElement("img")
img.src="https://cdn-icons-png.flaticon.com/128/3524/3524659.png"

let buttonji=document.createElement("select")
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
buttonji.setAttribute("id","cd4")
buttonji.addEventListener("click",function(){
    deletedata(ele,index)
})
div.append(img,buttonji)
let another_div=document.createElement("div")
another_div.append(nameji,contactji,email,active,div)
another_div.setAttribute("id","datacollectji")
data.append(another_div)

function deletedata(ele)
{
    if(opt.value=="Delete")
    {
    arr.splice(index,1)
    }
}
})