function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let ages = [age1, age2, age3, age4, age5, age6, age7, age8];
    let sqAges = ages.map(age => age ** 2);
    let sqSum = sqAges.reduce((total, current) => total + current, 0);
    let root = Math.sqrt(sqSum);
    return Math.floor(root / 2);
  }