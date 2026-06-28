
/**
 * 
 * Question 1: Valid Palindrome (LeetCode 125)The Challenge: Given a string s, return true if it is a palindrome, or false otherwise. A palindrome is a phrase that reads the same forward and backward after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters (spaces, commas, punctuation).Examples:s = "A man, a plan, a canal: Panama" ── Should return true (after cleaning, it becomes "amanaplanacanalpanama", which is a perfect palindrome).s = "race a car" ── Should return false (cleaned it is "raceacar", backward it is "racaecar" $\rightarrow$ mismatch at the middle).
 */

const isPalindrome = (s) => {
    // Step 1: Clean the string (remove spaces/punctuation and lowercase it)
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Step 2: Initialize two clear pointers
    let left = 0;
    let right = cleaned.length - 1;

    // Step 3: Loop until the pointers meet in the middle
    while (left < right) {
        // If characters at pointers don't match, it's not a palindrome
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }

        // Move pointers closer to the center
        left++;
        right--;
    }

    // If we survived the entire loop, it is a valid palindrome!
    return true;
};

// --- Test Cases ---
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
// console.log(isPalindrome("race a car"));                     // Expected: false


/**
 * 
 * Question 2: Two Sum II - Input Array Is Sorted (LeetCode 167)Let's cement this pattern with an absolute favorite interview variant.The Challenge: Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return their indices added by 1 (i.e., [index1 + 1, index2 + 1]).Crucial Constraint: Your solution must use only $O(1)$ constant extra space. This means you cannot use the memory object from yesterday!Example:numbers = [2, 7, 11, 15], target = 9 ── Should return [1, 2] (1-indexed position of 2 and 7)
 */


//[2, 7, 11, 15] = 9

const sum2 = (nums, target) => {
    let first = 0;
    let last = nums.length - 1;

    // Keep running until the two pointers meet
    while (first < last) {
        const currentSum = nums[first] + nums[last];

        if (currentSum === target) {
            return [first + 1, last + 1]; // 1-indexed output
        } else if (currentSum > target) {
            last--; // Make the sum smaller
        } else {
            first++; // Make the sum bigger
        }
    }

    return false;
}

console.log(sum2([2, 7, 11, 15], 9)); // Expected: [1, 2]
console.log(sum2([2, 3, 4], 6));      // Expected: [1, 3]
console.log(sum2([3, 24, 50, 79, 88, 150, 345], 200));
