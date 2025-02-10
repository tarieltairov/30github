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
