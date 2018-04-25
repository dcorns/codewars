/**
 * index
 * Created by dcorns on 4/23/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
 */
'use strict';
function findEvenIndex(arr)
{
  for(let i = 1; i < arr.length; i++){
    if((arr.slice(i).reduce((a,e) => { return a + e},0)) === (arr.slice(0,i+1).reduce((a,e) => {return a + e},0))) return i;
  }
  return -1
}
module.exports = findEvenIndex;