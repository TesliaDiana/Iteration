'use strict';

const ages = (persons) => {
  const ageByName = {};
  for (const name in persons) {
    ageByName[name] = persons[name].died - persons[name].born;
  }
  return ageByName;
};

module.exports = { ages };
