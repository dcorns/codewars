/**
 * index
 * Created by dcorns on 4/26/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const sumOfPowers = (base,power) => {
  return base.reduce((a,e) => {
    //Note: codewars.com has a problem parsing the JavaScript exponent operator '**'.That is why Math.pow() is used instead.
    return a + Math.pow(e, power++);
  },0);
};
module.exports=sumOfPowers;