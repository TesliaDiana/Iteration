'use strict';

const max = (matrix) => {
  let maxValue = 0;
  for (const row of matrix) {
    for (const column of row) {
      maxValue = column > maxValue ? column : maxValue;
    }
  }
  return maxValue;
};

module.exports = { max };
