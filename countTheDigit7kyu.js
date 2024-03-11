function nbDig(n, d) {
    // your code
  let squares = [];
  for (let i = 0; i <= n; i++) {
    squares.push(i * i);
  }
  
  let squareString = squares.reduce((string, current) => string += String(current), '');
  let digitCount = 0;
  for (let i = 0; i < squareString.length; i++) {
    if (squareString.charAt(i) === String(d)) {
      digitCount++;
    }
  }
  
  return digitCount;
}