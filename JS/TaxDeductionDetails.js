
function myFunction() {
    var epf = document.getElementById("epf").value
    sessionStorage.setItem("epf",epf);

    var selfInsurance = document.getElementById("selfInsurance").value
    sessionStorage.setItem("selfInsurance",selfInsurance);

    var nps = document.getElementById("nps").value
    sessionStorage.setItem("nps",nps);

    var radios = document.getElementsByName('senior');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

                var radio_value =radios[i].value;
                    }
                    }
    sessionStorage.setItem("senior",radio_value);

    var parentInsurance = document.getElementById("parentInsurance").value
    sessionStorage.setItem("parentInsurance",parentInsurance);

    var educationLoanInterest = document.getElementById("educationLoanInterest").value
    sessionStorage.setItem("educationLoanInterest",educationLoanInterest);

    var homeLoanInterest = document.getElementById("homeLoanInterest").value
    sessionStorage.setItem("homeLoanInterest",homeLoanInterest);

    var rent = document.getElementById("rent").value
    sessionStorage.setItem("rent",estate);




    // var $ = function (id) 
    //     {
    //         return document.getElementById(id);
    //     }
    //     var calculate_tax = function() 
    //     {
    //         var total;
    //         var income = parseFloat( $("income").value);
    //         $("tax").value =  calcTaxes(income);
    //         console.log(tax);
    //         function calcTaxes(totalIncome)
    //         {
    //             var cal= 0;
    //             if(totalIncome < 2.500000)
    //             {
    //             tax = 0;
    //             }
    //             else if( totalIncome >= 2.500000 && totalIncome <= 500000)
    //             {
    //             tax = 0.5; 
    //             }
    //             else if (totalIncome >=4.800000 && totalIncome <=9.8500000)
    //             {
    //             tax = 0.20;
    //             }

    //             else{
    //             tax = 0.10;
    //                 }

    //             return tax;   
    //         }
    //     }
    //     window.onload = function () {
    //         $("cal").onclick = calculate_tax;
    //     }


    location.replace("TotalTaxPay.html")
}


    