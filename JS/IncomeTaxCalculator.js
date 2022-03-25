
    function myFunction() {
      var age = document.getElementById("age").value
      sessionStorage.setItem("age",age);

      // sessionStorage.setItem("age", "age");
      // let age = sessionStorage.getItem("age");
      // document.getElementById("age").innerHTML = age;
      
      var city = document.getElementById("city").value
      sessionStorage.setItem("city",city);
      
      var radios = document.getElementsByName('RecidenceS');
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
   
                var radio_value =radios[i].value;
                       }
                    }
      sessionStorage.setItem("Resident Type",radio_value);
      
      
      var occupation = document.getElementById("occupation").value
      sessionStorage.setItem("occupation",occupation);

      location.replace("SalaryDetails.html")
     
    }
    var triggerTabList = [].slice.call(document.querySelectorAll('#salaryDetailTab li'))
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl)
    
      triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
      })
    })

    $( document ).ready(function() {
    $('#btnBasicDetail').click(function(){
      $('#dvBasicDetail').addClass('d-none');
      $('#dvSalaryDetail').removeClass('d-none');
    })

    $('#btnSalaryDetail').click(function(){
      $('#dvSalaryDetail').addClass('d-none');
      $('#dvOtherIncome').removeClass('d-none');
    })
    
    $('#btnOtherIncome').click(function(){
      $('#dvOtherIncome').addClass('d-none');
      $('#dvCapitalGains').removeClass('d-none');
    })

    $('#btnCapitalGains').click(function(){
      $('#dvCapitalGains').addClass('d-none');
      $('#dvTaxDeductions').removeClass('d-none');
    })

    $('#btnTaxDeductions').click(function(){
      $('#dvTaxDeductions').addClass('d-none');
      $('#dvResult').removeClass('d-none');
    })
  });