

// function myFunction() {

      // function grossIncome()
      // {   
      //    var hra2, da2, sa2, grossIncome;   
        
      //     // Calculate Gross Income
      //     grossIncome = Math.round(hra2 - da2 - sa2);
      //     console.log(grossIncome);
      //     return grossIncome;
      // }
      // var gross = grossIncome();
      // $("#gross-income").text(gross);
      
           
      // function capitalGains()
      // {  
      //    var equity1, equity2, debit1, debit2, shares1, shares2, estate1, estate2, capitalGains;  
      
      //     // Calculate Capital Gains
      //     capitalGains = Math.round(equity1 + equity2 + debit1 + debit2 + shares1 + shares2 + estate1 + estate2);                                
      //     console.log(capitalGains);
      //     return capitalGains;     
      // }
      // var capitalGain = capitalGains;
      // $("#capital-gain").text(capitalGain);
      
      
      // function taxDeductions()
      // {  
      //   var epf, selfInsurance, parentInsurance, nps, homeLoanInterest, educationLoanInterest, taxDeductions;  
          
      //     // Calculate Capital Gains
      //     taxDeductions = Math.round(epf, selfInsurance - parentInsurance - nps - homeLoanInterest - educationLoanInterest);
      //     console.log(taxDeductions);              
      //     return taxDeductions;   
      // }
      // var taxDeduction = taxDeductions;
      // $("#tax-deduction").text(taxDeduction);
      
      // function totalIncome()
      // {
      //     var grossIncome, taxDeductions, totalIncome;  
      
      //     // Calculate totalIncome
      //     totalIncome = Math.round(grossIncome-taxDeductions);
      //     console.log(totalIncome);             
      //     return totalIncome;  
      // }
      // var total = totalIncome;
      // $("#total-income").text(total);
      

      // function taxExcemptions()
      // {
      //     var taxExcemptions;  
      
      //     // Calculate totalIncome
      //     taxExcemptions = Math.round();
      //     console.log(taxExcemptions);             
      //     return taxExcemptions;  
      // }
      // var taxExcemption = taxExcemptions;
      // $("#tax-excemption").text(taxExcemption);


      // function recalculate()
      // {
      //   var grossIncomeResult = grossIncome();
      //   document.getElementById("#gross-income").value = grossIncomeResult;     
      // }
      // var recal = recalculate;

    function myFunction() {

        function grossIncome() {
          var hra2 = document.getElementById("hra2").value;
          var da2 =document.getElementById("da2").value;
          var sa2 =document.getElementById("sa2").value;

          var grossIncome = Math.round(hra2 - da2 - sa2);
          
          if (grossIncome != null) {
              document.getElementById("gross-income").innerHTML = grossIncome;
            }
        }


        function capitalGains() {
          var equity1 = document.getElementById("equity1").value;
          var equity2 =document.getElementById("equity2").value;
          var debit1 =document.getElementById("debit1").value;
          var debit2 = document.getElementById("debit2").value;
          var shares1 =document.getElementById("shares1").value;
          var shares2 =document.getElementById("shares2").value;
          var estate1 = document.getElementById("estate1").value;
          var estate2 =document.getElementById("estate2").value;

          var capitalGains =  Math.round(equity1 + equity2 + debit1 + debit2 + shares1 + shares2 + estate1 + estate2);                                
          
          if (capitalGains != null) {
              document.getElementById("capital-gain").innerHTML = capitalGains;
            }
        }

    

        function taxDeductions() {
          var epf = document.getElementById("epf").value;
          var selfInsurance =document.getElementById("selfInsurance").value;
          var parentInsurance =document.getElementById("parentInsurance").value;
          var debit2 = document.getElementById("debit2").value;
          var shares1 =document.getElementById("shares1").value;
          var shares2 =document.getElementById("shares2").value;
          var estate1 = document.getElementById("estate1").value;
          var estate2 =document.getElementById("estate2").value;

          var taxDeductions =  Math.round(epf, selfInsurance - parentInsurance - nps - homeLoanInterest - educationLoanInterest);
          if (taxDeductions != null) {
              document.getElementById("tax-deduction").innerHTML = taxDeductions;
            }
        }

        function taxExcemptions() {
          var equity1 = document.getElementById("equity1").value;
          var equity2 =document.getElementById("equity2").value;
          var debit1 =document.getElementById("debit1").value;
          var debit2 = document.getElementById("debit2").value;
          var shares1 =document.getElementById("shares1").value;
          var shares2 =document.getElementById("shares2").value;
          var estate1 = document.getElementById("estate1").value;
          var estate2 =document.getElementById("estate2").value;

          var taxExcemptions = Math.round();
          
          if (taxExcemptions != null) {
              document.getElementById("tax-excemptions").innerHTML = taxExcemptions;
            }
        }


        function grossIncome() {
          var hra2 = document.getElementById("hra2").value;
          var da2 =document.getElementById("da2").value;
          var sa2 =document.getElementById("sa2").value;

          var totalIncome = Math.round(grossIncome-taxDeductions);
          
          if (totalIncome != null) {
              document.getElementById("total-income").innerHTML = totalIncome;
            }
        }


        // function totalIncome()
      // {
      //     var grossIncome, taxDeductions, totalIncome;  
      
      //     // Calculate totalIncome
      //     totalIncome = Math.round(grossIncome-taxDeductions);
      //     console.log(totalIncome);             
      //     return totalIncome;  
      // }
      // var total = totalIncome;
      // $("#total-income").text(total);


    }


      $(function(){
        var fdr=1;
        var toYears=365;
      
        //To get type of fixed deposite 
        $(".fix-deposit-radio").click(function(){
            fdr=$(this).val()
          })
      
        //To get Tensure type value from dropdown  
          $("#tenure").change(function(){
            toYears=$(this).val()
          })
       
        //To get deposite amount and display in proper format 
          $("#depositeAmountSlider").change(function(){
            $("#depositeAmount").val(Number($("#depositeAmountSlider").val()).toLocaleString('en-IN'));
            $("#hddepositeAmount").val(Number($("#depositeAmountSlider").val()));
          });
      
          //To get Rate Of Interest value and display in proper format
          $("#roiSlider").change(function(){
            $("#roi").val($("#roiSlider").val()+'%');
            $("#hdroi").val($("#roiSlider").val());
          });
        
          //To get Tenure value
          $("#tenureSlider").change(function(){
            $("#tenureValue").val($("#tenureSlider").val());
          });
      
          //calculating Maturity Amount
          $("#calculate-button").click(function(){
            var depositAmount=$("#hddepositeAmount").val()
            var intrestRate= $("#hdroi").val()
            var tenure= $("#tenureValue").val()
            var fixedDeposit=fdr;
        
            var maturityAmout=depositAmount*Math.pow(1+((intrestRate/100)/fixedDeposit),fixedDeposit*(tenure/toYears))
            maturityAmout = maturityAmout.toFixed(2);
            var totalIntrest=maturityAmout-depositAmount
            totalIntrest=totalIntrest.toFixed(2);
      
            console.log(maturityAmout);
            $("#maturity").html(maturityAmout)
            $("#totIntrest").html(totalIntrest)
           
          })
            
       })

      
     
  // }

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
    
    $('#btnBackSalaryDetail').click(function(){
      $('#dvSalaryDetail').addClass('d-none');
      $('#dvBasicDetail').removeClass('d-none');
    })

    $('#btnOtherIncome').click(function(){
      $('#dvOtherIncome').addClass('d-none');
      $('#dvCapitalGains').removeClass('d-none');
    })

    $('#btnBackOtherIncome').click(function(){
      $('#dvOtherIncome').addClass('d-none');
      $('#dvSalaryDetail').removeClass('d-none');
    })

    $('#btnCapitalGains').click(function(){
      $('#dvCapitalGains').addClass('d-none');
      $('#dvTaxDeductions').removeClass('d-none');
    })

    $('#btnBackCapitalGains').click(function(){
      $('#dvCapitalGains').addClass('d-none');
      $('#dvOtherIncome').removeClass('d-none');
    })

    $('#btnTaxDeductions').click(function(){
      $('#dvTaxDeductions').addClass('d-none');
      $('#dvResult').removeClass('d-none');
    })

    $('#btnBackTaxDeductions').click(function(){
      $('#dvTaxDeductions').addClass('d-none');
      $('#dvCapitalGains').removeClass('d-none');
    })
  });