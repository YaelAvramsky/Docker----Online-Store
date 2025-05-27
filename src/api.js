
export const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                if (Math.random() < 0.3) {
                    throw new Error("Simulated network error");
                }
                const response = await fetch('https://dummyjson.com/products/category/kitchen-accessories');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                resolve(result.products);
            } catch (error) {
                reject(error.message);
            }
        }, 3000);
    });
};























// export const fetchData = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(async () => {
//             try {
//                 if (Math.random() < 0.5) {
//                     throw new Error("Simulated network error");
//                 }
//                 const response = await fetch('https://dummyjson.com/users?limit=10');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const result = await response.json();
//                 resolve(result.users);
//             } catch (error) {
//                 reject(error.message);
//             }
//         }, 3000);
//     });
// };