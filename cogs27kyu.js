function cogRpm(cogs, n) {
    // Your code here!
    let firstCog = 1;
    let lastCog = 1;
    
    let directionCogs = []
    
    if (isOdd(n)) {
      directionCogs = cogs.map((cog, index) => {
        if (isOdd(index)) {
          return cog;
        } else {
          return -1 * cog;
        }
      });
    } else {
      directionCogs = cogs.map((cog, index) => {
        if (!isOdd(index)) {
          return cog;
        } else {
          return -1 * cog;
        }
      });
    }
    
    
    for (let i = n + 1; i < directionCogs.length; i++) {
      lastCog *= directionCogs[i - 1] / directionCogs[i];
    }
    
    for (let i = n - 1; i >= 0; i--) {
      firstCog *= directionCogs[i + 1] / directionCogs[i];
    }
    console.log(directionCogs);
    console.log(firstCog);
    console.log(lastCog);
    
    return [firstCog, lastCog];
  }
  
  function isOdd(num) {
    return num %2 !== 0;
  }