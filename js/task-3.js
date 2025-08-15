function filterArray(numbers, value) {
  const result = [];
  for (const number of numbers) {
    if (number > value) {
      result.push(number);
    }
  }
  return result;
}

// [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 3));

// [5]
console.log(filterArray([1, 2, 3, 4, 5], 4));

// []
console.log(filterArray([1, 2, 3, 4, 5], 5));

// [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 38));

// [24, 41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20));
