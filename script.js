"use strict";
jQuery(function ($) {
  $("#phone").mask("+38(099) 999 - 99 - 99");
});
const btns = document.querySelectorAll(".popUpBtn"),
  popUpBody = document.querySelector(".popUpBackground"),
  popUps = document.querySelectorAll(".popUpWindow"),
  closer = document.getElementById("popUpCloser"),
  pattern = document.querySelectorAll(".pattern"),
  filter1 = document.getElementById("filterSelector1"),
  filter2 = document.getElementById("filterSelector2");

for (const btn of btns) {
  btn.addEventListener("click", showPopUp);
}

for (const ptrn of pattern) {
  ptrn.addEventListener("click", changeForm);
}

function changeForm(event) {
  if (event.currentTarget.id == "pattern1") {
    filter1.style.display = "flex";
    filter2.style.display = "none";
    pattern[0].style.backgroundColor = "#ff8900";
    pattern[0].style.color = "#ffffff";
    pattern[1].style.backgroundColor = "#efefef";
    pattern[1].style.color = "#696969";
  } else if (event.currentTarget.id == "pattern2") {
    filter1.style.display = "none";
    filter2.style.display = "flex";
    pattern[1].style.backgroundColor = "#ff8900";
    pattern[0].style.backgroundColor = "#efefef";
    pattern[1].style.color = "#efefef";
    pattern[0].style.color = "#696969";
  } else return false;
}

function showPopUp(event) {
  const target = event.currentTarget;
  const popUp = document.getElementById(target.dataset.btn);
  popUp.style.display = "flex";
  popUpBody.style.display = "block";
  closer.style.display = "block";
  fixPosition(popUp);
  window.addEventListener("resize", fixPosition.bind(this, popUp));
  closer.addEventListener("click", close);
  popUpBody.addEventListener("click", close);
  function close(event) {
    const target = event.target;

    if (
      target.id == "popUpBackground" ||
      target.id == "popUpCloser" ||
      target.id == "popUpCloserInner"
    ) {
      window.removeEventListener("resize", fixPosition);
      popUp.style.display = "none";
      popUpBody.style.display = "none";
      closer.style.display = "none";
      closer.removeEventListener("click", close);
      popUpBody.removeEventListener("click", close);
    } else return false;
  }
}
function fixPosition(popUp) {
  popUp.style.left =
    Math.round(popUpBody.clientWidth / 2 - popUp.offsetWidth / 2) + "px";
  popUp.style.top = "300px";
  closer.style.left =
    Math.round(popUpBody.clientWidth / 2 + popUp.offsetWidth / 2 + 16) + "px";
  closer.style.top = "256px";
}
const mainA = document.querySelector(".mainA3");
const mainAImg = document.querySelector(".mainA3>img");
const nav = document.querySelector(".headerNavLinks");
mainA.addEventListener("click", navAppend);
function navAppend(event) {
  if (window.matchMedia("(max-width: 520px)").matches) {
    nav.style.display = "flex";
    mainAImg.style.opacity = "0";
    document.addEventListener("click", navRemove);
    event.preventDefault();
  }
}
function navRemove(event) {
  if (event.target.id == "mainA3" || event.target.className == "headerNavLinks")
    return false;
  if (nav.style.display == "flex") {
    nav.style.display = "none";
    mainAImg.style.opacity = "1";
    document.removeEventListener("click", navRemove);
  }
}
const menuHeader = document.querySelector(".menuHeader");
const menuLinks = document.querySelector(".menuLinks");
menuHeader.addEventListener("click", menuLinksAppend);
function menuLinksAppend() {
  if (window.matchMedia("(max-width: 1360px)").matches) {
    menuLinks.style.display = "flex";
    document.addEventListener("click", menuLinksRemove);
  }
}
function menuLinksRemove(event) {
  if (
    event.target.className == "menuLinks" ||
    event.target.className == "burger" ||
    event.target.className == "menuCaption"
  )
    return false;
  if (menuLinks.style.display == "flex") {
    menuLinks.style.display = "none";
    document.removeEventListener("click", menuLinksRemove);
  }
}

const categoriesRuler = document.querySelector(".categoriesRuler");
const categoriesOuter2 = document.querySelector(".categoriesOuter2");
categoriesRuler.addEventListener("click", categoriesAppend);
function categoriesAppend() {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    categoriesOuter2.style.display = "flex";
    categoriesOuter2.style.zIndex = "10";
    document.addEventListener("click", categoriesRemove);
  }
}
function categoriesRemove(event) {
  if (
    event.target.className == "categoriesOuterSpan" ||
    event.target.className == "categoriesOuter2" ||
    event.target.className == "categories categoriesRuler"
  )
    return false;
  if (categoriesOuter2.style.display == "flex") {
    categoriesOuter2.style.display = "none";
    categoriesOuter2.style.zIndex = "0";
    document.removeEventListener("click", categoriesRemove);
  }
}
