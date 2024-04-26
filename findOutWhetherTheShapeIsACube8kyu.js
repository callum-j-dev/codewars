function cubeChecker(volume, side){
    if (side <= 0 || volume <= 0) {
      return false;
    }
    
    return volume === Math.pow(side, 3);
  };