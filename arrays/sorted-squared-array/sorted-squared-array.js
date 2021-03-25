// o(nlogn) time | o(n) space
const sortedSquaredArray = (array) => {
    const result = array.map(x => x*x)
    result.sort((a, b) => a - b);
    
    console.log(result)
}

// sortedSquaredArray([1,2,3,-5,6,8,9])

// o(n) time | o(n) space

const sortedSquareArray = (array) => {

    const sortedSquares = new Array(array.length).fill(0); // created new array with the length of array and filled with zeros.
    let smallValueIndex = 0;
    let largeValueIndex = array.length - 1;

    for(let i = array.length - 1; i>=0; i--){
        const smallValue = array[smallValueIndex];
        const largeValue = array[largeValueIndex];

        if(Math.abs(smallValue) > Math.abs(largeValue)){
            sortedSquares[i] = smallValue * smallValue;
            smallValueIndex++;
        }
        else {
            sortedSquares[i] = largeValue * largeValue;
            largeValueIndex--;
        }
    }
    return sortedSquares;
}

console.log(sortedSquareArray([1,2,3,-5,6,8,9]))