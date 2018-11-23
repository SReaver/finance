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