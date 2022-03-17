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
        
    }
    else if (compoundIntrest == 6) {
       var maturityAmout = monthlyInvestment * [(1 + (intrestRate / 100) / 6) ** (6 * timePeriod)];
        
    }
    else if (compoundIntrest == 1) {
       var maturityAmout = monthlyInvestment * [(1 + (intrestRate / 100) / 1) ** (1 * timePeriod)];
       
    }
    else {
        var maturityAmout = monthlyInvestment * [(1 + (intrestRate / 100) / 12) ** (12 * timePeriod)];
    }

    // Maturity amount = Deposite amount *[(1 + interestrate/ interest frequency) ^ (interest frequency  tenure)]
    //     = 100000[(1+(6/100)/4)^(6*4)]
    // 	= 142950.281193


    var totalIntrest = (maturityAmout - monthlyInvestment);

    $("#tinv").html(totalInvestment);
    $("#tint").html(totalIntrest);
    $("#matval").html(maturityAmout);
} 