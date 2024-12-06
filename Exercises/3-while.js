'use strict';

const sum = (...args) => {
  let index = 0;
  let accum = 0;
  while (index < args.length) {
    accum += args[index++];
  }
  return accum;
};

module.exports = { sum };
