
  $(document).ready(function(){
      var typeOfCustomer = $(".radioBtn").val();
      var rdCreation = $("#Rdcration").val();
      var amountOfDeposite = $("#amountOfDeposite").val();
      var PenaltyRate = $("#int").val();

      var maturityAmout = amountOfDeposite *[(1+ (PenaltyRate/100))]
      var calculateRateOfIntrest = (maturityAmout - monthlyInvestment);

  })
