/**
 * index
 * Created by dcorns on 4/20/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * given a string, replace every letter with its position in the alphabet.

 If anything in the text isn't a letter, ignore it and don't return it.

 a being 1, b being 2, etc.
 ('abc') = '1 2 3'
 */
'use strict';
const a = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26};
function alphabetPosition(text, result='') {
  if(text === '') return result.slice(1);
  if(a[text[0].toLowerCase()]) {
    result=result+' '+a[text[0].toLowerCase()];
  }
  return alphabetPosition(text.slice(1),result);
}
console.log(alphabetPosition('This is my text'));
module.exports = alphabetPosition;