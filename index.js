// Prompt the user for a list of integers separated by commas.
const numberString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const numberStrings = numberString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (const str of numberStrings) {
  numbers.push(parseInt(str));
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The median of your numbers is ${getMedian(numbers)}.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);

// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the median of the numbers
 */
function getMedian(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
}
