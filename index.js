// 1)

// const clearDigits = function (s) {
//   const arr = s.split("");
//   const isAllLetter = arr.every((i) => isNaN(i));

//   if (isAllLetter) {
//     return s;
//   } else {
//     // const firstDigit = arr.find((char) => !isNaN(char));
//     // console.log(firstDigit);

//     const res = arr.reduce((a, b, index) => {
//       if (!isNaN(b) && isNaN(a)) {
//         return "";
//       }
//       return b;
//     }, "");
//     console.log(res);
//   }
// };

// clearDigits("cb34");
// // clearDigits("abc");
// ------------------------------------------------------

// 2
// var twoSum = function (nums, target) {
//   if (nums.length > 2) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   }

//   if (nums.length === 2) {
//     if (nums[0] + nums[1] === target) {
//       return [0, 1];
//     }
//   }
//   return;
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// -----------------------------------
// var createHelloWorld = function () {
//   return function (...args) {
//     return "Hello World";
//   };
// };
