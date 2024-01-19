function insertDash(num) {
    //code me
   let numArr = String(num).split('');
   let outArr = [];
   
   numArr.forEach((digit, index, arr) => {
     if (index > 0 && isOdd(digit) && isOdd(arr[index - 1])) {
       outArr.push('-');
       outArr.push(digit);
     } else {
       outArr.push(digit);
     }
   });
   
   return outArr.join('');
 }
 
 function isOdd(num) {
     return num % 2 !== 0;
   }