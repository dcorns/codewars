/**
 * index
 * Created by dcorns on 4/26/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Get the number n (n>0) to return the reversed sequence from n to 1.

 Example : n=5 >> [5,4,3,2,1]
 */
'use strict';

const reverseSeq = (n) => {
  const result = [];
  while(n>0){
    result.push(n--);
  }
  return result;
};