const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = '';
  if(!date) return "Unable to determine the time of year!";
  if(!(date instanceof Date)) throw new Error();
  if(Object.prototype.toString.call(date) !== "[object Date]") throw new Error();
    let month = date.getMonth();
    if(month < 2){
      season = 'winter';
    } else if( month < 5){
      season = 'spring';
    } else if( month < 8){
      season = 'summer';
    } else if( month < 11){
      season = 'autumn';
    } else{
      season = 'winter';
    }
    return season;
};
/*function getSeason(date) {
  let season = '';
  if( date === undefined || date === null){
    return season = 'Unable to determine the time of year!'
  } else{
    let month = date.getMonth();
    if(month < 2){
      season = 'winter';
    } else if( month < 5){
      season = 'spring';
    } else if( month < 8){
      season = 'summer';
    } else if( month < 11){
      season = 'autumn';
    } else{
      season = 'winter';
    }
    return season;
  }
};
console.log(getSeason(new Date(2011, 11, 1, 2, 3, 4, 567)));*/
