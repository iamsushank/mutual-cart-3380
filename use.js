 
    function home()
    {
        console.log(8)
        let arrayji=JSON.parse(localStorage.getItem("userDetails")) 
        //console.log(Object.keys(arrayji).length)
  if(arrayji!==null)
  {
    window.location.href="./My_Hours/homepage.html"
  } 
  else if (arrayji === null){
    window.location.href="signup.html"
  }
    }