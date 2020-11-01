const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
  let seconds = 0;
  let turns = 0;
  turns = 2**disksNumber - 1;
  seconds = Math.floor((3600 / turnsSpeed)*turns);
  return {turns : turns, seconds : seconds};
};
/*function calculateHanoi( disksNumber, turnsSpeed ) {
  let seconds = 0;
  let turns = 0;
  turns = 2**disksNumber - 1;
  seconds = Math.floor((3600 / turnsSpeed)*turns);
  return {turns : turns, seconds : seconds};
};
console.log(calculateHanoi(5, 4074));*/
