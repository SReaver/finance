'use strict'
let str = "урок - 3 - был слишком легким";

str = str[0].toUpperCase() + str.slice(1);
alert(str);
str = str.replace(/-/g, ' ');
alert(str);
console.log(str);
str = str.slice(str.indexOf('легким'));
console.log(str);
str = str.replace(/[и, м]/g, "о");
alert(str);