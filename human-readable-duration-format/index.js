/**
 * index
 * Created by dcorns on 5/20/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
 */
'use strict';
const combineDurations = (ary) => {
  return ary.reduce((acc,e,idx,arr) => {
    if(idx === arr.length-1) return acc + 'and ' + e;
    if(idx === arr.length-2) return acc + e + ' ';
    else return acc + e + ', ';
  },'');
};
function formatDuration (seconds) {
  if(seconds === 0) return 'now';
  const durationStore = [];
  let factor = Math.floor(seconds/31536000);
    if(factor >= 1) {
      if(factor >= 2) durationStore.push(factor + ' years');
      else durationStore.push(factor + ' year');
      seconds = seconds - (factor*31536000);
    }
    factor = Math.floor(seconds/86400);
    if(factor >= 1) {
      if(factor >= 2) durationStore.push(factor + ' days');
      else durationStore.push(factor + ' day');
      seconds = seconds - (factor*86400);
    }
    factor = Math.floor(seconds/3600);
    if(factor >= 1){
      if(factor >= 2) durationStore.push(factor + ' hours');
      else durationStore.push(factor + ' hour');
      seconds = seconds - (factor*3600);
    }
    factor = Math.floor(seconds/60);
    if(factor >= 1){
      if(factor >= 2) durationStore.push(factor + ' minutes');
      else durationStore.push(factor + ' minute');
      seconds = seconds - (factor * 60);
    }
    if(seconds >= 1 ){
      if(seconds >= 2) durationStore.push(seconds + ' seconds');
      else durationStore.push(seconds + ' second');
    }
    if(durationStore.length === 1) return durationStore[0];
    else return combineDurations(durationStore);
}
module.exports = formatDuration;