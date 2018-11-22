'use strict'
//1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let month = date.getMonth();
let year = date.getFullYear();
let weekDay = date.getDay();
let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
console.log(day);