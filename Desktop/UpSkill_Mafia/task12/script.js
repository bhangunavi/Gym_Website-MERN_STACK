
const Array = [3, 7, 2, 8, 5, 10, 9, 6, 16];


const findMax = (arr) => {
  return Math.max(...arr);
};


const calculateSum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};


const countOddNumbers = (arr) => {
  return arr.filter(num => num % 2 !== 0).length;
};


// Displaying results
console.log("Maximum number in the array:", findMax(Array));
console.log("Sum of all elements in the array:", calculateSum(Array));
console.log("Number of odd numbers in the array:", countOddNumbers(Array));
