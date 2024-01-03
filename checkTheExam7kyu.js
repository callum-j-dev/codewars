function checkExam(array1, array2) {
    // good luck
    let score = 0;
    array2.forEach((answer, index) => {
    if (answer === array1[index]) {
        score += 4;
    } else if (answer === ''){
        score += 0;
    } else {
        score--;
    }
    });
    
    return score > 0 ? score : 0;
}