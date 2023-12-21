var n = prompt("Enter a Sentence or a Word").toUpperCase();
var c=0;
for (let i = 'A'; i <= 'Z'; i++) {
   for (let j = 0; j < n.length; j++) {
    var ch=n.charAt(j);
    if(i==ch)
    c++;
   }
    if(c==0)
    continue;
    else
    console.log(`Frequency of ${i} is ${c}`);

c=0;
}