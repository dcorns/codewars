/**
 * index
 * Created by dcorns on 4/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
function cakes(recipe, available) {
  const r = Object.keys(recipe);
  const amts = r.map((e)=>{
    if(available.hasOwnProperty(e)){
      return Math.trunc(available[e]/recipe[e]);
    }
    else return 0;
  });
  return amts.reduce((cakes,e)=>{
    return cakes > e ? e:cakes;
  });
}
module.exports = cakes;

console.log(cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200}));