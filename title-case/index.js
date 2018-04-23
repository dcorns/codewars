/**
 * index
 * Created by dcorns on 4/20/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 *
 * First argument (required): the original string to be converted.
 Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
 */
'use strict';
function titleCase(title, minorWords='') {
  if (!title) return '';
  const t = title.split(' ');
  const ti = t.map(e => {
    if(e.length < 2) return e[0].toUpperCase();
    else return e[0].toUpperCase() + allToLower(e.slice(1));
  });
  if(minorWords){
    const mw = mapMinors(minorWords.split(' '));
    const result = ti.map((e,idx) => {
      if(!(idx === 0) && mw[e.toLowerCase()])
      return e[0].toLowerCase()+e.slice(1);
      return e;
    });
    return result.join(' ');
  }
  return ti.join(' ');
}
function allToLower(str){
  if(str.length === 1) return str.toLowerCase();
  return str[0].toLowerCase()+allToLower(str.slice(1));
}

function mapMinors(ary){
  const mm ={};
  ary.forEach((e) => {
    mm[allToLower(e)] =true;
  });
  return mm;
}
module.exports = titleCase;