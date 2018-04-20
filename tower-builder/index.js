/**
 * index
 * Created by dcorns on 4/20/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Build Tower by the following given argument:
 number of floors (integer and always greater than 0).

 Tower block with 6 floors is represented as
 [
 '     *     ',
 '    ***    ',
 '   *****   ',
 '  *******  ',
 ' ********* ',
 '***********'
 ]
 */
'use strict';
function towerBuilder(nFloors, ary=['*']) {
  if(nFloors === 1) return addSpaces(ary,0);
  return towerBuilder(nFloors-1,[...addSpaces(ary,0),ary[ary.length-1]+'**']);
}
function addSpaces(ary,idx){
  if(idx === ary.length-1) return ary;
  ary[idx] = ' ' + ary[idx] + ' ';
  return addSpaces(ary,idx+1);
}
module.exports = towerBuilder;