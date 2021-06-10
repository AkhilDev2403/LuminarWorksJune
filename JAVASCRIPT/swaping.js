var num1 = 10;
var num2 = 20;
console.log(`before swaping ${num1} ${num2}`)

//logic

/*var temp = num1;
num1 = num2;
num2 = temp;
console.log(`after swaping ${num1} ${num2}`)*/

num1 = num1 + num2; //10+20 =30
num2 = num1 - num2; //30-20 =10
num1 = num1 - num2; //30-10 = 20
console.log(`after swaping ${num1} ${num2}`)

