const twoNumberSum = (array, targetSum) => {
    const nums = {};

    for(const num of array) {
        // iterating elements of array individually
        const potentialMatch = targetSum - num; // looking for potential value next to num
        if(potentialMatch in nums) { // 
            return [potentialMatch, num]; // there will be at most one pair
        }
        else {
            nums[num] = true;
        }
    }
    return [];
}

const array = [1, 2, 3, 8, -6, 21, 5];
const targetSum = 10;
console.log(twoNumberSum(array, targetSum));
