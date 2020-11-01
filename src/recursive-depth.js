const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
};
/*function calculateDepth( arr ) {
  if (Array.isArray(arr)) return 1 + Math.max(...arr.map(t => calculateDepth(t)))
  else return 0
}
console.log(calculateDepth([1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]))
console.log(calculateDepth([1,[1]]))*/