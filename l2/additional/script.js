'use strict'
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
/*
let arr = week[0];
let i = 1;
while (week[i]) {
 arr = arr + ', ' + week[i];
 i++;
}
alert(arr);

let arr1 = week[0];
let j = 1;
do {
 arr1 = arr1 + ',\n' + week[j];
 j++;
}
while (week[j])
alert(arr1);
*/
let today = new Date();

for (let i = 0; i < week.length; i++) {
 if (i == week.length - 1 || i == week.length - 2) {
  if (i == today.getDay() - 1) {
   document.write(week[i].italics().bold() + '<br>');
  } else {
   document.write(week[i].bold() + '<br>');
  }
 } else {
  if (i == today.getDay() - 1) {
   document.write(week[i].italics() + '<br>');
  } else {
   document.write(week[i] + '<br>');
  }
 }
}

let arr = ["346125413", "230948578", "9827452293847", "723489320480932", "983274982374823", "30923745928735", "93249823409348"];
for (let a = 0; a < arr.length; a++) {
 if (arr[a].startsWith("3") || arr[a].startsWith("7")) {
  console.log(arr[a]);
 }
}