"use strict";

var _Stack_obj = require("../../baseClass/Stack_obj");

let s = new _Stack_obj.Stack();
console.log("s", s.size());
let a = new Array(10).fill(666).map(function (item) {
  console.log("item", item);
});