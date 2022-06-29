let currentUl = document.querySelectorAll(".listaPostavke ");
let allUl = document.querySelectorAll(".listaPostavke li");

let firstLi = document.querySelector(".listaPostavke li:first-child");
let secondLi = document.querySelector(".listaPostavke li:nth-child(2");
let thirdLi = document.querySelector(".listaPostavke li:nth-child(3");
let fourthtLi = document.querySelector(".listaPostavke li:nth-child(4");
let fifthLi = document.querySelector(".listaPostavke li:nth-child(5");
let sixthLi = document.querySelector(".listaPostavke li:nth-child(6");
let seventhLi = document.querySelector(".listaPostavke li:nth-child(7");
let eighthLi = document.querySelector(".listaPostavke li:nth-child(8");

const myDropdown = document.querySelector("div.parentffff");
myDropdown.addEventListener("hide.bs.dropdown", (event) => {
  // alert("4wtergdf");
  event.preventDefault();
  return false;
});

firstLi.addEventListener("click", function (e) {
  ///alert("Dada");
});

// currentUl.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     alert("terst");
//   });
// });
