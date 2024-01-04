function wordsToMarks(string){
    //your code here
    let alpha = ' abcdefghijklmnopqrstuvwxyz';
    let strArr = string.toLowerCase().split('');
    
    let value = strArr.reduce((total, current) => total += alpha.indexOf(current), 0);
    
    return value;
  }