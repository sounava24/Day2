var n = Number(prompt("Enter the term upto which the fibonacci series is to be shown"));
var a=0,b=1,c=0;
for (let index = 1; index <=n; index++) {
    console.log(a);
    c=a+b;
    a=b;
    b=c;
}