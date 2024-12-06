'use strict';

const sum = (...args) => {
  let accum = 0;
  for (let i = 0; i < args.length; i++) {
    accum += args[i];
  }
  return accum;
};
module.exports = { sum };
