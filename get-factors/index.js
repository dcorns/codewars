/**
 * get-factors
 * Created by dcorns on 4/26/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const getFactors = (n,ary=[n],i=n-1) => {
  if(i === 1) {
    ary.push(1);
    return ary;
  }
  if(n%i === 0) ary.push(i);
  return getFactors(n,ary,i-1);
};
module.exports = getFactors;