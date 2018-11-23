'use strict';

let btnStart = document.getElementById("start");

let budgetValue = document.getElementsByClassName("budget-value")[0];
let dayBudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0];
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0];
let yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];
let yearValue = document.getElementsByClassName("year-value")[0];
let monthValue = document.getElementsByClassName("month-value")[0];
let dayValue = document.getElementsByClassName("day-value")[0];

let btnExpensesItem = document.getElementsByClassName("expenses-item-btn")[0];
let inputExpenses = document.getElementsByClassName("expenses-item");

let buttons = document.getElementsByTagName("button");
let btnSubmitOptionalExpenses = buttons[1];
let btnCountBudget = buttons[2];

let optionalExpensesInput = document.querySelectorAll(".optionalexpenses-item");

let txtChooseIncome = document.querySelector(".choose-income");
let chbSavings = document.querySelector("#savings");
let txtChooseSum = document.querySelector(".choose-sum");
let txtChoosePercent = document.querySelector(".choose-percent");
let inputYear = document.querySelector(".year-value");
let inputMonth = document.querySelector(".month-value");
let inputDay = document.querySelector(".day-value");

let money, time;

btnStart.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD");
	money = +prompt("Ваш бюджет на месяц?");
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?");
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	inputYear.value = new Date(Date.parse(time)).getFullYear();
	inputMonth.value = new Date(Date.parse(time)).getMonth() + 1;
	inputDay.value = new Date(Date.parse(time)).getDate();

});

btnExpensesItem.addEventListener('click', function () {
	let sum = 0;
	for (let i = 0; i < inputExpenses.length; i++) {
		let a = inputExpenses[i].value,
			b = inputExpenses[++i].value;
		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
			a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
			sum += +b;
		} else {

			i--;

		}
	}
	expensesValue.textContent = sum;
});

btnSubmitOptionalExpenses.addEventListener('click', function () {
	for (let i = 0; i < optionalExpensesInput.length; i++) {
		let item = optionalExpensesInput[i].value;
		appData.optionalExpenses[i] = item;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
	}
});

btnCountBudget.addEventListener("click", function () {

	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed();

		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Минимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		dayBudgetValue.textContent = "Произошла ошибка";
	}


});

txtChooseIncome.addEventListener('input', function () {

});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {

	},

	checkSavings: function () {
		if (appData.savings) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
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