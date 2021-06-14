var age = 10;
var health_issues = true;

if(age>65){
    console.log("eligible for vaccine");
}
else if(age>18 & age<65){
    console.log(`health issues :${health_issues} eligible for vaccine`);
}
else{
    console.log("not eligible for vaccine");
}