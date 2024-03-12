function sumCubes(n){
    let cubes = [];
    for (let i = 1; i <= n; i++) {
      cubes.push(i ** 3);
    }
    
    return cubes.reduce((total, current) => total + current, 0);
  }