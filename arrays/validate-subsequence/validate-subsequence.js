function isValidSubsequence(array, sequence) {
    let sequenceIndex = 0;

    for(const value of array) { // values of array
        if(sequenceIndex === sequence.length) break; // reached to the end of sequence array
        
        // 1, 1, 6, 6, 6, -1, 10, 10
        if(sequence[sequenceIndex] === value) sequenceIndex++; // if it is equal, increase index
    }
    return sequenceIndex === sequence.length; // sequence has been ended
}

const array = [5,1,22,25,6,-1,8,10];
const sequence = [1,6,-1,10];

console.log(isValidSubsequence(array, sequence));