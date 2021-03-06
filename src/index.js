
exports.min = function min (array) {
  if(!array || array.length == 0){
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

exports.max = function max (array) {
  if(!array || array.length == 0){
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

exports.avg = function avg (array) {
  if(!array || array.length == 0){
    return 0;
  }  
  let res = array[0];
  for(let i=1;i<array.length;i++){
    res= res + array[i];
  }
  if (res == 0) {return 0;}
  else{return res / array.length;}
}
