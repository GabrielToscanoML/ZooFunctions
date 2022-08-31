const data = require('../data/zoo_data');
const { employees } = data;

function findPerson(parametro) {
  if (Object.keys(parametro).includes('name')) {
    return employees.find((element) =>
      (element.firstName === parametro.name) || (element.lastName === parametro.name));
  }
  if (Object.keys(parametro).includes('id')) {
    return employees.find((element) => element.id === parametro.id);
  }
  return false;
}

function getId(parametro) {
  return parametro.id;
}

function getName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function getSpecie(specieID) {
  return data.species.find((element) => element.id === specieID);
}

function getSpecies(person) {
  return person.responsibleFor.map((element) => getSpecie(element).name);
}

function getLocation(specieID) {
  return data.species.find((element) => element.id === specieID).location;
}

function getLocations(person) {
  return person.responsibleFor.map((element) => getLocation(element));
}

function createList(person) {
  const obj = {
    id: getId(person),
    fullName: getName(person),
    species: getSpecies(person),
    locations: getLocations(person),
  };
  return obj;
}

function getEmployeesCoverage(parametro) {
  // seu código aqui
  if (!parametro) {
    return employees.map((element) => createList(element));
  }
  const person = findPerson(parametro);
  if (!person) {
    throw new Error('Informações inválidas');
  }
  console.log(typeof person);
  const obj = {
    id: getId(person),
    fullName: getName(person),
    species: getSpecies(person),
    locations: getLocations(person),
  };
  return obj;
}

module.exports = getEmployeesCoverage;
