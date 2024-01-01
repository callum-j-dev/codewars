function evaporator(content, evap_per_day, threshold){
    let thresholdCont = content * (threshold / 100);
    let remaining = content;
    let count = 0;
    
    while (remaining > thresholdCont) {
      count++;
      remaining = remaining * (100 - evap_per_day) / 100;
    }
    
    return count;
  }