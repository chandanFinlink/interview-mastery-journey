/**
 * 
 * 🪟 The Sliding Window Pattern (Concept)Imagine you are asked to find the maximum sum of $K$ consecutive elements in an array. The brute-force approach would use nested loops to recalculate the sum for every possible group, taking $O(N \times K)$ time.The Sliding Window Pattern optimizes this to $O(N)$ by keeping track of a "window" of elements. When the window moves forward, you don't recalculate everything from scratch. You simply add the new element entering the window and subtract the old element leaving the window.The Challenge: Maximum Sum Subarray of Size KThe Challenge: Given an array of integers nums and a positive integer k, find the maximum sum of any contiguous subarray of size k.Example:nums = [2, 1, 5, 1, 3, 2], k = 3Execution details:Window 1: [2, 1, 5] $\rightarrow$ Sum = 8Window 2: [1, 5, 1] $\rightarrow$ Sum = 7Window 3: [5, 1, 3] $\rightarrow$ Sum = 9Window 4: [1, 3, 2] $\rightarrow$ Sum = 6
 */

const maxSubarraySum = (nums, k) => {
    if (nums.length < k) return 0;

    let windowSum = 0;
    let maxSum = 0;

    // 1. Compute the sum of the very first window (first k elements)
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    maxSum = windowSum;

    // 2. Slide the window from index 'k' to the end of the array
    for (let i = k; i < nums.length; i++) {
        // Add the incoming element (nums[i]) 
        // and subtract the outgoing element (nums[i - k])
        windowSum += nums[i] - nums[i - k];

        // Track the highest sum seen so far
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
