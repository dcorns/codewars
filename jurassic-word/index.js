/**
 * index
 * Created by dcorns on 5/18/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
class JurassicWord {
  constructor() {
    this.deadDino = /_C.....C}>/;
    this.flowers = /iii.....iii/;
    this.leaves = /\|\|\|.....\|\|\|/;
    this.tRex = "VvvvV";
    this.velociraptor = "vvvvv" ;
    this.brachiosaurus = "uuuuu";
    this.triceratops = "uuVuu";
  }

  lunchTime(scene) {

    let what = this.deadDino.test(scene) ? 'a dead dino.' : this.flowers.test(scene) ? 'flowers.': this.leaves.test(scene) ? 'leaves.' : 'something.';
    let who;
    switch(scene.slice(-8,-3)){
      case this.tRex:
        who = what === 'a dead dino.' || what === 'something.' ? 'A T-Rex' : 'Something';
        break;
      case this.velociraptor:
        who = what === 'a dead dino.' || what === 'something.' ? 'A velociraptor' : 'Something';
        break;
      case this.brachiosaurus:
        who = what === 'flowers.' || what === 'leaves.' || what === 'something.' ? 'A brachiosaurus' : 'Something';
        break;
      case this.triceratops:
        who = what === 'flowers.' || what === 'something.' ? 'A triceratops' : 'Something';
        break;
      default:
        who = 'Something';
        break;
    }
   return (`${who} is eating ${what}`);
  }
}
module.exports = JurassicWord;