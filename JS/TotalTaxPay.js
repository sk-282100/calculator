
$(document).ready(function () {

console.log("Calculate");

function grossIncome()
{
    // var hra2, da2, sa2;  
    var grossIncome;

    let hra2 = sessionStorage.getItem("hra2");
    let da2 = sessionStorage.getItem("da2");
    let sa2 = sessionStorage.getItem("sa2");

    // Calculate Gross Income
    grossIncome = Math.round(hra2 - da2 - sa2);
    console.log(grossIncome);
    return grossIncome;

}


function capitalGains()
{
    // var equity1, equity2, debit1, debit2, shares1, shares2, estate1, estate2;  
    var grossIncome;

    let equity1 = sessionStorage.getItem("equity1");
    let equity2 = sessionStorage.getItem("equity2");
    let debit1 = sessionStorage.getItem("debit1");
    let debit2 = sessionStorage.getItem("debit2");
    let shares1 = sessionStorage.getItem("shares1");                       
    let shares2 = sessionStorage.getItem("shares2");
    let estate1 = sessionStorage.getItem("estate1");
    let estate2 = sessionStorage.getItem("estate2");

    // Calculate Capital Gains
    capitalGains = Math.round(equity1 + equity2 + debit1 + debit2 + shares1 + shares2 + estate1 + estate2);
                            
    return capitalGains;
    console.log(capitalGains);
}


function taxDeduction()
{
    // var epf, selfInsurance, parentInsurance, nps, homeLoanInterest, educationLoanInterest;  
    var taxDeduction;

    let epf = sessionStorage.getItem("epf");
    let selfInsurance = sessionStorage.getItem("selfInsurance");
    let parentInsurance = sessionStorage.getItem("parentInsurance");
    let nps = sessionStorage.getItem("nps");
    let homeLoanInterest = sessionStorage.getItem("homeLoanInterest");
    let saeducationLoanInterest2 = sessionStorage.getItem("educationLoanInterest");
    
    // Calculate Capital Gains
    taxDeduction = Math.round(epf, selfInsurance - parentInsurance - nps - homeLoanInterest - educationLoanInterest);
                            
    return taxDeduction;
    console.log(taxDeduction);
}

function totalIncome()
{
    var grossIncome, taxDeduction;  
    var totalIncome;

    // Calculate totalIncome
    totalIncome = Math.round(grossIncome-taxDeduction);
    console.log(totalIncome);             
    return totalIncome;
    
}

function recalculate(){
var grossIncomeResult = grossIncome();
document.getElementById("#gross-income").value = grossIncomeResult;

}

})
