function winner(deckSteve, deckJosh) {
    // TODO
    let valuesSteve = getValues(deckSteve);
    let valuesJosh = getValues(deckJosh);
    
    let pointsSteve = 0;
    let pointsJosh = 0;
    
    while (valuesSteve.length > 0 && valuesJosh.length > 0) {
      let valueSteve = parseInt(valuesSteve.shift());
      let valueJosh = parseInt(valuesJosh.shift());
      
      valueSteve > valueJosh ? pointsSteve++ : valueSteve < valueJosh ? pointsJosh++ : pointsSteve += 0;
    }
    
    return (pointsSteve > pointsJosh) ? `Steve wins ${pointsSteve} to ${pointsJosh}` : (pointsSteve < pointsJosh) ? `Josh wins ${pointsJosh} to ${pointsSteve}` : "Tie";
    
  }
  
  function getValues(deck) {
    return deck.map((value) => {
      switch (value) {
          case 'T':
            return '10';
            break;
          case 'J':
            return '11';
            break;
          case 'Q':
            return '12';
            break;
          case 'K':
            return '13';
            break;
          case 'A':
            return '14'
            break;
          default:
            return value;
            break   
      }
    });
  }