// Returns {status: '...', change: [...]}
function checkCashRegister(price, cash, cid) {
  // Unit price
  let unitPrices = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100],
  ];

  // Cash to be returned
  let returnedCash = [
    ['PENNY', 0],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ];

  // Final result object
  let res;
  // Due amount
  let due = cash - price;

  let checkIndex;
  for (let i = 0; i < unitPrices.length; i++) {
    if (unitPrices[i][1] > due) {
      checkIndex = i - 1;
      break;
    }
  }

  // Perform cash distributing
  while (checkIndex >= 0) {
    while (due - unitPrices[checkIndex][1] >= 0 && cid[checkIndex][1] > 0) {
      due -= unitPrices[checkIndex][1];
      due = parseFloat(due.toFixed(2));
      cid[checkIndex][1] -= unitPrices[checkIndex][1];
      cid[checkIndex][1] = parseFloat(cid[checkIndex][1].toFixed(2));
      returnedCash[checkIndex][1] += unitPrices[checkIndex][1];
      returnedCash[checkIndex][1] = parseFloat(
        returnedCash[checkIndex][1].toFixed(2)
      );
    }
    checkIndex -= 1;
  }

  // If cash-in-drawer is less than the change due, or if you cannot return the exact change.
  if (due > 0) {
    res = {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  }
  // If cash-in-drawer is sufficient to return due amount
  else if (due === 0) {
    // If cash-in-drawer is empty
    if (cid.reduce((prev, cur) => prev + cur[1], 0) === 0) {
      res = {
        status: 'CLOSED',
        change: [...returnedCash],
      };
    }
    // If cash-in-drawer is non-empty
    else {
      // Filter for currency used
      returnedCash = returnedCash.filter((value) => value[1] > 0);
      // Sort currency in descending order
      returnedCash.sort((a, b) => b[1] - a[1]);
      res = {
        status: 'OPEN',
        change: [...returnedCash],
      };
    }
  }

  // Return final result object
  return res;
}
