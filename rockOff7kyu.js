function solve(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        aliceScore++;
      } else if (b[i] > a[i]) {
        bobScore++;
      }
    }
    
    let resultStr = ': that looks like a "draw"! Rock on!';
    if (aliceScore > bobScore) {
      resultStr = ': Alice made "Kurt" proud!';
    } else if (bobScore > aliceScore) {
      resultStr = ': Bob made "Jeff" proud!';
    }
    
    return `${aliceScore}, ${bobScore}${resultStr}`;
  
  }