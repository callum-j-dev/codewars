function vertMirror(strng) {
    // Your code
  let stringArr = strng.split('\n');
  let arrArr = stringArr.map(string => {
    let arr = string.split('');
    return arr.reverse().join('');
  })
  
  return arrArr.join('\n');
}
function horMirror(strng) {
    // Your code
  let stringArr = strng.split('\n');
  return stringArr.reverse().join('\n');
}
function oper(fct, s) {
    // Your code
  return fct(s);
}