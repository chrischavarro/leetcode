/**
 * @param {string} s
 * @return {boolean}
 */

// When an opening parentheses encountered in the string, add its closing parentheses to a stack
// When a closing parentheses is encountered in the string, check whether it matches the one popped from the stack 
// Return a boolean indicating whether the stack is empty
var isValid = function(s) {
  const map = {
    '{': ']',
    '(': ')',
    '[': ']'
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) stack.push(map[s[i]]);
    else if (stack.pop() !== s[i]) return false;
  }

  return !stack.length;
}