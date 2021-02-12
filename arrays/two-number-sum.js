const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

function twoNumberSum(array, targetSum) {
    const nums = {1: 'test'};

    for(const num of array) {
        // iterating elements of array individually
        const potentialMatch = targetSum - num; // looking for potential value next to num
        if(1 in nums){
            console.log(true);
        }
    }
}

twoNumberSum(array, targetSum);

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);
// console.log(numbers2)
// function myFunction(value, index, array) {
//   return value * 2; 
// }