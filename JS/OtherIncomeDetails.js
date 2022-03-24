
      function myFunction() {
      
      var saving = document.getElementById("saving").value
      sessionStorage.setItem("saving",saving);

      var deposit = document.getElementById("deposit").value
      sessionStorage.setItem("deposit",deposit);

      var rent = document.getElementById("rent").value
      sessionStorage.setItem("rent",rent);

      var source = document.getElementById("source").value
      sessionStorage.setItem("source",source);

      location.replace("CapitalGainsDetails.html")
    }
