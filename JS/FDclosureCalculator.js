$(function showGraphTable() {
  $("#graph").click(function () {
    $("#dvChartResult").removeClass('d-none');
    $("#dvTableResult").addClass('d-none');
  });
  $("#table").click(function () {
    $("#dvChartResult").addClass('d-none');
    $("#dvTableResult").removeClass('d-none');
  });
});

(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));



$( document ).ready(function() {
  $("input[type=text]").inputFilter(function(value) {
    return /^\d*$/.test(value)  });
  //$("#penaltyRate").trigger( "change" );
  calculateFD();

function MonthDifference(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
function YearDifference(d1, d2) {
  var yr = [];

  for (var i=d1.getFullYear(); i<=d2.getFullYear(); i++) {
      yr.push( i );
  }

  return yr.length-1;
}

function calculateFD(){
  var rateofintrest=5.2;
  var rdCreationDate = new Date($("#rdCrationDate").val());
  var current_date = new Date();
  var maturityAmount=0,intrestAmount=0,principleAmount=0;
  var temprdCreationDate= new Date($("#rdCrationDate").val());
  var temp1= new Date($("#rdCrationDate").val());
var i=(rateofintrest-$('#penaltyRate').val())+parseFloat($('input[name="rd"]:checked').val());
var arraydataPoints= [];
var p = $("#amountOfDeposite").val(),
    n = MonthDifference(rdCreationDate,current_date),
    y=YearDifference(rdCreationDate,current_date);

    var maturity=p*Math.pow((1+((i/100)/(n/3))), (n/3)*y);


$('#hdnrateOfIntrest').val(i.toFixed(1));
$('#rateOfIntrest').val(i.toFixed(1));
$('#month').val(n);
$('#year').val(y);

$('#maturityAmount').val(maturity.toFixed(2));
$('#intrestAmount').val((maturity-p).toFixed(2));
$('#principleAmount').val((p));
$('#maturitydate').val(getTodayDate());
$('#bodyshowTable').empty();
$('#bodyshowTable').append('<tr> <td colspan="2">Financial Year Wise Interest Amount</td> </tr> <tr><td class="w-auto col-1">Financial Year</td><td class="col-1">Interest</td></tr>');
   
var temprdCreationDate= new Date($("#rdCrationDate").val());
var yeardiff=YearDifference(new Date($("#rdCrationDate").val()),current_date);
for(var j=0;j<yeardiff;j++){
  var newdate= new Date(temprdCreationDate.setFullYear(temprdCreationDate.getFullYear()+1));
var yearwiseintrest=parseFloat(((maturity-p)/yeardiff).toFixed(2));
    $('#bodyshowTable').append('<tr><td> FY. '+ newdate.getFullYear() +'</td> <td>'+ ((maturity-p)/yeardiff).toFixed(2) +'</td> </tr>');
    var datapointobject={
      //y: parseFloat(((maturity-p)/2)).toFixed(2), label: newdate.getFullYear()
      y: yearwiseintrest, label: newdate.getFullYear()
    }
    arraydataPoints.push(datapointobject);

}

  
var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  theme: "light2", // "light1", "light2", "dark1", "dark2"

  data: [
    {
      type: "column",

      dataPoints: arraydataPoints,
    },
  ],
});
chart.render();
 
}

function getTodayDate(){
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  
  return  dd + '/' + mm + '/' + yyyy;

}

$("#amountOfDeposite").on('keyup', function(){
  calculateFD();
});

$("#penaltyRate").change(function () {
  calculateFD();
});
$('#rdCrationDate').change(function(){calculateFD();})

$('input[name="rd"]').change(function(){calculateFD();})

});
