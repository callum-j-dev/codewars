function rowWeights(array){
    //your code here
    let team1 = [];
    let team2 = [];

    while (array.length > 0) {
        team1.push(array.shift());
        
        if (array.length > 0) {
        team2.push(array.shift());
        }
    }

    let sum1 = team1.reduce((total, current) => total += current, 0);
    let sum2 = team2.reduce((total, current) => total += current, 0);

    return [sum1, sum2];
}