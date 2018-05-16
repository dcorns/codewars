/**
 * index
 * Created by dcorns on 5/15/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().
 * The numbers are always positive.
 The numbers are in the range (1  ≤  a, b, c  ≤  10).
 You can use the same operation more than once.
 _It's not necessary to place all the signs and brackets.
 Repetition in numbers may occur .
 You cannot swap the operands. For instance, in the given example (1,2,3) you cannot get expression (1 + 3) * 2 = 8.
 */
'use strict';
function expressionMatter(a, b, c) {
  if (a > 1 && b > 1 && c > 1) return a*b*c;
  if (a+b < b+c && c !==1) return (a+b) * c;
  else if (a !== 1) return a * (b+c);
  else if(a===1 && c===1 && b !==1) return a+b+c;
  else return 3;
}
module.exports = expressionMatter;