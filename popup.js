// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//
'use strict';

try {


(document.querySelector('#Dark')).onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.executeScript(
  tabs[0].id,
 {file: 'Dark.js'  } ) ;
 });};
document.querySelector('#Light').onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.executeScript(
  tabs[0].id,
 {file: 'Light.js'  } ) ;
 });};


document.querySelector('#Normal').onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.executeScript(
  tabs[0].id,
 {file: 'Normal.js'  } ) ;
 });};




}
catch(err){ alert(err); console.log(err); console.log("Check popup.js file");}