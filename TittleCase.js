var n = prompt("Enter a Sentence")+" ";
var word="", newword="";
for (let j = 0; j < n.length; j++) {
    var ch=n.charAt(j);
    if(ch==" ")
    {
        newword=newword+word.charAt(0).toUpperCase()+word.substring(1)+" ";
        word=""; 
    }
    else{
        word=word+ch;
    }
}
console.log(newword);