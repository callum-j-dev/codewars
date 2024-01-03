function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = marks.reduce((total, current) => total += current, 0);
    return Math.floor(sum / marks.length);
  }