function sortReindeer(reindeerNames) {
    console.log(reindeerNames);
    const sorted = reindeerNames.sort((a, b) => {
      let lastA = a.split(' ')[1];
      let lastB = b.split(' ')[1];
      
      return lastA < lastB ? -1 : lastA > lastB ? 1 : 0;
    });
    
    
    console.log(sorted);
    
    return sorted;
  }