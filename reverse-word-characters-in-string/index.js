/**
 * index
 * Created by dcorns on 5/18/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Reverse word characters in a string
 * In: These are the words
 * Out: esehT era eht sdrow
 */
'use strict';
function reverseWords(str) {
  return str.split(' ').map((e) => {
    return flip(e);
  }).join(' ');
}
function flip(word){
  if(word.length < 1) return word;
  return word[word.length-1] + flip(word.slice(0,word.length-1));
}
const rwcis = (str) => {
  const strArr = str.split(' ');
  const r = [];
  strArr.forEach((e) => {
    r.push(reverseWords(e));
  });
  const result = r.join(' ');
  return result;
};
module.exports = rwcis;