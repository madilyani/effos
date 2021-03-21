const tabsBtn = document.querySelectorAll(".tab__btn");
const tabsItems = document.querySelectorAll(".event");
tabsBtn.forEach((e) => {
  onTabClick(tabsBtn, tabsItems, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
      e.srcElement.parentElement
        .querySelector(".tab__btn")
        .classList.remove("active");
      console.log(e.srcElement.parentElement.querySelector(".event"));
      e.srcElement.parentElement
        .querySelector(".event")
        .classList.remove("active");
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
const accordBtn = document.querySelectorAll(".accord__btn");
const accordTab = document.querySelectorAll(".accordTab");
accordBtn.forEach((e) => {
  onAccordClick(accordBtn, accordTab, e);
});
function onAccordClick(accordBtn, accordTab, accord) {
  accord.addEventListener("click", function (e) {
    let currentAccord = accord;
    let tabAccord = currentAccord.getAttribute("data-accord");
    let currentAccordTab = document.querySelector(tabAccord);
    if (e.srcElement.classList.contains("accord")) {
      e.srcElement.classList.remove("accord");
      e.srcElement.parentElement
        .querySelector(".accordTab")
        .classList.remove("accord");
    } else if (!currentAccord.classList.contains("accord")) {
      accordBtn.forEach(function (accord) {
        accord.classList.remove("accord");
      });
      accordTab.forEach(function (accord) {
        accord.classList.remove("accord");
      });
      currentAccord.classList.add("accord");
      currentAccordTab.classList.add("accord");
    }
  });
}
var nav = document.getElementById("nav");
var navBtn = document.getElementById("navBtn");
var navClose = document.getElementById("navClose");
navBtn.onclick = function () {
  nav.classList.add("showNav");
};
navClose.onclick = function () {
  nav.classList.remove("showNav");
};
var all = document.getElementsByClassName("nav__body-link");
for (var i = 0; i < all.length; i++) {
  all[i].onclick = function () {
    nav.classList.remove("showNav");
  };
}
var i = document.createElement("input");
if ("placeholder" in i) {
}
// sticky start
// =====================================
window.onscroll = function () {
  scrollFunc();
};
window.onload = function () {
  scrollFunc();
};
let hero = document.getElementById("hero");
let headerSticky = document.getElementById("headerSticky");
let sticky = hero.offsetTop;
function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    headerSticky.classList.add("sticky");
  } else {
    headerSticky.classList.remove("sticky");
  }
}
// sticky end
// =====================================
