var num1 = 10, num2 = 20, num3 = 30;

var res ="";

if(num1 > num2 & num1 > num3){
    console.log(`${num1} is largest`);
}
else if(num2 >num1 & num2 > num3){
    console.log(`${num2} is largest`);
}
else if(num3 > num1 & num3 > num2){
    console.log(`${num3} is largest`);
}

else if(num1==num2 & num1==num3){
    console.log("all are equal");
}