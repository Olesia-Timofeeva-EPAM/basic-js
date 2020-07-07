const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date)
     return 'Unable to determine the time of year!';
  if((!date instanceof Date) || ((Object.prototype.toString.call(date) !== '[object Date]')))
  throw new Exception('THROWN');
  let season;
  try{
    let month = date.getMonth();
    switch (month) { 
      case 11:
        case 1:
        case 0:
            season = 'winter';
        break;
        case 2:
        case 3:
        case 4:
            season = 'spring';
        break;
        case 5:
        case 6:
        case 7:
            season = 'summer';
        break;
        case 8:
        case 9: 
        case 10:
            season = 'fall';
        break;
  }
}
  catch(e)
  {
    throw new Exception('THROWN');
  }
  return season;
};
