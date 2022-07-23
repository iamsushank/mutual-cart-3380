function homeji()
{
    console.log(8)
  let arrayji=JSON.parse(localStorage.getItem("userDetails")) 
  if(arrayji.length!=0)
  {
    window.location.href="#"
  } 
  else{
    window.location.href="#"
  }
}