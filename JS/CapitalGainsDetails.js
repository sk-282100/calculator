
    function myFunction() {
      var equity1 = document.getElementById("equity1").value
      sessionStorage.setItem("equity1",equity1);
      var equity2 = document.getElementById("equity2").value
      sessionStorage.setItem("equity2",equity2);

      var debit1 = document.getElementById("debit1").value
      sessionStorage.setItem("debit1",debit1);
      var debit2 = document.getElementById("debit2").value
      sessionStorage.setItem("debit2",debit2);

      var shares1 = document.getElementById("shares1").value
      sessionStorage.setItem("shares1",shares1);
      var shares2 = document.getElementById("shares2").value
      sessionStorage.setItem("shares2",shares2);

      var estate1 = document.getElementById("estate1").value
      sessionStorage.setItem("estate1",estate1);
      var estate2 = document.getElementById("estate2").value
      sessionStorage.setItem("estate2",estate2);

      location.replace("TaxDeductionDetails.html")
    }
