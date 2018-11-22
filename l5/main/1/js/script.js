let menu = document.querySelector(".menu");
let liItem = document.querySelectorAll("li");

menu.insertBefore(liItem[2], liItem[1]);

let li5 = document.createElement('li');
li5.classList.add('menu-item');
li5.innerHTML = 'Пятый пункт';
menu.appendChild(li5);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

let title = document.querySelector("#title");
title.innerHTML = "Мы продаем только подлинную технику Apple";

let column = document.querySelectorAll(".column");
let adv = document.getElementsByClassName("adv");
column[1].removeChild(adv[0]);

let promptText = document.getElementById("prompt");
promptText.textContent = prompt("Просим описать словами Ваше отношение к технике Apple");