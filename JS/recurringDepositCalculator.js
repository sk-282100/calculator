$(document).ready(function () {
    
    $("#show-maturity-value").on('click', function () {
        $("#rangePrimary").change(function () {
            var x = $("#rangePrimary").val()
            $("#slider").val(x)
        })
        $("#rangePrimary1").change(function () {
            var y = $("#rangePrimary1").val()
            $("#slider1").val(y)
        })
        $("#rangePrimary2").change(function () {
            var z = $("#rangePrimary2").val()
            $("#slider2").val(z)
        })
        showDetails();
    });

});

function showDetails() {

    var monthlyInvestment = $("#rangePrimary").val()
    var intrestRate = $("#rangePrimary1").val()
    var timePeriod = $("#rangePrimary2").val()
    var compoundIntrest = $("#int").val()
    console.log(monthlyInvestment);
    console.log(intrestRate);
    console.log(timePeriod);
    console.log(compoundIntrest);

   var totalInvestment = monthlyInvestment; 
  
    if (compoundIntrest == 4) {
        var maturityAmout = monthlyInvestment * [(1 + (intrestRate / 100) / 4) ** (4 * timePeriod)];
        maturityAmout=maturityAmout.toFixed(2);
    }
    else if (compoundIntrest == 6) {
       var maturityAmout = monthlyInvestment * [(1 + (intrestRate / 100) / 6) ** (6 * timePeriod)];
       maturityAmout=maturityAmout.toFixed(2);
    }
    else if (compoundIntrest == 1) {
       var maturityAmout = monthlyInvestment * [(1 + (intrestRate / 100) / 1) ** (1 * timePeriod)];
       maturityAmout=maturityAmout.toFixed(2);
    }
    else {
        var maturityAmout = monthlyInvestment * [(1 + (intrestRate / 100) / 12) ** (12 * timePeriod)];
        maturityAmout=maturityAmout.toFixed(2);
    }

 
    var totalIntrest = (maturityAmout - monthlyInvestment);
totalIntrest = totalIntrest.toFixed(2);
    $("#tinv").html(totalInvestment);
    $("#tint").html(totalIntrest);
    $("#matval").html(maturityAmout);
} 