// Returns a boolean value
function palindrome(str) {
  // Remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case)
  str = [...str.toLowerCase()]
    .filter((value) => value.match(/^[a-z0-9]$/))
    .join('');

  // Reverse the string
  let reversedStr = [...str].reverse().join('');

  // Check whether they are equal
  return reversedStr === str;
}
