/**
 * index
 * Created by dcorns on 4/26/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const splitDigits = (n, ary=n.toString().split('')) => {
  return ary.map((e) => {
    return parseInt(e,10);
  });
};
module.exports = splitDigits;