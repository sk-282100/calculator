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



$( document ).ready(function() {
  //$("#penaltyRate").trigger( "change" );
  calculateRD();

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

function calculateRD(){
  var rateofintrest=4.9;
  var arraydataPoints= [];
  var rdCreationDate = new Date($("#rdCrationDate").val());
  var current_date = new Date();
  var maturityAmount=0,intrestAmount=0,principleAmount=0;
  var temprdCreationDate= new Date($("#rdCrationDate").val());
  var temp1= new Date($("#rdCrationDate").val());
var i=(rateofintrest-$('#penaltyRate').val())+parseFloat($('input[name="rd"]:checked').val());

var p = $("#amountOfDeposite").val(),
    n = MonthDifference(rdCreationDate,current_date),
    y=YearDifference(rdCreationDate,current_date);
    e = Math.pow((1+i/400), n/3),
    d = Math.pow((1 + i/400),(-1/3)),
    m = (p*(e - 1))/(1 - d);



$('#hdnrateOfIntrest').val(i.toFixed(1));
$('#rateOfIntrest').val(i.toFixed(1));
$('#month').val(n);
$('#year').val(y);

$('#maturityAmount').val(m.toFixed(2));
$('#intrestAmount').val((m-p*n).toFixed(2));
$('#principleAmount').val((p*n).toFixed(2));
$('#maturitydate').val(getTodayDate());
$('#bodyshowTable').empty();
$('#bodyshowTable').append('<tr> <td colspan="2">Financial Year Wise Interest Amount</td> </tr> <tr><td class="w-auto col-1">Financial Year</td><td class="col-1">Interest</td></tr>');
   
debugger;
var tempintrestAmount=0;
var yeardiff=YearDifference(new Date($("#rdCrationDate").val()),current_date);
for(var j=0;j<yeardiff;j++){
  var newdate= new Date(temprdCreationDate.setFullYear(temprdCreationDate.getFullYear()+1));

 if(newdate>current_date){
  newdate=current_date;
 }
 var p = $("#amountOfDeposite").val();
    n = MonthDifference(rdCreationDate,newdate);
    y=YearDifference(rdCreationDate,newdate);
    e = Math.pow((1+i/400), (n)/3);
    d = Math.pow((1 + i/400),(-1/3));
    m = (p*(e - 1))/(1 - d);
    maturityAmount=parseInt(m.toFixed(0));
    intrestAmount=parseInt((m - p*n).toFixed(0));
    principleAmount=parseInt(p*(n).toFixed(0));
    temprdCreationDate=newdate;
    // alert('maturityAmount: '+maturityAmount);
    // alert('intrestAmount: '+intrestAmount);
    // alert('principleAmount: '+principleAmount);
    $('#bodyshowTable').append('<tr><td> FY. '+ newdate.getFullYear() +'</td> <td>'+ (intrestAmount-tempintrestAmount) +'</td> </tr>');
    var datapointobject={
      y: (intrestAmount-tempintrestAmount), label: newdate.getFullYear()
    }
    arraydataPoints.push(datapointobject);
    tempintrestAmount=intrestAmount;
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
  calculateRD();
});

$("#penaltyRate").change(function () {
  calculateRD();
});
$('#rdCrationDate').change(function(){calculateRD();})

$('input[name="rd"]').change(function(){calculateRD();})

});
