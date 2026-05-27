//Assignment 2
let customerName : string = "John Doe";
let creditscore : number = 720;
let income : number = 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio : number = 35.0;


    if (creditscore >= 750){
        console.log("Loan is approved to", customerName ,"in first stage")
    }else if (creditscore <= 650){
        console.log("Loan is denied to", customerName ,"in first stage","due to less credit score")}
     if (creditscore >= 650 && creditscore <= 749){}
if (income >= 50000.0){
    if (isEmployed = true){
        if (debtToIncomeRatio >=40) {
            console.log("Loan is approved to", customerName)}
            else 
         {console.log("Loan is denied due to low debtToIncomeRatio to", customerName);}
    }else {console.log("Loan is denied due to ", customerName, "non employed" );}
}else {console.log("Loan is denied due to less income to", customerName );}

    




    
    
    
    
    