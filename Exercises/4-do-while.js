'use strict';

const sum = (...args) => {
  let accum = 0;
  let index = 0;
  do {
    accum += args[index++] ?? 0;
  } while (index < args.length);
  return accum;
};

module.exports = { sum };
