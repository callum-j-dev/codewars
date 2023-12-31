function isSortedAndHow(array) {
  let outStr = isAsc(array) ? 'yes, ascending' : isDes(array) ? 'yes, descending' : 'no';
  
  return outStr;
}

function isAsc(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]){
      return false;
    }
  }
  return true;
}

function isDes(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]){
      return false;
    }
  }
  return true;
}