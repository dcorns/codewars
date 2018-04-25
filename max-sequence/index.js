/**
 * index
 * Created by dcorns on 4/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Returns the maximum sum posible from contiguous subsets of integers in a given array of +/- integers
 */
'use strict';
function maxSequence(arr){
  let currentMax = 0;
  return arr.reduce((max,e)=> {
    e > e+currentMax ? currentMax = e : currentMax += e;
    if(currentMax > max) max = currentMax;
    return max;
  },0);
}
module.exports = maxSequence;