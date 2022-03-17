$(function(){
      
    var fdr;
    var toYears;

    $("#rangePrimary").change(function(){
     var x= $("#rangePrimary").val()
      $("#slider").val(x)
    })


    $("#rangePrimary1").change(function(){
     var x= $("#rangePrimary1").val()
      $("#slider1").val(x)
    })

    $("#rangePrimary2").change(function(){
     var x= $("#rangePrimary2").val()
      $("#slider2").val(x)
    })


    $(".fix-deposit-radio").click(function(){
      fdr=$(this).val()
    })

    $("#int").change(function(){
      toYears=$(this).val()
    })

    $("#calculate-button").click(function(){
      var depositAmount=$("#rangePrimary").val()
      var intrestRate= $("#rangePrimary1").val()
      var tenure= $("#rangePrimary2").val()
      var fixedDeposit=fdr;
  
     
    
      var maturityAmout=depositAmount*Math.pow(1+((intrestRate/100)/fixedDeposit),fixedDeposit*(tenure/toYears))
      var totalIntrest=maturityAmout-depositAmount

      console.log(maturityAmout);
      $("#maturity").html(maturityAmout)
      $("#totIntrest").html(totalIntrest)
     
    })
      
 })