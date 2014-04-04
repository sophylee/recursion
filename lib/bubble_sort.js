"use strict";

var readline = require('readline');

var READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var crazyBubbleSort = function(arr, sortCompletionCallback) {
  var sortPassCallback = function(madeAnySwaps){
    if (madeAnySwaps == true){
      performSortPass(arr, 0, false, sortPassCallback)
    } else if (madeAnySwaps == false){
      sortCompletionCallback(arr);
      READER.close()
    }
  }
  sortPassCallback(true)
}

var askLessThan = function(el1, el2, callback) {
  READER.question("Is " + el1 + " less than " + el2 + "?",
    function(reply) {
      var value = (reply === "yes") ? true : false;
      callback(value);
    });
  }

var performSortPass = function(arr, i, madeAnySwaps, callback) {
  if (i < arr.length - 1) {
    askLessThan(arr[i], arr[i + 1], function(lessThan) {
      if (!lessThan) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
        performSortPass(arr, i + 1, madeAnySwaps, callback);
      } else {
        performSortPass(arr, i + 1, madeAnySwaps, callback);
      }
    });
  } else if (i === (arr.length - 1)) {
    callback(madeAnySwaps);
  }
}