'use strict';

const sum = (...args) => {
  let accum = 0;
  for (const arg of args) {
    accum += arg;
  }
  return accum;
};

module.exports = { sum };
