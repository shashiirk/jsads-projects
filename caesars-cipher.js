// Returns a ROT13 decoded string
function rot13(str) {
  // To store decoded characters
  const decodedStringArray = [];
  [...str].forEach((value) => {
    // If value is an alphabetic character decode it
    if (value >= 'A' && value <= 'Z') {
      if (value < 'N') {
        decodedStringArray.push(String.fromCharCode(value.charCodeAt(0) + 13));
      } else {
        decodedStringArray.push(
          String.fromCharCode(64 + (value.charCodeAt(0) + 13) - 90)
        );
      }
    } else {
      // Push non-alphabetic character as it is
      decodedStringArray.push(value);
    }
  });

  return decodedStringArray.join('');
}
