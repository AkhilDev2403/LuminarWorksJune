var num1=50, num2=10, num3=80;

//To find the largest among three values
if(num1>num2 & num1>num3){
    console.log(`${num1} is the largest`)
}
else if(num2>num1 & num2>num3){
    console.log(`${num2} is the largest`);
}
else if(num3>num1 & num3>num2){
    console.log(`${num3} is the largest`);
} 
else if(num1==num2 & num1==num3){
    console.log("all are equal");
}

//To find the second largest element
if(num2<num1 & num1<num3){
    console.log(`${num1} is the 2nd largest`);
}

//To sort elements
var ToSort = [num1,num2,num3];
ToSort.sort();
console.log("Sorted elements are :",ToSort);