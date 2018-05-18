/**
 * index
 * Created by dcorns on 5/18/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
function getMiddle(s)

{
  const len = s.length;
  const evenMiddle = len/2-1;
  const oddMiddle = (len+1)/2-1;
  return (len%2 ===0) ? s.slice(evenMiddle,evenMiddle+2) : s.slice(oddMiddle,oddMiddle+1);
}
module.exports = getMiddle;