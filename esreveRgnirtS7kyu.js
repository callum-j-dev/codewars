//Create reverse function for the String prototype
String.prototype.reverse = function() {
    const strArr = this.split('');
    const revArr = strArr.reverse();
    
    return revArr.join('');
  }