function isValidParentheses(s) {
  const stack = [];
  const map = { "(": ")", "[": "]", "{": "}" };
  for (const char of s) {
    if (char in map) stack.push(char);
    else {
      const top = stack.pop();
      if (map[top] !== char) return false;
    }
  }
  return stack.length === 0;
}
