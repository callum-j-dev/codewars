function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    console.log(enteredCode);
    console.log(correctCode);
    console.log(currentDate);
    console.log(expirationDate);
    
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    let currentDateArray = currentDate.split(', ');
    let expirationDateArray= expirationDate.split(', ');
    
    let currentYear = currentDateArray[1];
    let currentMonth = months.indexOf(currentDateArray[0].split(' ')[0].toLowerCase());
    let currentDay = Number(currentDateArray[0].split(' ')[1]);
    
    let expirationYear = expirationDateArray[1];
    let expirationMonth = months.indexOf(expirationDateArray[0].split(' ')[0].toLowerCase());
    let expirationDay = Number(expirationDateArray[0].split(' ')[1]);
    
    let result;
    
    if (enteredCode !== correctCode) {
      result = false;
    } else if (currentYear > expirationYear) {
      result = false;
    } else if (currentYear === expirationYear && currentMonth > expirationMonth) {
      result = false;
    } else if (currentYear === expirationYear && currentMonth === expirationMonth && currentDay > expirationDay) {
      result = false;
    } else {
      result = true;
    }
    
    console.log(result);
    console.log('\n');
    return result;
    
  //   if (enteredCode !== correctCode) {
  //     return false;
  //   } else if (currentYear < expirationYear) {
  //     return true;
  //   } else if (currentMonth)
    
    
  }