function alphabetWar(fight)
{
  const left = ['s', 'b', 'p', 'w'];
  const right = ['z', 'd', 'q', 'm'];
  
  let leftScore = 0;
  let rightScore = 0;
  
  let fightArr = fight.split('');
  fightArr.forEach(letter => {
    if (left.includes(letter)) {
      leftScore += left.indexOf(letter) + 1;
    } else if (right.includes(letter)) {
      rightScore += right.indexOf(letter) + 1;
    }
  });
  
  return leftScore > rightScore ? 'Left side wins!' : rightScore > leftScore ? 'Right side wins!' : "Let's fight again!";
}