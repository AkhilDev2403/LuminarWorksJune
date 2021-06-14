var num=123;
var res="";

while(num!=0){
    
    let rev = num % 10;
    // console.log(rev);
    res = res+rev;
    num = Math.floor(num/10);
    

}

console.log(res);
