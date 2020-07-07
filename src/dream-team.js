const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = "";
  if(!Array.isArray(members))
  return false;

  let firstLetters = members.map(s => { 
    if(s && typeof s === 'string')
    {
    s = s.trim();
    
    
      result = s[0].toUpperCase();
    return result;
    }
    return '';
  });
  arr = firstLetters.filter(s => {return s != ''}).sort();
  return arr.join('');
};
