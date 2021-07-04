let menu = document.getElementById("menu");
let hide = document.getElementById("hide");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let body = document.querySelector("body");
let promo = document.querySelector("#promo");

menu.addEventListener("click", clickMenu);
hide.addEventListener("click", hideMenu);
promo.addEventListener("click", promoHide);

function clickMenu() {
  let allDiv = document.getElementById("nav");
  allDiv.style.display = "block";
}
function hideMenu() {
  let allDiv = document.getElementById("nav");
  allDiv.style.display = "none";
}
function promoHide() {
  promo.style.display = "none";
}
