let menu = document.querySelectorAll(".menu");
let liItem = document.querySelectorAll("li");
let liItem2 = liItem[2];
menu[0].insertBefore(liItem2, liItem[1]);

let li5 = document.createElement('li');
li5.classList.add('menu-item');
li5.innerHTML = 'Пятый пункт';
menu[0].appendChild(li5);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

let title = document.querySelectorAll("#title");
title[0].innerHTML = "Мы продаем только подлинную технику Apple";

let column = document.querySelectorAll(".column");
let adv = document.getElementsByClassName("adv");
column[1].removeChild(adv[0]);

let promptText = document.getElementById("prompt");
promptText.textContent = prompt("Просим описать словами Ваше отношение к технике Apple");