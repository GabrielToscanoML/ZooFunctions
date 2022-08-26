const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  data.forEach((element) => {
    element.includes((element.name === animal) => {
      if (element.age >= age) {
        return true;
      }
      return false;
      // animal.age >= age ? true : false;
    });
  });
}

module.exports = getAnimalsOlderThan;
