const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui

  let result = true;

  data.species.filter((element) => {
    if (element.name === animal) {
      element.residents.filter((elemento) => {
        if (elemento.age < age) {
          result = false;
        }
        return result;
      });
    }
    return result;
  });
  return result;
}

module.exports = getAnimalsOlderThan;
