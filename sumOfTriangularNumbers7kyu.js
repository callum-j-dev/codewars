function sumTriangularNumbers(n) {
    // P: index of last triangular number we are summing
    // R: sum of first n triangular numbers
    // E: n = 4 => 1 + 3 + 6 + 10 = 20
    // P: use nested loops up to n, finding each triangle number as a sum in nested loop, push triangle number to array, sum array
    
    let triangles = [];
    
    for (let i = 1; i <= n; i++) {
      let triangle = 0;
      for (let j = 1; j <= i; j++) {
        triangle += j;
      }
      
      triangles.push(triangle);
    }
    
    return triangles.reduce((sum, current) => sum += current, 0);
  }