//@ts-check

let focusMethod = function getFocus(){
    document.getElementById("fname").focus();
};

let email = document.getElementById("fname");
let btn = document.getElementById("submit-btn");

  let error = document.getElementById("error");
  btn.addEventListener("click",function(){
    // @ts-ignore
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
       
      error.innerHTML =("Correct Email Format");
      setTimeout(() => {
          error.innerHTML ="";
      }, 3000);
      
      return (true);
     
    }
      error.innerHTML= ("Incorrect Email Format");
      setTimeout(() => {
        error.innerHTML ="";
     }, 3000);
    
      return (false);
  });

 