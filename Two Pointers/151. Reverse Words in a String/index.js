// 151. Reverse Words in a String
// Medium
// Topics
// Companies
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.
 

// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?
/**
 * @param {string} s
 * @return {string}
 */

// swap characters at left and right values, bring pointers inward 
function reverse(string, l, r) {
  while (l < r) {
    [string[l], string[r]] = [string[r], string[l]];
    l++;
    r--;
  }
  return string;
}

// split string into array and reverse values
// traverse array with two pointers, move the right one until a space is encountered
// reverse word at l and r - 1, then let left pointer to r + 1 
// reverse final word once we're done looping through array
// create an index to build the final string
// iterate through the array, swap values between index and pointer and increment index when multiple spaces are found
// remove trailing spaces from end of string
// convert array sliced from 0 to the final index and join back to a string
function reverseWords(s) {
  let string = s.split('');
  // Reverse the entire array
  string = reverse(string, 0, string.length - 1);
  let l = 0;
  for (let r = 0; r < string.length; r++) {
    // If a space is encountered
    if (string[r] === ' ') {
      // Reverse the word between l and r-1
      reverse(string, l, r - 1);
      // Move the left pointer to the start of the next word
      l = r + 1;
    }
  }
  // Reverse the last word
  reverse(string, l, string.length - 1);
  
  // Initialize an index to build the final result
  let index = 0;
  for (let i = 0; i < string.length; i++) {
    // Skip multiple spaces
    if (string[i] !== ' ' || i && string[i - 1] !== ' ') {
      // Copy non-space characters and single spaces
      string[index] = string[i];
      // increment the index
      index++;
    }
  }

  // Remove trailing space if present
  if (index && string[index - 1] === ' ') {
    index--;
  }
  
  // Convert the array back to a string and return the result
  return string.slice(0, index).join('');
}

// split string into an array
var reverseWords = function(s) {
  s = s.split(' ');
  let res = [];
  for(let i = s.length-1; i >= 0; i--) {
      if(s[i] !== '') res.push(s[i]);
  }
  return res.join(' ');
};

// Step-by-Step Walkthrough
// Convert the input string to an array of characters:

// let string = s.split(''); // ['a', ' ', 'g', 'o', 'o', 'd', ' ', ' ', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e']
// Reverse the entire array:

// const reversed = reverse(string, 0, string.length - 1); // ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', ' ', ' ', 'd', 'o', 'o', 'g', ' ', 'a']
// Initialize the left pointer l:

// let l = 0;
// Iterate through the array to reverse each word:

// for (let r = 0; r < string.length; r++) {
//     if (string[r] === ' ') {
//         reverse(string, l, r - 1); // Reverse the word between l and r-1
//         l = r + 1; // Move the left pointer to the start of the next word
//     }
// }
// reverse(string, l, string.length - 1); // Reverse the last word
// After reversing each word:
// First word: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', ' ', ' ', 'd', 'o', 'o', 'g', ' ', 'a']
// Second word: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', ' ', ' ', 'd', 'o', 'o', 'g', ' ', 'a']
// Third word: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', ' ', ' ', 'd', 'o', 'o', 'g', ' ', 'a']
// Fourth word: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', ' ', ' ', 'd', 'o', 'o', 'g', ' ', 'a']
// Final array after reversing each word: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', ' ', ' ', 'd', 'o', 'o', 'g', ' ', 'a']
// Initialize an index for the final result:

// let index = 0;
// Iterate through the array again to build the final string:

// for (let i = 0; i < string.length; i++) {
//     if (string[i] !== ' ' || (i && string[i - 1] !== ' ')) {
//         string[index] = string[i]; // Copy non-space characters and single spaces
//         index++;
//     }
// }
// After processing:
// index = 0: ['e']
// index = 1: ['e', 'l']
// index = 2: ['e', 'l', 'p']
// index = 3: ['e', 'l', 'p', 'm']
// index = 4: ['e', 'l', 'p', 'm', 'a']
// index = 5: ['e', 'l', 'p', 'm', 'a', 'x']
// index = 6: ['e', 'l', 'p', 'm', 'a', 'x', 'e']
// index = 7: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ']
// index = 8: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'd']
// index = 9: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'd', 'o']
// index = 10: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'd', 'o', 'o']
// index = 11: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'd', 'o', 'o', 'g']
// index = 12: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'd', 'o', 'o', 'g', ' ']
// index = 13: ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'd', 'o', 'o', 'g', ' ', 'a']
// Remove trailing space if present:

// if (index && string[index - 1] === ' ') {
//     index--;
// }
// Final index: index = 13
// Convert the array back to a string and return the result:

// return string.slice(0, index).join(''); // "example good a"
// Final Output

// "example good a"