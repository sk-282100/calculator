 


$(document).ready(function () {
  $("#matDate").html(new Date().toLocaleDateString());
    var typeOfCustomer = $(".radioBtn").val();
    var rdCreation = $("#Rdcration").val();
    var amountOfDeposite = $("#amountOfDeposite").val();
    var PenaltyRate = $("#int").val();
  
    var maturityAmout = amountOfDeposite * [(1 + (PenaltyRate / 100))]
    var calculateRateOfIntrest = (maturityAmout - monthlyInvestment);
  
  
  })
  window.onload = function () {
  
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
  
  
      data: [{
        type: "column",
  
  
        dataPoints: [
          { y: 10, label: "0" },
          { y: 20, label: "1" },
          { y: 30, label: "2" },
          { y: 40, label: "3" },
          { y: 50, label: "4" },
          { y: 60, label: "5" },
  
        ]
      }]
    });
    chart.render();
  
  }
  
  
  
  $(document).ready(function () {
    $("#btn1").click(function () {
      $("#chartContainer").toggle(300);
      $("#showtable").hide(300);
    });
    $("#btn2").click(function () {
      $("#showtable").toggle(300);
      $("#chartContainer").hide(300);
    });
    $('#penaltyRate').change(function(){
      var x= $('#penaltyRate :selected').val();
       
      
      var depositeamount=$("#amountOfDeposite").val()
      var rateintrest= $("#rateOfIntrest1").val()
      var Fdcreation= new Date ($("#fdCreation").val())
      var matDate= new Date($("#matDate").html())
      var intrestfreq=matDate-Fdcreation

      var intrestfreq1=Math.floor((intrestfreq) / 31536000000)
      var year=$("#year").html(intrestfreq1)
      
      var intrestfreq2=Math.floor(((intrestfreq)%31536000000)/2628000000)
      var month=$("#month").html(intrestfreq2)
      
      var intrestfreq3=Math.floor((((intrestfreq)% 31536000000)%2628000000)/86400000+2)
      var days=$("#day").html(intrestfreq3)

      console.log(intrestfreq);
      console.log(Fdcreation);
      console.log(matDate);
      // var tenure= $("#rangePrimary2").val()

       if (x == 0) {
        $("#rateOfIntrest1").html(4.9);
        // document.getElementById("matAmount1").value=depositeamount*Math.pow(1+((rateintrest/100)/(Fdcreation-matDate),(Fdcreation-matDate)*(tenure/toYears)));
       }
       
        else if (x==0.5) {
          $("#rateOfIntrest1").html(4.4);
        }
       else if (x==1)
       {
        $("#rateOfIntrest1").html(3.9);
       }
      })
     
  });
  
  

 