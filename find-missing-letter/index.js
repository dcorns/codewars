/**
 * index
 * Created by dcorns on 4/20/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * given an array of ordered letters with exactly one letter missing, return the missing letter
 */
'use strict';
const findMissingLetter = array => {
  if(array.length < 3) return String.fromCharCode(array[array.length-1].charCodeAt(0)-1);
  let aHalfArray = array.slice(Math.trunc(array.length/2));
  let bHalfArray = array.slice(0,Math.trunc(array.length/2)+1);
  if(array.length%2 === 0){
    aHalfArray = array.slice(array.length/2 - 1);
    bHalfArray = array.slice(0,array.length/2 + 1);
  }
  if(missingLetters(aHalfArray)) return findMissingLetter(aHalfArray);
  else return findMissingLetter(bHalfArray);
};
const missingLetters = (ary) => {
  const noMissingLettersSum = (ary[0].charCodeAt(0)*(ary.length))+(ary.length*(ary.length + 1)/2)-ary.length;
  const actualSum = ary.reduce((a,e) => {
    return a + e.charCodeAt(0);
  },0);
  return actualSum !== noMissingLettersSum;
};
module.exports = findMissingLetter;