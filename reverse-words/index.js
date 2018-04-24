/**
 * index
 * Created by dcorns on 4/23/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.
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