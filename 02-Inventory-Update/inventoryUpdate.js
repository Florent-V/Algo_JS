function inventoryUpdate(curInv, newInv) {
  newInv.forEach(element => {
    const found = curInv.find((item) => item[1] === element[1]);
    if (found) {
        found[0] += element[0];
    } else {
        curInv.push(element);
    }
    });
    return curInv.sort(function (a, b) {
      return a[1].localeCompare(b[1]);
    });
}

function updateInventory(curInv, newInv) {
  newInv.forEach(element => {
  const found = curInv.find((item) => item[1] === element[1]);
  if (found) {
      found[0] += element[0];
  } else {
      curInv.push(element);
  }
  });
  return curInv.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
}

module.exports = inventoryUpdate;
