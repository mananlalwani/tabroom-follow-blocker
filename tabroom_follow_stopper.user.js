// ==UserScript==
// @name         Tabroom Follow Stopper
// @namespace    https://www.mananlalwani.com
// @version      1.0
// @description  Stops the tabroom follow button from functioning on the updates page
// @author       Manan Lalwani
// @match        https://www.tabroom.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  console.log("Tabroom follow link stopper running... ");
  console.log("By Manan Lalwani");

  var url = window.location.href;
  if (url.indexOf("updates") == -1) {
    return;
  }

  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (
      link.getAttribute("class") == "yellow block" ||
      link.getAttribute("class") == "smallish row hover full nospace white even" ||
      link.getAttribute("class") == "smallish row hover full nospace white odd"
    ) {
      link.removeAttribute("href");
    }
  }
})();
