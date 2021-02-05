// Returns Roman Number
function convertToRoman(num) {
  // Roman Numbers for ones place values
  const ones = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  // Roman Numbers for tens place values
  const tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  // Roman Numbers for hundreds values
  const hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  // Roman Number for thousand value
  const thousand = 'M';
  let digit;

  // Array to store each place value
  const places = [];
  // Get each place value
  while (num > 0) {
    digit = num % 10;
    places.push(digit);
    num = parseInt(num / 10);
  }

  // Array to store Roman Number for each value
  let romanNumberList = [];
  places.forEach((value, index) => {
    if (value !== 0) {
      if (index === 0) {
        romanNumberList.unshift(ones[value - 1]);
      } else if (index === 1) {
        romanNumberList.unshift(tens[value - 1]);
      } else if (index === 2) {
        romanNumberList.unshift(hundreds[value - 1]);
      } else if (index === 3) {
        romanNumberList.unshift('M'.repeat(value));
      }
    }
  });

  // Convert list to string and return
  return romanNumberList.join('');
}
