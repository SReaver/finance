//'use strict'
var num = 33721;
var arr = [];
arr = num.split('');

var mult = +arr[0];

for (var i = 1; i <= arr.length; i++) {
 mult = mult * +arr[i];
}
console.log(mult);