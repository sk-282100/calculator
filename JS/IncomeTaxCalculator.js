

    $( document ).ready(function() {
      var age=0,city=0,RecidenceS=0,occupation=0;
      var AnnualGross=0,Annualepf=0,Annualsa=0,Annualda=0,Annualhra=0,Annualbasic=0;
      var MonthGross=0,Monthepf=0,Monthsa=0,Monthda=0,Monthhra=0,Monthbasic=0;
      var saving=0,source=0,rent=0,deposit=0;
      var equity1=0,debit1=0,shares1=0,estate1=0;
      var equity2=0,debit2=0,shares2=0,estate2=0;
      var epf=0,selfInsurance=0,nps=0,parentInsurance=0,educationLoanInterest=0,homeLoanInterest=0,rent1=0;
      var grossincome=0,capitalgain=0,taxdeduction=0,taxexcemptions=0,totalincome=0;

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
      
      $("input[type=text]").inputFilter(function(value) {
           return /^\d*$/.test(value)  });

      $('#btnBasicDetail').click(function(){

        age=$('#age').val();
        city=$('#city').val();
        RecidenceS=$('input[name="rd"]:checked').val()
        occupation=$('#occupation').val();

      $('#dvBasicDetail').addClass('d-none');
      $('#dvSalaryDetail').removeClass('d-none');
    })

    $('#btnSalaryDetail').click(function(){

      Annualbasic=$('#Annualbasic').val();
      Annualhra=$('#Annualhra').val();
      Annualda=$('#Annualda').val();
      Annualsa=$('#Annualsa').val();
      Annualepf=$('#Annualepf').val();
      AnnualGross=$('#AnnualGross').val();

      Monthbasic=$('#monthlybasic').val();
      Monthhra=$('#monthlyhra').val();
      Monthda=$('#monthlyda').val();
      Monthsa=$('#monthlysa').val();
      Monthepf=$('#monthlyepf').val();
      MonthGross=$('#monthlyGross').val();

      $('#dvSalaryDetail').addClass('d-none');
      $('#dvOtherIncome').removeClass('d-none');
    })
    
    $('#btnBackSalaryDetail').click(function(){
      $('#dvSalaryDetail').addClass('d-none');
      $('#dvBasicDetail').removeClass('d-none');
    })

    $('#btnOtherIncome').click(function(){

      saving=$('#saving').val();
      deposit=$('#deposit').val();
      rent=$('#rent').val();
      source=$('#source').val();

      $('#dvOtherIncome').addClass('d-none');
      $('#dvCapitalGains').removeClass('d-none');
    })

    $('#btnBackOtherIncome').click(function(){
      $('#dvOtherIncome').addClass('d-none');
      $('#dvSalaryDetail').removeClass('d-none');
    })

    $('#btnCapitalGains').click(function(){

      equity1=$('#equity1').val();
      debit1=$('#debit1').val();
      shares1=$('#shares1').val();
      estate1=$('#estate1').val();

      equity2=$('#equity2').val();
      debit2=$('#debit2').val();
      shares2=$('#shares2').val();
      estate2=$('#estate2').val();

      $('#dvCapitalGains').addClass('d-none');
      $('#dvTaxDeductions').removeClass('d-none');
    })

    $('#btnBackCapitalGains').click(function(){
      $('#dvCapitalGains').addClass('d-none');
      $('#dvOtherIncome').removeClass('d-none');
    })

    $('#btnTaxDeductions').click(function(){

      epf=$('#epf').val();
      selfInsurance=$('#selfInsurance').val();
      nps=$('#nps').val();
      parentInsurance=$('#parentInsurance').val();
      educationLoanInterest=$('#educationLoanInterest').val();
      homeLoanInterest=$('#homeLoanInterest').val();
      rent1=$('#rent').val();

      $('#dvTaxDeductions').addClass('d-none');
      $('#dvResult').removeClass('d-none');
      Calculate();
    })

    $('#btnBackTaxDeductions').click(function(){
      $('#dvTaxDeductions').addClass('d-none');
      $('#dvCapitalGains').removeClass('d-none');
    })

    var incometaxobject=[
      { slab1:0, slab2:250000, rate:0,age:59 },
      { slab1:250000, slab2:500000, rate:5,age:59 },
      { slab1:500000, slab2:750000, rate:10,age:59 },
      { slab1:750000, slab2:1000000, rate:15,age:59 },
      { slab1:1000000, slab2:1250000, rate:20,age:59 },
      { slab1:1250000, slab2:1500000, rate:25,age:59 },
      { slab1:1500000, slab2:15000000, rate:30,age:59 },

    ];

    function Calculate(){
      if(epf>150000){
        epf=150000;
      }
      if(nps>50000){
        nps=50000;
      }
      if(homeLoanInterest>200000){
        homeLoanInterest=200000;
      }
      if(selfInsurance>20000){
        selfInsurance=200000;
      }
      if(parentInsurance>10000){
        parentInsurance=10000;
      }
      grossincome=parseInt(Annualbasic)+parseInt(saving)+parseInt(source)+parseInt(rent)+parseInt(deposit);
      capitalgain=parseInt(equity1)+parseInt(equity2)+parseInt(debit1)+parseInt(debit2)+parseInt(shares1)+parseInt(shares2)+parseInt(estate1)+parseInt(estate2);
      taxdeduction=parseInt(epf)+parseInt(selfInsurance)+parseInt(nps)+parseInt(parentInsurance)+parseInt(educationLoanInterest)+parseInt(homeLoanInterest)+parseInt(rent1);
      totalincome=parseInt(grossincome)+parseInt(capitalgain);
       $('#total-income').text(totalincome.toLocaleString('en-IN'));
       $('#tax-excemptions').text(0.00);
       $('#tax-deduction').text(taxdeduction.toLocaleString('en-IN'));
       $('#capital-gain').text(capitalgain.toLocaleString('en-IN'));
       $('#gross-income').text(grossincome.toLocaleString('en-IN'));

       var incometaxrate=0;
       for(i=0;i<incometaxobject.length;i++){
         if(totalincome> incometaxobject[i].slab1 && totalincome< incometaxobject[i].slab2){
          incometaxrate=incometaxobject[i].rate;
          break;
         }
       }
      var finalTaxAmount= grossincome*incometaxrate/100;
      $('#taxamount').text(finalTaxAmount.toLocaleString('en-IN'));

    }
  });