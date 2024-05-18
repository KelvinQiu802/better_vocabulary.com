// ==UserScript==
// @name         Better Vocabulary.com
// @namespace    http://tampermonkey.net/
// @version      2024-05-18
// @description  Better Vocabulary.com
// @author       Kelvin Qiu
// @match        https://www.vocabulary.com/dictionary/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vocabulary.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Remove col-2
  const col2 = document.querySelector('.col-2');
  while (col2.firstChild) {
    col2.removeChild(col2.firstChild);
  }

  // Move definitions to col-2
  const col1 = document.querySelector('.col-1');
  const wordDefinitions = col1.querySelector('.word-definitions');

  if (wordDefinitions) {
    col2.insertBefore(wordDefinitions, col2.firstChild);
  }

  // Remove banner background image
  const banner = document.querySelector('.banner');
  banner.style.background = 'none';

  // Change text style
  const shortElements = document.querySelectorAll('.short');
  shortElements.forEach((element) => {
    element.style.fontWeight = 'bold';
  });

  // Remove AD
  function waitForElementToDisplay(selector, time) {
    if (document.querySelector(selector) != null) {
      document.querySelector(selector).remove();
      return;
    } else {
      setTimeout(function () {
        waitForElementToDisplay(selector, time);
      }, time);
    }
  }

  waitForElementToDisplay('.vcom_progress', 100);

  // Remove Citation Section
  const citationSection = document.querySelector('.section.citation');
  if (citationSection) {
    citationSection.remove();
  }
})();
