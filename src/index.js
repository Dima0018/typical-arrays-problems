
exports.min = function min (array) {
  if(array.length === 0){
    return 0;
  }
  let res = array[0];
  for(let i=1;i<array.length;i++){
    if (array[i]>res){
      res = array[i];
    }
  }
  return res;
}

exports.max = function max (array) {
  if(array.length === 0){
    return 0;
  }
  let res = array[0];
  for(let i=1;i<array.length;i++){
    if (array[i]<res){
      res = array[i];
    }
  }
  return res;
}

exports.avg = function avg (array) {
  if(array.length === 0){
    return 0;
  }  
  let res = array[0];
  for(let i=1;i<array.length;i++){
    res+= array[i];
  }
  return res / array.length;
}
