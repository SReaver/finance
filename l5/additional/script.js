'use strict'
//1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
let date = new Date();
let hour = addZeroToDate(date.getHours());
let minute = addZeroToDate(date.getMinutes());
let second = addZeroToDate(date.getSeconds());
let day = addZeroToDate(date.getDate());
let month = addZeroToDate(date.getMonth() + 1);
let year = date.getFullYear();
let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

document.write(hour + ":" + minute + ":" + second + " " + day + "." + month + "." + year + " ");

//2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры(из 1.6.2018 сделает 01.06.2018)
function addZeroToDate(date) {
 if (date.toString().length == 1) {
  return "0" + date.toString();
 } else {
  return date;
 }
}

//3) Напишите функцию, которая выводит на страницу текущий день недели на русском языке
document.write(days[date.getDay()]);

//4) Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней

function isValidDate(d) {
 return d instanceof Date && !isNaN(d);
}

function parseDate(date) {
 console.log(date);
 //if (isValidDate(date)) {
 let temDateArr = date.split('.');
 //return new Date(temDateArr[1] + "/" + temDateArr[0] + '/' + temDateArr[2]);
 let tDate = new Date(temDateArr[1] + "/" + temDateArr[0] + '/' + temDateArr[2]);
 if (isValidDate(tDate)) {
  return tDate;
 } else {
  document.getElementById("delta").innerHTML = '<span style="color:red;">Введённые даты не соответтвуют формату "ДД.ММ.ГГГГ", например "16.12.2017"</span>';
 }
}

function dateToMS(date) {
 return date.getTime();
}

function returnDeltaDay(ms1, ms2) {
 return ms1 > ms2 ? ms1 - ms2 : ms2 - ms1;
}

function countDeltaDays(date1, date2) {
 return ((returnDeltaDay(dateToMS(parseDate(date1)), dateToMS(parseDate(date2)))) / 1000 / 3600 / 24);
}

function putCountedValue(date1, date2) {
 document.getElementById("delta").innerHTML = countDeltaDays(date1, date2);
}

let inputDate1 = document.getElementById("date1");
let inputDate2 = document.getElementById("date2");
document.getElementById("count-delta-days__btn").onclick = function () {
 putCountedValue(inputDate1.value, inputDate2.value);
}

putCountedValue(inputDate1.value, inputDate2.value);