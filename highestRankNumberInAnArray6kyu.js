function highestRank(arr){
    //Your Code logic should written here
      let sorted = arr.sort((a,b) =>  a -  b);
      let streak = 1;
      let current = sorted[0];
      let currentStreak = 1;
      let highestRank = sorted[0];
      
      for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) {
          current = sorted[i];
          currentStreak++;
          
          if (currentStreak >= streak) {
            highestRank = sorted[i];
            streak = currentStreak;
          }
        } else {
          current = sorted[i];
          currentStreak = 1;
        }
      }
      
      if (streak === 1) {
        return Math.max(...sorted);
      }
      
      return highestRank;
    }