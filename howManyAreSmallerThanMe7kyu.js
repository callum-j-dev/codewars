function smaller(nums) {
    //code me
      let smallers = nums.map((elem, ind, arr) => {
        let smaller = 0;
        let right = arr.slice(ind + 1);
        console.log(right);
        return right.reduce((total, current) => {
          if (current < elem) {
            total++;
          }
          return total;
        }, 0);
      });
      
      return smallers;
    }