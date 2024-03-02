function solve(arr){  
    //code
      let counts = [];
      arr.forEach(word => {
        counts.push(countMatchs(word));
      });
      
      return counts; 
    }
    
    function countMatchs(word) {
      const alpha = "abcdefghijklmnopqrstuvwxyz";
      let wordArr = word.toLowerCase().split('');
      let count = 0;
      
      wordArr.forEach((letter, index) => {
        if (letter === alpha.charAt(index)) {
          count++;
        }
      });
      
      return count;
    }