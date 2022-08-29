const data = require('../data/zoo_data');

function getResidentsLenght(animal) {
  const { specie } = animal;
  let result;
  data.species.forEach((element) => {
    if (element.name === specie) {
      result = element.residents.length;
    }
  });
  return result;
}

function getResidentsSexLength(animal) {
  const { specie } = animal;
  const { sex } = animal;
  let count = 0;
  let result;
  data.species.forEach((element) => {
    if (element.name === specie) {
      element.residents.forEach((elemento) => {
        if (elemento.sex === sex) {
          count += 1;
        }
      });
    }
    result = count;
  });
  return result;
}

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal !== 'undefined') {
    const objKeysLength = Object.keys(animal).length;
    if (objKeysLength === 1) {
      return getResidentsLenght(animal);
    }
    if (objKeysLength === 2) {
      return getResidentsSexLength(animal);
    }
  }
  const obj = {};
  const add = (element) => {
    obj[`${element.name}`] = element.residents.length;
  };
  data.species.forEach(add);
  console.log(obj);
  return obj;
}
module.exports = countAnimals;
