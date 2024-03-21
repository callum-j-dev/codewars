function capitalize(s){
    let evenArr = [];
    let oddArr = [];
    let stringArr = s.split('');
    
    stringArr.forEach((letter, index) => {
      evenArr.push(capitalizeEven(letter, index));
      oddArr.push(capitalizeOdd(letter, index));
    })
    
    return [evenArr.join(''), oddArr.join('')];
  };
  
  function capitalizeEven(letter, index) {
    return (index %2 === 0) ? letter.toUpperCase() : letter.toLowerCase();
  }
  
  function capitalizeOdd(letter, index) {
    return (index %2 !== 0) ? letter.toUpperCase() : letter.toLowerCase();
  }