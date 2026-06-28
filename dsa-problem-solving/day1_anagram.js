/**
 * 
 Question 1: Valid Anagram (LeetCode 242)
The Challenge: Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram means you can rearrange the letters of one word to form the exact other word, using each original letter exactly once.

Examples:

s = "anagram", t = "nagaram" ── Should return true

s = "rat", t = "car" ── Should return false

s = "listen", t = "silent" ── Should return true
 * 
 * 
 */

const isAnagram = (s, t) => {

    if (s.length != t.length) return false;

    const frequencyMap = {}

    for (let char of s) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;;
    }

    console.log(frequencyMap, "frequencyMap");
    for (let char of t) {

        if (!frequencyMap[char]) {
            return false;
        }

        frequencyMap[char]--;

    }
    return true;
}

// console.log(isAnagram("listen", "silent"));


/**
 * Question 2: Two Sum (LeetCode 1)
Now let's tackle the second challenge. This is arguably the most famous interview question of all time, and it also uses a map/object tracking strategy.

The Challenge: Given an array of numbers nums and an integer target, return the indices (positions) of the two numbers such that they add up to the target.

You cannot use the same element twice.

You can assume there is exactly one correct solution.

Examples:

nums = [2, 7, 11, 15], target = 9 ── Should return [0, 1] (because nums[0] + nums[1] === 9)

nums = [3, 2, 4], target = 6 ── Should return [1, 2] (because nums[1] + nums[2] === 6)
 */

const twoSum = (nums, target) => {
    // This object will remember the numbers we have seen and their index
    // Key will be the number, Value will be its index -> { number: index }
    const memory = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        // 1. Calculate what number we NEED to find to reach the target
        const requiredNum = target - currentNum;

        // 2. Check if our memory already contains that requiredNum
        if (memory[requiredNum] !== undefined) {
            // We found a match! Return the index from memory and our current index
            return [memory[requiredNum], i];
        }

        // 3. If we haven't seen it, save the current number and its index in memory
        memory[currentNum] = i;
    }
}

console.log(twoSum([3, 5, 1, 3], 6));

