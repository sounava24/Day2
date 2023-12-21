var n = prompt("Enter a Sentence or a Word");
var vow="AEIOUaeiou";
var con=0, vowel=0;
for (let index = 0; index < n.length; index++) {
    var ch= n.charAt(index);
    if(vow.indexOf(ch)==-1)
    con++;
    else if(vow.indexOf(ch)>-1)
    vowel++;
    else
    continue;
}
console.log(`Number of vowels in ${n} is ${vowel}`);
console.log(`Number of consonants in ${n} is ${con}`);

