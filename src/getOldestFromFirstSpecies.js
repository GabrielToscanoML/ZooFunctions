const data = require('../data/zoo_data');

function returnEmployee(id) {
  return data.employees.find((element) => element.id === id);
}

function returnAnimal(animalID) {
  return data.species.find((element) => element.id === animalID);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // pega o primeiro funcionário e a primeira espécie
  const employee = returnEmployee(id).responsibleFor[0];
  // pega os animais da e espécie
  const animais = returnAnimal(employee).residents;

  const ordenaAnimais = animais.sort((animalA, animalB) => animalB.age - animalA.age)[0];

  const resultado = [`${ordenaAnimais.name}`, `${ordenaAnimais.sex}`, ordenaAnimais.age];

  return resultado;
}

module.exports = getOldestFromFirstSpecies;
