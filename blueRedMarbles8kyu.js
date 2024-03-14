function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    // Your code here.
    let blueCurrent = blueStart - bluePulled;
    let redCurrent = redStart - redPulled;
    
    return blueCurrent / (redCurrent + blueCurrent);
  }