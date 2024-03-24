var filterString = function(value) {
    //Complete this function :)
    let arr = value.split('');
    
    let nums = [];
    arr.forEach(char => {
      if (!isNaN(parseInt(char))) {
        nums.push(char);
      }
    });
    
    return Number(nums.join(''));
  }