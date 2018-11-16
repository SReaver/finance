'use strict';
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");
let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
let answer4 = prompt("Во сколько обойдется?");


let appData = {
 budget: money,
 timeData: time,
 expenses: {},
 optionalExpenses: {},
 income: [],
 savings: false
};

appData.expenses['Введите обязательную статью расходов в этом месяце'] = answer1;
appData.expenses['Во сколько обойдется?'] = answer2;
appData.expenses['Введите обязательную статью расходов в этом месяце'] = answer3;
appData.expenses['Во сколько обойдется?'] = answer4;
alert("Ваш бюджет на 1 день: " + money / 30);