function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

// "arrays-for-begginers"
console.log(slugify('Arrays for begginers'));

// "english-for-developer"
console.log(slugify('English for developer'));

// "ten-secrets-of-javascript"
console.log(slugify('Ten secrets of JavaScript'));

// "how-to-become-a-junior-developer-in-two-weeks"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
