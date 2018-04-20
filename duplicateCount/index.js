/**
 * index
 * Created by dcorns on 4/20/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 */
'use strict';
function duplicateCount(text){
  const distinctLetters = {};
  const duplicates = {};
  [...text].forEach((e) => {
    if(distinctLetters[e.toUpperCase()]){
      duplicates[e.toUpperCase()] = true;
    }
    else distinctLetters[e.toUpperCase()] = true;
  });
  return Object.keys(duplicates).length;
}
module.exports = duplicateCount;