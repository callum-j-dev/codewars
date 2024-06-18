function wordSearch(query, seq){
    let out = seq.filter(word => word.toLowerCase().includes(query.toLowerCase()));
    return out.length > 0 ? out : ['Empty'];
  }