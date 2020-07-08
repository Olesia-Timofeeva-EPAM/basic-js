const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr ) {
  if(!Array.isArray(arr))
    throw new Exception('Error');

  let result = Array.from(arr);
  
  for(let i = 0; i < result.length; i++)
  {
    if(typeof result[i] === 'string')
    {
      switch(result[i])
      {
        case '--discard-next':
          delete result[i];
          delete result[i+1];
          break;
        case '--discard-prev': 
        delete result[i];
        delete result[i-1];
          break;
        case '--double-next':
          if(result[i+1] !== undefined)
          result[i] = result[i+1];
          else
            delete result[i];
            break;
        case '--double-prev': 
        if(result[i-1] !== undefined)
        result[i] = result[i-1];
          else
            delete result[i];
            break;
      } 
    }
  }

 return result.filter(el => el !== undefined);
};
