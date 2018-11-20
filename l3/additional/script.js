'use strict'
/*let str = "урок - 3 - был слишком легким";

str = str[0].toUpperCase() + str.slice(1);
alert(str);
str = str.replace(/-/g, ' ');
alert(str);
console.log(str);
str = str.slice(str.indexOf('легким'));
console.log(str);
str = str.replace(/[и, м]/g, "о");
alert(str);
*/

let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
 if (!isNaN(arr[i])) {
  sum = sum + (arr[i] ** 3);
 }
}
console.log(sum);
console.log(Math.sqrt(sum));

function inputParam(param) {
 if (typeof (param) != 'string') {
  alert("Входной параметр не является строчным");
 }
 param = param.trim();
 console.log(param);
 if (param.length > 50) {
  param = param.slice(0, 49) + "...";
 }
 console.log(param);
}


inputParam("   Отладка – неотъемлемая часть программирования. Главный помощник JavaScript джуниора – консоль  разработчика Google Chrome. Чем быстрее вы с ней подружитесь, тем эффективнее будет ваша работа.    ");