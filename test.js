// let flattenedArray = [];

// function flatten(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "object") {
//       flatten(array[i]);
//       return;
//     }
//     flattenedArray.push(array[i]);
//   }
// }

// flatten([1, [2, [3, [[4]]]]]);

// console.log(flattenedArray);

// function recursiveFlatten(array) {
//   let flattenedArr = [];
  
//   if (typeof array[0] === "object") {
//     recursiveFlatten(array[0]);
//   }
//   return flattenedArr.push(array[0]).push(recursiveFlatten(array.slice(1)));
// }

// function recursiveSum(array) {
//   return array[0] + (array.length === 1 ? 0 : recursiveSum(array.slice(1)));
// }

// console.log(recursiveSum([1, 2, 3, 4, 5]));

// function flatten(array) {
//   let tempArr = [];
//   // let sum = 0;
//   console.log('Array >> ', array);

//   if (typeof(array[0]) === "object") {
//    return flatten(array[0]);
//   }

//   tempArr.push(array[0]);
//   console.log('Temp array >> ', tempArr);
//   // sum += array[0];
//   // console.log('Sum >> ', sum);
  
//   // return (array.length === 1) ? sum : sum += flatten(array.slice(1));
//   return (array.length === 1) ? array[0] : (tempArr + flatten(array.slice(1)));
//   // (tempArr.push(flatten(array.slice(1))));
//   // if (array.length === 1) {
//   //   return tempArr;
//   // }
//   // else tempArr.push(flatten(array.slice(1)));
// }

// console.log(flatten([[1, [2]], 3]));

// fetch("https://dog.ceo/api/breeds/image/random", {
// 	method: "GET",
//   // mode: 'no-cors', // no-cors, *cors, same-origin
//   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   // credentials: 'same-origin', // include, *same-origin, omit
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   }
// })
// .then(response => {
// 	console.log(response.json());
// })
// .catch(err => {
// 	console.error(err);
// });

const imgUrl = "https://api.unsplash.com/photos/random";
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl, {
  headers: {
    'Authorization': 'Client-ID vZjKicZyrJijA01MnfO6hKXIwvZdG2Upg3Bww34Juhg'
  }
}).then(response => response.json())
  .then(result => console.log('Result > ', result))
  .catch(error => console.error('Error >> ', error));