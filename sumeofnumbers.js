var sum=0
for (var index=1;index<10; index++)
{
    var sum=sum+index
}
console.log(`sume of number from 1 to 10 is ${sum}`);
// ===========================================================
var sum=0
for (var index=40;index<50; index++)
{
    var sum=sum+index
}
console.log(`sume of number from 40 to 50 is ${sum}`);
// ============================================================

let mul=1
for (let i=2;i<5;i++)
{
    mul=mul*i
}

console.log(mul)
var str="developer";
for (var index=0; index<str.length ; index++)
{
    var abc=str.charAt(index);
    console.log(abc);

}
let str1="developer";
for(let index=str1.length ;index>0;index--)
{
    let abc=str1.charAt(index);
    console.log(abc);
}

var word  ="shivhar"
var result=""
for (index=word.length; index>=0;index--)
{
     result= result+ word.charAt(index)
    console.log(result)
}

var word  ="chavan"
var result=""
for (index=word.length; index>=0;index--)
{
     result= result.concat( word.charAt(index))
    console.log(result)
}
var abc="shivhar";
var vowelcount=0;
for (var index =0; index<=abc.length; index++)
{
     var char = abc.charAt(index);
if (char=="a"|| char=="e"|| char == "i"|| char=="o"|| char=="u")
{
    vowelcount=vowelcount+1;
    console.log(vowelcount);
}
    
}
console.log(`total vowel count is ${vowelcount}`);