function toCsvText(array) {
    // good luck
   let stringArr = array.map(arr => innerArrToString(arr));
   return stringArr.join('\n');
 }
 
 function innerArrToString(arr) {
   return arr.join(",");
 }