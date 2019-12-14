'use strict';

function Bowling(){
  this.rolls = [];
}

Bowling.prototype.pinsDown = function(pins){
  this.rolls.push(pins);
}

Bowling.prototype.score = function(){
  var result = 0;
  for(var i = 0; i < 20; i++){
    result += this.rolls[i];
  }
  return result;
}