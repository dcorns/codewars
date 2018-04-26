/**
 * index
 * Created by dcorns on 4/26/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const splitDigits = require('../split-digits');
const sumOfPowers = require('../sum-of-powers');
function digPow(n, p){
  const sum = sumOfPowers(splitDigits(n),p);
  if(sum%n === 0) return sum/n;
  return -1;
}
module.exports = digPow;