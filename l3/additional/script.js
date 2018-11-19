'use strict'
let str = "урок - 3 - был слишком легким";

str = str[0].toLocaleUpperCase() + str.slice(1);
//alert(str);
str.replace(\-\g, " ");
alert(str);
console.log(str);