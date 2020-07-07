const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
for( var i = 0, len = matrix.length; i < len; i++ ) {
  for(var j=0, rowLen = matrix[i].length; j < rowLen; j++)
  {
    if( matrix[i][j] === '^^' ) {
        result++;
    }
  }
}
  return result;
};
