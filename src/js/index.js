"use strict";
let menuSideButton = document.getElementById("btnNavLogo");
let sideBarDiv = document.getElementById("siderLeft");

$(document).ready(function () {
  $(menuSideButton).click(function () {
    $(sideBarDiv).toggle(80);
  });

  $(document.getElementsByClassName("prijaviSe")).on("click", function () {
    window.location =
      "https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dhr%26next%3D%252Fwatch%253Fv%253DW1vzZXQGpeM&hl=hr&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
  });
});
