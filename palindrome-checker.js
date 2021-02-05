function palindrome(str) {
  str = [...str.toLowerCase()].filter(value => value.match(/^[a-z0-9]$/)).join('');
  let reversedStr = [...str].reverse().join('');
  return reversedStr === str;
}

palindrome("eye");