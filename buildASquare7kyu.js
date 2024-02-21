function generateShape(integer){
    let squareArr = [];
    for (let i = 0; i < integer; i++) {
      squareArr.push(repeatPlus(integer));
    }
    
    return squareArr.join('\n');
  }
  
  function repeatPlus(integer) {
    let outStr = '';
    for (let i = 0; i < integer; i++)  {
      outStr += '+';
    }
    
    return outStr;
  }