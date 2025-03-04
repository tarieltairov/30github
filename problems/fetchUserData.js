// // Напиши функцию fetchUserData(userId),
// // которая имитирует запрос к серверу и возвращает данные о пользователе через Promise.
// // Данные должны загружаться с задержкой в 2 секунды.
// // Если userId меньше 1, промис должен быть отклонён с ошибкой "Invalid user ID".

// const users = {
//   1: { id: 1, name: "Alice", age: 25 },
//   2: { id: 2, name: "Bob", age: 30 },
//   3: { id: 3, name: "Charlie", age: 35 },
// };

// const fetchUserData = (userId = 0) => {
//   return new Promise((resolve, reject) => {
//     if (userId < 1) {
//       return reject(new Error("Invalid user ID"));
//     }

//     setTimeout(() => {
//       const user = users[userId];

//       if (!user) {
//         reject(new Error("User not found"));
//       } else {
//         resolve(user);
//       }
//     }, 2000);
//   });
// };

// fetchUserData(3)
//   .then((data) => console.log("User Data:", data))
//   .catch((error) => console.error("Error:", error));

// fetchUserData(0)
//   .then((data) => console.log("User Data:", data))
//   .catch((error) => console.error("Error:", error));
