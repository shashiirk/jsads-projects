// Validates telephone number
function telephoneCheck(str) {
  // Regex pattern
  const pattern = /^(1\s?)?((\(\d{3}\))|(\d{3}))[- ]?\d{3}[- ]?\d{4}$/;

  // Returns boolean value
  return pattern.test(str);
}
