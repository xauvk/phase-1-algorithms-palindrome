function isPalindrome(word) {
  // Write your algorithm here
  const ans = false
  let rev = ''

  for (let i = word.length - 1; i >= 0; i--) {
      rev += word.charAt(i)
      console.log(rev)
  }
  // Checking if both the strings are equal
  if (word === String.valueOf(rev)) {
      ans = true
  }
  return ans
}

/* 
  create a new string of char's
  store letters of in string
  compare letters at chars of letters
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
