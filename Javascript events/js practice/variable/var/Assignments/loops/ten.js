var num=8
var x=0
var y=1
var z;

console.log(x)
console.log(y)

for(let i=2;i<=num;i++){
    z=x+y
    console.log(z)
    x=y
    y=z
}

console.log("******")

var num =8
var x=0
var y=1
var z;
let i=2

console.log(x)
console.log(y)
while(i<=num){
    z=x+y
    console.log(z)
    i=i+1
    x=y
    y=z
}

console.log("****")
var num =8
var x=0
var y=1
var z;
var j=2

console.log(x)
console.log(y)
do{
    z=x+y
    console.log(z)
    j=j+1
    x=y
    y=z
}while(j<=num)

