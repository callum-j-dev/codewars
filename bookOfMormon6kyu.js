function mormons(startingNumber, reach, target) {
    //let the mission begin!
    return evangelize(startingNumber, reach, target, 0);
  }
  
  function evangelize(startingNumber, reach, target, missionNumber) {
    if (startingNumber >= target) {
      return missionNumber;
    } else {
      missionNumber++;
      return evangelize(startingNumber * (1 + reach), reach, target, missionNumber);
    }
  }