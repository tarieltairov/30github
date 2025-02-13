// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// var longestCommonPrefix = function (strs) {
//   if (!strs.length) return "";
//   let prefix = strs[0];
//   for (let word of strs) {
//     while (!word.startsWith(prefix)) {
//       prefix = prefix.slice(0, -1);
//       if (prefix === "") return "";
//     }
//   }
//   return prefix;
// };

// console.log(longestCommonPrefix(["flow", "flower", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
