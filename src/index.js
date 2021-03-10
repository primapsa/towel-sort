
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix && matrix.length > 0){
    
     result = matrix.reduce(function(acc,item,index){
      if (index%2 !== 0) item.reverse()
      return acc.concat(item);
    }
    )
  }
  return result;
}
