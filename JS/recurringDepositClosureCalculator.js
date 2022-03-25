$(function showGraphTable() {
  $("#graph").click(function () {
    $("#chartContainer").toggle(300);
    $("#showTable").hide(300);
  });
  $("#table").click(function () {
    $("#showTable").toggle(300);
    $("#chartContainer").hide(300);
  });
});

$(function() {
  //calculating Maturity Amount
  $("#penaltyRate").change(function () {
    var penaltyRate = $("#penaltyRate :selected").val();
    var customerType = $("#rd").val(); //p
    var rdCreationDate = new Date($("#rdCrationDate").val()); //i
    var timePeriod = $("#timePeriod").val(); //n
    var amountOfDeposite = $("#amountOfDeposite").val();

    var past_date = new Date(rdCreationDate);
    var current_date = new Date();

    var difference =
      current_date.getFullYear() * 12 +
      current_date.getMonth() -
      (past_date.getFullYear() * 12 + past_date.getMonth());
    console.log(difference);
    $("#month").text(difference.toFixed(0));
    var yearDiff = difference / 12;
    $("#year").text(yearDiff.toFixed(1));
    console.log(yearDiff.toFixed(1));
    var timePeriod = yearDiff + difference / 12;

    if (penaltyRate == 0) {
      $("#rateOfIntrest").html(4.9+"%");
      (e = Math.pow(1 + 4.9 / 1200, timePeriod / 12)),
        (d = Math.pow(1 + 4.9 / 1200, -1 / 12));
      console.log("12");
      console.log(maturityAmout);
    } else if (penaltyRate == 0.5) {
      $("#rateOfIntrest").html(4.4+"%");
      (e = Math.pow(1 + 4.4 / 1200, timePeriod / 12)),
        (d = Math.pow(1 + 4.4 / 1200, -1 / 12));
    } else if (penaltyRate == 1) {
      $("#rateOfIntrest").html(3.9+"%");
      (e = Math.pow(1 + 3.9 / 1200, timePeriod) / 12),
        (d = Math.pow(1 + 3.9 / 1200, -1 / 12));
    }

    var maturityAmout = (amountOfDeposite * (e - 1)) / (1 - d);

    $("#matAmount").text("Rs." + maturityAmout.toFixed(0));
    $("#intrestAmount").text(
      "Rs." + (maturityAmout - amountOfDeposite * timePeriod).toFixed(0)
    );

    // table value
    $("#finacialYear").text("FY." + rdCreationDate.getFullYear());
    $("#intrest").text(
      (maturityAmout - amountOfDeposite * timePeriod).toFixed(0)
    );
 if (document.getElementById("graph").checked) {
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"

        data: [
          {
            type: "column",

            dataPoints: [
              { y: 10, label: "0" },
              { y: 20, label: "1" },
              { y: 30, label: "2" },
            ],
          },
        ],
      });
      chart.render();
   
    }
  });
});
