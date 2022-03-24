$(document).ready(function () {
  $("#show-maturity-value").on("click", function () {
    $("#rangePrimary").change(function () {
      var x = $("#rangePrimary").val();
      $("#slider").val(x);
    });
    $("#rangePrimary1").change(function () {
      var y = $("#rangePrimary1").val();
      $("#slider1").val(y);
    });
    $("#rangePrimary2").change(function () {
      var z = $("#rangePrimary2").val();
      $("#slider2").val(z);
    });
    showDetails();
  });
});

function showDetails() {

  var p = $("#rangePrimary").val(),
    i = $("#rangePrimary1").val(),
    n = $("#rangePrimary2").val(),
    compoundIntrest = $("#int").val();
  if (compoundIntrest == 3) {
    (e = Math.pow(1 + i / 400, n / 3)), (d = Math.pow(1 + i / 400, -1 / 3));
    console.log("4");
  } else if (compoundIntrest == 6) {
    (e = Math.pow(1 + i / 200, n / 6)), (d = Math.pow(1 + i / 200, -1 / 6));
    console.log("6");
  } else if (compoundIntrest == 12) {
    (e = Math.pow(1 + i / 100, n / 12)), (d = Math.pow(1 + i / 100, -1 / 12));
    console.log("1");
  } else {
    (e = Math.pow(1 + i / 1200, n / 1)), (d = Math.pow(1 + i / 1200, -1 / 1));
    console.log("12");
  }
  m = (p * (e - 1)) / (1 - d);
  $("#matval").text("Rs." + m.toFixed(0));
  $("#tinv").text("Rs." + p * n);
  $("#tint").text("Rs." + (m - p * n).toFixed(0));

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
          { y: p * n, label: "Total Investment", name: "Total Investment" },
          { y: m - p * n, label: "Total Intrest", name: "Total Intrest" },
        ],
      },
    ],
  });
  chart.render();
}
function rd() {}
