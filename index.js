function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split('').reverse().join('');
  return reverseWord === word ? true : false;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("gako"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("daddy"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome('mom'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome('betty'))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
