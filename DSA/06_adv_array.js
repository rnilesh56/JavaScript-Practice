//! Left rotation by one element
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[0]; // 1

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
//   //arr[0] = 2
//   //arr[1] = 3
//   //arr[2] = 4
//   //arr[3] = 5
// }
// arr[arr.length - 1] = copy;
// //arr[4] = 1

// console.log(arr);

//! right rotation by one element
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1]; // 5

// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];

//   //arr[1] = 1
//   //arr[2] = 2
//   //arr[3] = 3
//   //arr[4] = 4
// }
// arr[0] = copy;
// // arr[0] = 5
// console.log(arr);
// // [5, 4, 3, 2, 1]

//! Left  rotation by k element
// let arr = [1, 2, 3, 4, 5];
// let k = 5;

// for (let i = 0; i < k % arr.length; i++) {
//   let copy = arr[0];
//   for (let j = 0; j < arr.length - 1; j++) {
//     arr[j] = arr[j + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);

//* Using Modulo Method

// let arr = [1, 2, 3, 4, 5];
// let tempArray = new Array(arr.length);
// let k = 2;
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   tempArray[i] = arr[(i + k) % arr.length];
// }
// console.log(tempArray);

//* Reversal Algorithm
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);
// console.log(arr);

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

//! right rotation by k element
// let arr = [1, 2, 3, 4, 5];
// let k = 7;

// for (let i = 0; i < k % arr.length; i++) {
//   let copy = arr[arr.length - 1];
//   for (let j = arr.length - 1; j > 0; j--) {
//     arr[j] = arr[j - 1];
//   }
//   arr[0] = copy;
// }
// console.log(arr);

//* Using Modulo Method

// let arr = [1, 2, 3, 4, 5];
// let tempArray = new Array(arr.length);
// let k = 3;
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   tempArray[i] = arr[(i - k + arr.length) % arr.length];
// }
// console.log(tempArray);

//* Reversal Algorithm
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;
// reverse(0, arr.length - 1);
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// console.log(arr);

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

//! Remove duplicates from the sorted array
// let arr = [0, 0, 1, 1, 1, 2, 2, 3];

// let removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] != nums[i + 1]) {
//       nums[j] = nums[i + 1];
//       j++;
//     }
//   }
//   return j;
// };

// let k = removeDuplicates(arr);
// console.log("k =", k);
// console.log("Array after removing duplicates:", arr.slice(0, k));

//! Merge sorted array
// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8];
// let merge = new Array(arr1.length + arr2.length);
// let i = 0;
// let j = 0;
// let k = 0;
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k++] = arr1[i++];
//   } else {
//     merge[k++] = arr2[j++];
//   }
// }

// while (j < arr2.length) {
//   merge[k++] = arr2[j++];
// }

// while (i < arr1.length) {
//   merge[k++] = arr1[i++];
// }
// console.log(merge);

//! Best Time to Buy and Sell Stock

// let prices = [7, 1, 5, 3, 6, 4];
// let maxProfit = function (prices) {
//   let maxProfit = 0;
//   let min = prices[0];
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < min) {
//       min = prices[i];
//     }
//     let profit = prices[i] - min;
//     maxProfit = Math.max(maxProfit, profit);
//   }
//   return maxProfit;
// };
// console.log(maxProfit(prices));

//! Sort the color
// let arr = [1, 0, 2, 0, 1, 1, 0, 2, 1];
// let i = 0;
// let j = 0;
// let k = arr.length - 1;

// while (i < k) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   } else if (arr[i] === 2) {
//     let temp = arr[i];
//     arr[i] = arr[k];
//     arr[k] = temp;
//     k--;
//   }
//   i++;
// }
// console.log(arr);

//* Leetcode:

// var sortColors = function (nums) {
//   let i = 0;
//   let j = 0;
//   let k = nums.length - 1;
//   while (i <= k) {
//     if (nums[i] == 0) {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//       i++;
//       j++;
//     } else if (nums[i] === 2) {
//       let temp = nums[i];
//       nums[i] = nums[k];
//       nums[k] = temp;
//       i++;
//       k--;
//     } else {
//       i++;
//     }
//   }
//   return nums;
// };

// console.log(sortColors([2, 0, 2, 1, 1, 0]));

//! Leetcode: 53. Maximum Subarray (Kadane's Algorithm)
// var maxSubArray = function (nums) {
//   max = -Infinity;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     max = Math.max(max, sum);
//     if (sum < 0) sum = 0;
//   }
//   return max;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//! LeedCode: 169. Majority Element (Moore's Voting Algorithm)
// var majorityElement = function (nums) {
//   let ele = nums[0];
//   let count = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (count === 0) {
//       ele = nums[i];
//       count++;
//     } else if (ele === nums[i]) {
//       count++;
//     } else {
//       count--;
//     }
//   }
//   return ele;
// };
// console.log(majorityElement([6, 5, 5]));

//! LeedCode: 42. Trapping Rain Water

// var trap = function (height) {
//   let left = new Array(height.length);
//   let right = new Array(height.length);
//   let maxLeft = height[0];
//   let maxRight = height[height.length - 1];
//   left[0] = maxLeft;
//   right[right.length - 1] = maxRight;

//   for (let i = 1; i < height.length; i++) {
//     maxLeft = Math.max(height[i], maxLeft);
//     left[i] = maxLeft;
//   }
//   for (let i = height.length - 2; i >= 0; i--) {
//     maxRight = Math.max(height[i], maxRight);
//     right[i] = maxRight;
//   }
//   let ans = 0;
//   for (let i = 0; i < height.length; i++) {
//     ans += Math.min(left[i], right[i]) - height[i];
//   }
//   return ans;
// };

// console.log(trap([4, 2, 0, 3, 2, 5]));
