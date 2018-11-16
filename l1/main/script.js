'use strict';
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
let question3 = prompt("Введите обязательную статью расходов в этом месяце");
let question4 = prompt("Во сколько обойдется?");
let arrIncome = [];

let appData = {
 budget: money,
 timeData: time,
 expenses: {
  question1: question2,
  question3: question4
 },
 optionalExpenses: {},
 income: arrIncome,
 savings: false
};
alert("Ваш бюджет на 1 день: " + money / 30);