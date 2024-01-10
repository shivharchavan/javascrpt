let array =[1,2,3,4]
console.log(array);
console.log("access element from string==================================");
const abc=[1,2,3,4,5]
const aa=abc[2]
console.log(aa);


console.log("wap to sum of numbers =========================================");
const an=[1,2,3,4]
let sum=0;
for ( let index=0;index<an.length;index++)
{
     sum= sum+an[index];
    console.log(sum ,`${sum}`);

}
console.log("find the index of pewrticular element =============================")
let acc=[1,2,3,4,5,6]
let ss=acc.indexOf(4)
console.log(ss);

console.log ("reverse order of number==============================")
const xyz=[1,2,3,4,5,6]
for (let index=xyz.length-1; index>=0;index--)
{
    const rr=xyz[index];
    console.log(rr)

}
console.log("adding array element at end position===================================")
const por =["jenny","meany","seany"]
por.push("tina");
console.log(por);


console.log("adding array element at fist position===================================")
por.unshift("narayan murti")
console.log(por);


console.log("moving  element at fist position===================================")
const kkl=[11,22,33,44,55]
kkl.shift();
console.log(kkl);



console.log("moving  element at last position===================================")
const ggh =[11,22,33,44,55]
ggh.pop();
console.log(ggh);



console.log("selecting multiple elements===================================")
let rrr=[11,22,33,44,55,66]
let ttt=rrr.slice(2);
console.log(ttt);


