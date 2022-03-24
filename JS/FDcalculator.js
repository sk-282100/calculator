$(function(){
  var fdr=1;
  var toYears=365;

  //To get type of fixed deposite 
  $(".fix-deposit-radio").click(function(){
      fdr=$(this).val()
    })

  //To get Tensure type value from dropdown  
    $("#tenure").change(function(){
      toYears=$(this).val()
    })
 
  //To get deposite amount and display in proper format 
    $("#depositeAmountSlider").change(function(){
      $("#depositeAmount").val(Number($("#depositeAmountSlider").val()).toLocaleString('en-IN'));
      $("#hddepositeAmount").val(Number($("#depositeAmountSlider").val()));
    });

    //To get Rate Of Interest value and display in proper format
    $("#roiSlider").change(function(){
      $("#roi").val($("#roiSlider").val()+'%');
      $("#hdroi").val($("#roiSlider").val());
    });
  
    //To get Tenure value
    $("#tenureSlider").change(function(){
      $("#tenureValue").val($("#tenureSlider").val());
    });

    //calculating Maturity Amount
    $("#calculate-button").click(function(){
      var depositAmount=$("#hddepositeAmount").val()
      var intrestRate= $("#hdroi").val()
      var tenure= $("#tenureValue").val()
      var fixedDeposit=fdr;
  
      var maturityAmout=depositAmount*Math.pow(1+((intrestRate/100)/fixedDeposit),fixedDeposit*(tenure/toYears))
      maturityAmout = maturityAmout.toFixed(2);
      var totalIntrest=maturityAmout-depositAmount
      totalIntrest=totalIntrest.toFixed(2);

      console.log(maturityAmout);
      $("#maturity").html(maturityAmout)
      $("#totIntrest").html(totalIntrest)
     
    })
      
 })