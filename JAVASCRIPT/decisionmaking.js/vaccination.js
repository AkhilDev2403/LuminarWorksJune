var num = 15;

// if(num / 15){
//     console.log("fiz");
// }
// else if(num / 5){
//     console.log("buz");
// }
// else if(num/3){
//     console.log("fizbuz")

// }

var result = ""

if(num % 3==0){
    result += "fiz";
}

if(num % 5==0){
    result += "buz"
}

console.log(result)