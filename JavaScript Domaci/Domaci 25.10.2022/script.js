document.getElementById("dugme").addEventListener("click", function () {
  var a;
  var b;
  var i;
  a = document.getElementById("broj-1").value;
  b = document.getElementById("broj-2").value;

  var fizz=0;
  var bazz= 0;
  var fizz_bazz=0;


   
    for (var i = a; i <= b; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz buzz", i);
        
      } else if (i % 3 === 0) {
        console.log("Fizz", i);
        fizz++;
        
      } else if (i % 5 === 0) {
        console.log("Buzz", i);
      }  
    
  }   
    });

    document.getElementById("fizz").textContent

    
    