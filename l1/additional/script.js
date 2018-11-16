'use strict'
let num = 33721;
let arr = [];
arr = num.toString().split('');

var mult = +arr[0];

for (let i = 1; i < arr.length; i++) {

 mult = mult * +arr[i];
}

console.log(mult);

let resString = (mult ** 3).toString();
alert(resString[0] + resString[1]);