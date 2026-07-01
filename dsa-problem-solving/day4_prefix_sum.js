/*

!📈 The Prefix Sum Pattern (Concept)Imagine you have an array and you need to answer multiple queries asking for the total sum of elements between an index L and an index R.The brute-force way is to run a loop from L to R for every single query. If you have $M$ queries on an array of size $N$, this takes a slow $O(M \times N)$ time.The Prefix Sum Pattern optimizes this by pre-computing a running total array where each index i stores the sum of all elements from the start up to i. Once this prefix array is created in a single $O(N)$ pass, calculating any range sum takes exactly $O(1)$ constant time using a simple subtraction formula:$$\text{Sum}(L, R) = \text{Prefix}[R] - \text{Prefix}[L - 1]$$The Challenge: Range Sum Query (LeetCode 303)The Challenge: Given an integer array nums, handle multiple queries to find the sum of the elements of nums between indices left and right inclusive (where left <= right).Example:nums = [-2, 0, 3, -5, 2, -1]Create your Prefix Array first:prefix[0] = -2prefix[1] = -2 + 0 = -2prefix[2] = -2 + 0 + 3 = 1prefix[3] = 1 + (-5) = -4prefix[4] = -4 + 2 = -2prefix[5] = -2 + (-1) = -3prefix = [-2, -2, 1, -4, -2, -3]Now, if someone asks for the sum between index 2 and 5:Formula: prefix[5] - prefix[2 - 1] $\rightarrow$ prefix[5] - prefix[1]Calculation: $-3 - (-2) = -1$Verify manually: $3 + (-5) = -2 + 2 = 0 + (-1) = -1$. It matches instantly without looping!
*/

//1. Write a function or class setup that takes an array, generates its prefix sum array, and uses it to answer range queries.

const createPrefixArray = (nums) => {
  const prefix = [];
  let sum = 0;
  for (const num of nums) {
    prefix.push((sum += num));
  }
  return prefix;
};

const rangeSum = (prefix, left, right) => {
  // 2. Use your prefix array formula to calculate the sum in O(1) time
  return prefix[right] - (prefix[left - 1] ?? 0);
};

// --- Test Code ---
const nums = [-2, 0, 3, -5, 2, -1];
const prefix = createPrefixArray(nums); 


console.log(rangeSum(prefix, 2, 5)); // Expected Output: -1
console.log(rangeSum(prefix, 0, 2)); // Expected Output: 1 
