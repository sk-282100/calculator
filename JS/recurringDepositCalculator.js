$(function () {
  //To get monthly amount and display in proper format 
  $("#monthlyAmountSlider").change(function () {
    $("#monthlyInvestment").val(Number($("#monthlyAmountSlider").val()).toLocaleString('en-IN'));
    $("#hdMonthlyAmount").val(Number($("#monthlyAmountSlider").val()));
  });

  //To get Rate Of Interest value and display in proper format
  $("#rateOfInterestSlider").change(function () {
    $("#rateOfInterest").val($("#rateOfInterestSlider").val() + '%');
    $("#hdRateOfIntrest").val($("#rateOfInterestSlider").val());
  });

  //To get Time Period value
  $("#timePeriodSlider").change(function () {
    $("#timePeriod").val($("#timePeriodSlider").val());
  });

  //calculating Maturity Amount
  $("#show-maturity-value").click(function () {
    var monthlyInvestment = $("#hdMonthlyAmount").val();//p
    var rateOfInterest = $("#hdRateOfIntrest").val();//i
    var timePeriod = $("#timePeriod").val();//n
    var compoundIntrest = $("#interestCompounding").val();
    if (compoundIntrest == 3) {
      (e = Math.pow(1 + rateOfInterest / 400, timePeriod / compoundIntrest)), (d = Math.pow(1 + rateOfInterest / 400, -1 / compoundIntrest));
      console.log("4");
    } else if (compoundIntrest == 6) {
      (e = Math.pow(1 + rateOfInterest / 200, timePeriod / compoundIntrest)), (d = Math.pow(1 + rateOfInterest / 200, -1 / compoundIntrest));
      console.log("6");
    } else if (compoundIntrest == 12) {
      (e = Math.pow(1 + rateOfInterest / 100, timePeriod / compoundIntrest)), (d = Math.pow(1 + rateOfInterest / 100, -1 / compoundIntrest));
      console.log("1");
    } else {
      (e = Math.pow(1 + rateOfInterest / 1200, timePeriod / compoundIntrest)), (d = Math.pow(1 + rateOfInterest / 1200, -1 / compoundIntrest));
      console.log("12");
    }

    var maturityAmout = (monthlyInvestment * (e - 1)) / (1 - d);

    $("#mValue").text("Rs." + maturityAmout.toFixed(0));
    $("#tInvestment").text("Rs." + monthlyInvestment * timePeriod);
    $("#tIntrest").text("Rs." + (maturityAmout - monthlyInvestment * timePeriod).toFixed(0));
          
    // pie chart
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,

      data: [
        {
          showInLegend: true,
          type: "pie",

          startAngle: 240,
          // yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
            { y: monthlyInvestment * timePeriod, label: "Total Investment", label: "Total Investment" },
            { y: maturityAmout - monthlyInvestment * timePeriod, label: "Total Intrest", label: "Total Intrest" },
          ],
        },
      ],
    });
    chart.render();
  })
})



