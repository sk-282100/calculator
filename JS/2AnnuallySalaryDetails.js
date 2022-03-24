
    function myFunction() {
   
        // for annually
      var basic2 = document.getElementById("basic2").value
      sessionStorage.setItem("basic2",basic2);

      var hra2 = document.getElementById("hra2").value
      sessionStorage.setItem("hra2",hra2);

      var da2 = document.getElementById("da2").value
      sessionStorage.setItem("da2",da2);

      var sa2 = document.getElementById("sa2").value
      sessionStorage.setItem("sa2",sa2);

      var epf2 = document.getElementById("epf2").value
      sessionStorage.setItem("epf2",epf2);

      var Gross2 = document.getElementById("Gross2").value
      sessionStorage.setItem("Gross2",Gross2);


   location.replace("OtherIncomeDetails.html")
 }
