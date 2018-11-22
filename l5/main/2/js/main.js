let btnStart = document.getElementById("start");

let budgetValue = document.getElementsByClassName("budget-value");
let dayBudgetValue = document.getElementsByClassName("daybudget-value");
let levelValue = document.getElementsByClassName("level-value");
let expensesValue = document.getElementsByClassName("expenses-value");
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value");
let incomeValue = document.getElementsByClassName("income-value");
let monthSavingsValue = document.getElementsByClassName("monthsavings-value");
let yearSavingsValue = document.getElementsByClassName("yearsavings-value");
let yearValue = document.getElementsByClassName("year-value");
let monthValue = document.getElementsByClassName("month-value");
let dayValue = document.getElementsByClassName("day-value");

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