function strong(n) {
    let numArr = String(n).split('').map(num => Number(num));
    let factSum = numArr.reduce((total, current) => total + factorial(current), 0);
    
    return (factSum === n) ? "STRONG!!!!" : "Not Strong !!";
    
    // return "STRONG!!!!" || "Not Strong !!" ;
  }
  
  function factorial(num) {
    let product = 1;
    let i = num;
    while (i > 0) {
      product *= i;
      i--;
    }
    
    return product;
  }