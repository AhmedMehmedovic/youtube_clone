let settingsUl = new CreateSettingsList($("#listaPostavke"), firstTemplate);

const myDropdown = document.querySelector("div.parentffff");
myDropdown.addEventListener("hide.bs.dropdown", (event) => {
  event.preventDefault();
  return false;
});
let prviProzor = document.querySelector(".listaPostavke li:first-child");
prviProzor.addEventListener("click", function (e) {
  settingsUl.deleteElements();
  settingsUl.createElements();
});
let ul = document.querySelector(".listaPostavke");
console.log(ul);
ul.addEventListener("change", function () {
  let vratiNazadBtn = document.querySelector(".vratiNazad");
  console.log(vratiNazadBtn);

  // vratiNazadBtn.addEventListener("click", function () {
  //   console.log(vratiNazadBtn);
  //   if (prviProzor.style.display == "none") {
  //     settingsUl.showElements();
  //   } else if (prviProzor.stayle.display !== "none") {
  //     settingsUl.deleteElements();
  //   }
  // });
});
