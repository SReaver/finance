'use strict';
let money, time;

function start() {

 time = prompt("Введите дату в формате YYYY-MM-DD");
 while (isNaN(money) || money == "" || money == null) {
  money = +prompt("Ваш бюджет на месяц?");
 }
}

start();



let appData = {
 budget: money,
 timeData: time,
 expenses: {},
 optionalExpenses: {},
 income: [],
 savings: true,
 chooseExpenses: function () {
  for (let i = 0; i < 2; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется?");
   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
    a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
   } else {

    i--;

   }
  }
 },
 detectDayBudget: function () {
  appData.moneyPerDay = (appData.budget / 30).toFixed(); //возвращает строковое значение
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
 },
 detectLevel: function () {
  if (appData.moneyPerDay < 100) {
   console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
   console.log("высокий уровень достатка")
  } else {
   console.log("Произошла ошибка");
  }
 },
 checkSavings: function () {
  if (appData.savings) {
   let save = +prompt("Какова сумма накоплений?"),
    percent = +prompt("Под какой процент?");
   appData.monthIncome = save / 100 / 12 * percent;
   alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
 },
 chooseOptExpenses: function () {
  for (let i = 1; i < 4; i++) {
   let item = prompt("Статья необязательных расходов " + i + "?");
   appData.optionalExpenses[i] = item;
  }
 },
 chooseIncome: function () {
  let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
  if (typeof (items) != "string" || items == null || items == "") {
   this.chooseIncome();
  } else {

   function addToArray(arr) {
    arr.trim().split(',')
     .forEach(function (item) {
      if (appData.income.indexOf(item.trim()) == -1) {
       appData.income.push(item.trim());
      }
     });
   }
   addToArray(items);

   let additionalIncome = prompt('Может что-то ещё?');
   addToArray(additionalIncome);

   appData.income.sort();
   document.write("Способы доп. заработка:<br>");
   appData.income.forEach(function (item, i) {
    document.write((i + 1) + ": " + item + "<br>");
   });
  }

 }

};
console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
 if (typeof (appData[key]) == "object") {
  console.log("Свойство " + key + " является объектом");
 } else if (typeof (appData[key]) == "function") {
  console.log("Свойство " + key + " является функцией");
 } else {
  console.log("Свойство " + key + " имеет значение " + appData[key]);
 }
}

//chooseExpenses();
/*
let i = 0;
while (i < 2) {
 let a = prompt("Введите обязательную статью расходов в этом месяце"),
  b = prompt("Во сколько обойдется?");
 if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
  a != '' && b != '' && a.length < 50) {
  console.log("done");
  appData.expenses[a] = b;
  i++;
 } else {
  if (i < 0) {
   i--;
  };
 }
}
*/
/*
let i = 0;
do {
 let a = prompt("Введите обязательную статью расходов в этом месяце"),
  b = prompt("Во сколько обойдется?");
 if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
  a != '' && b != '' && a.length < 50) {
  console.log("done");
  appData.expenses[a] = b;
  i++;
 } else {
  if (i < 0) {
   i--;
  };
 }
} while (i < 2);
*/





console.log(appData);