

   function pageRedirect1() {
       window.location.replace("1MonthlySalaryDetails.html");
   }  
   function pageRedirect2() {
       window.location.replace("2AnnuallySalaryDetails.html");
   }    

    function myFunction() {
  
       // for monthly
     var basic1 = document.getElementById("basic1").value
     sessionStorage.setItem("basic1",basic1);

     var hra1 = document.getElementById("hra1").value
     sessionStorage.setItem("hra1",hra1);

     var da1 = document.getElementById("da1").value
     sessionStorage.setItem("da1",da1);

     var sa1 = document.getElementById("sa1").value
     sessionStorage.setItem("sa1",sa1);

     var epf1 = document.getElementById("epf1").value
     sessionStorage.setItem("epf1",epf1);

     var Gross1 = document.getElementById("Gross1").value
     sessionStorage.setItem("Gross1",Gross1);


  location.replace("OtherIncomeDetails.html")
}
