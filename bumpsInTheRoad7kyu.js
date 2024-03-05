function bump(x){
    let arr = x.split('');
    
    let bumps = arr.reduce((total, current) => total += (current === 'n') ? 1 : 0, 0);
    
    return (bumps <= 15) ? 'Woohoo!' : 'Car Dead';
  
  }