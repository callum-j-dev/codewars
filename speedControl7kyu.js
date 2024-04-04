function gps(s, x) {
  if (x.length <= 1) {
    return 0;
  }
  
  let deltaDist = [];
  for (let i = 1; i < x.length; i++) {
    deltaDist.push(x[i] - x[i - 1]);
  }
  
  let avgSpeeds = deltaDist.map(dist => (3600 * dist) / s);
  
  return Math.floor(Math.max(...avgSpeeds));
}
