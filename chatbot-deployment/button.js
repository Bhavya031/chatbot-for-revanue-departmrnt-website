
document.getElementById("english1").addEventListener("click", myFunction1);
  function myFunction1() {
    document.getElementById("vis").insertAdjacentHTML("beforebegin","<div class='messages__item messages__item--visitor'><button>english</button>");
    document.getElementById('english1').disabled = true;
    document.getElementById('gujrati').disabled = true;
                    
    }
document.getElementById("gujrati").addEventListener("click", myFunction2);
  function myFunction2() {
    document.getElementById("vis").insertAdjacentHTML("beforebegin","<div class='messages__item messages__item--visitor'><button>gujrati</button>");
    document.getElementById('gujrati').disabled = true;
    document.getElementById('english1').disabled = true;
                        
    }        