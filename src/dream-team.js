const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== "string" && Array.isArray(members) !== true) {
    return false;
  } else{
    let first_char_name = '';
    for (let i = 0; i < members.length; i++) {
      if(typeof members[i] !== "string"){
        delete members[i];
      }else{
        console.log(members[i]);
        if (members[i].match(/^[a-zA-Z  _]+$/i)) {
          members[i] = members[i].replace(/\s+/g, ' ').trim()
          first_char_name =`${first_char_name}${members[i].charAt(0).toUpperCase()}`;
        }
        console.log(first_char_name);       
      }
    }
    return first_char_name.split('').sort().join('');
  }
};

/*function createDreamTeam(members) {
  if (typeof members !== "string" && Array.isArray(members) !== true) {
    return false;
  } else{
    let first_char_name = '';
    for (let i = 0; i < members.length; i++) {
      if(typeof members[i] !== "string"){
        delete members[i];
      }else{
        console.log(members[i]);
        if (members[i].match(/^[a-zA-Z  _]+$/i)) {
          members[i] = members[i].replace(/\s+/g, ' ').trim()
          first_char_name =`${first_char_name}${members[i].charAt(0).toUpperCase()}`;
        }
        console.log(first_char_name);       
      }
    }
    return first_char_name.split('').sort().join('');
  }
};*/
