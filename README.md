# GoIT JavaScript Homework - Module 3 🚀

This document outlines the tasks for Module 3 of your GoIT JavaScript homework.

## Homework Assignment 3 📚

- Create a new GitHub repository named `goit-js-hw-03` and clone it to your computer. 📁
- In the `goit-js-hw-03` folder, create the project structure as shown in the diagram below. 🏗️

```text
goit-js-hw-03/
├── index.html
└── js/
    ├── task-1.js
    ├── task-2.js
    └── task-3.js
```

#### Please note :bangbang:

File and folder names and their nested structure must match the specified schema. Otherwise, the work will not be accepted. ❌

- Read each task and complete it in the appropriate file. 📝
- Make sure the code is formatted with `Prettier` and that there are no errors or warnings in the console when you open the live task page. ✨
- Submit your homework for review. ✅

**Submission Format:** The assignment includes two links: source files and the live page on `GitHub Pages`. 🔗

---

## Task 1. Slug Creator

#### :bangbang: Complete this task in the `task-1.js` file. ✍️

Before solving the problem, let's define a new term!
**Slug** term — a human-readable unique identifier used in web development to create readable URLs.
For example, instead of the user seeing `mysite.com/posts/1q8fh74tx` in the address bar, you can create a slug from the article's title. As a result, the address will be more readable: `mysite.com/posts/arrays-for-beginners`.
**Slug** — is always a lowercase string, and words are separated by a hyphen.
Got it? Now let's move on to the task at hand!
Write a `slugify(title)` function that takes the article `title`, the title parameter, and returns the `slug` created from this string.

- The value of the `title` parameter will be a string with words separated only by spaces.
- All `slug` characters must be lowercase. 🔡
- All `slug` words must be separated by a hyphen. ➖

Take the following code and paste it after your function definition to check if it works correctly. The console will show the results.

```js
// "arrays-for-begginers"
console.log(slugify('Arrays for begginers'));

// "english-for-developer"
console.log(slugify('English for developer'));

// "ten-secrets-of-javascript"
console.log(slugify('Ten secrets of JavaScript'));

// "how-to-become-a-junior-developer-in-two-weeks"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
```

Leave this code for your mentor to check. 🧑‍🏫

## What the mentor will check for:

- The `slugify(title)` function is defined.
- The call `slugify("Arrays for begginers")` returns "arrays-for-beginners".
- The call `slugify(" English for developer")` returns `"english-for-developer"`.
- The call `slugify("Ten secrets of JavaScript")` returns `"ten-secrets-of-javascript"`.
- The call `slugify("How to become a JUNIOR developer in TWO WEEKS")` returns `"how-to-become-a-junior-developer-in-two-weeks"`.

---

## Task 2. Array Composition

#### :bangbang: Complete this task in the `task-2.js` file. ✍️

Write a function called `makeArray` that takes three parameters: `firstArray`, `secondArray`, and `maxLength`. The function should create a new array containing all elements from `firstArray` followed by all elements from `secondArray`. 🆕

- If the number of elements in the new array exceeds the `maxLength` value, the function should return a copy of the array with a length of `maxLength`. ✂️
- Otherwise, the function should return the entire new array. ✅

Take the following code and paste it after your function declaration to check if it works correctly. The console will show the results of the operation.

```js
// ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));

// ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));

// ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));

// ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));

// ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));

// []
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
```

Leave this code for your mentor to check. 🧑‍🏫

## What the mentor will check for:

- The `makeArray(firstArray, secondArray, maxLength)` function is defined.
- The `makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)` function returns `["Mango", "Poly", "Ajax"]`.
- The `makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)` function returns `["Mango", "Poly", "Houston", "Ajax"]`.
- The `makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)` function returns `["Mango", "Ajax", "Chelsea"]`.
- The `makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)` function returns `["Earth", "Jupiter"]`.
- The `makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)` function returns `["Earth", "Jupiter", "Neptune", "Uranus"]`.
- The `makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)` function returns `[]`.
- The `makeArray()` function called with random arrays and a random number returns the correct array.

---

## Task 3. Filtering an Array of Numbers

#### :bangbang: Complete this task in the `task-3.js` file. ✍️

Write a `filterArray(numbers, value)` function that takes an array of numbers and a value as parameters. The function should return a new array of `numbers` from the numbers array that are only greater than the `value` value. 🔢

**Features included:**

- Create an empty array where you will add the matching numbers.
- Use a loop to iterate over each element of the `numbers` array. 🔁
- Use the conditional `if` statement inside the loop to check each element and add it to your array.
- Finally, return your new array containing the matching numbers. ✅

Take the following code and paste it after your function declaration to check if it works correctly. The console will show the results of the operation.

```js
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
```

Leave this code for your mentor to check. 🧑‍🏫

## What the mentor will check for:

- The `filterArray(numbers, value)` function is defined.
- The `filterArray([1, 2, 3, 4, 5], 3)` function returns `[4, 5]`.
- The `filterArray([1, 2, 3, 4, 5], 4)` function returns `[5]`.
- The `filterArray([1, 2, 3, 4, 5], 5)` function returns `[]`.
- The `filterArray([12, 24, 8, 41, 76], 38)` function returns `[41, 76]`.
- The `filterArray([12, 24, 8, 41, 76], 20)` function returns `[24, 41, 76]`.
- The `filterArray()` function called with a random array and a number returns the correct array.
