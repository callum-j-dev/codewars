function sortByValueAndIndex(array)
{
  let valIndArr = array.map((val, ind) => {
    return {index: ind, value: val};
  });
  
  let valIndSorted = valIndArr.sort((a, b) => {
    let prodA = a.value * (a.index + 1);
    let prodB = b.value * (b.index + 1);
    
    return prodA < prodB ? -1 : prodA > prodB ? 1 : 0;
  });
  
  return valIndSorted.map(elem => elem.value);
}