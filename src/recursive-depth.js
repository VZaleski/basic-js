const CustomError = require("../extensions/custom-error");

/*module.exports = class DepthCalculator {
  calculateDepth( arr ) {
      if (Array.isArray(arr)){
        return 1 + Math.max(...arr.map(t => getArrayDepth(t)));
      } 
      else return 0;
  }
};
console.log(DepthCalculator.calculateDepth([123]));*/
/*class DepthCalculator {
  calculateDepth( arr ) {
      if (Array.isArray(arr)){
        return 1 + Math.max(...arr.map(t => calculateDepth(t)));
      } 
      else return 0;
  }
};
const depthCalc = new DepthCalculator();
depthCalc.calculateDepth([1, 2, 3, 4, 5]);
console.log(depthCalc);*/

class DepthCalculator{
  calculateDepth( arr ) {
    if (Array.isArray(arr)){
      return 1 + Math.max(...arr.map(t => calculateDepth(t)));
    } else {
      return 0;
    }
  }
}
const depth = new DepthCalculator();
depth.calculateDepth([1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]);
console.log(depth);
/*function calculateDepth( arr ) {
  if (Array.isArray(arr)) return 1 + Math.max(...arr.map(t => calculateDepth(t)))
  else return 0
}
console.log(calculateDepth([1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]))
console.log(calculateDepth([1,[1]]))*/