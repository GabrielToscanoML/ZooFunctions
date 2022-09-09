const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsLocation(location) {
  const animals = species.filter((element) => element.location === location);
  return animals.map((element) => element.name);
}

function getAnimalMap(options) {
  // seu código aqui
  const animals = {
    NE: getAnimalsLocation('NE'),
    NW: getAnimalsLocation('NW'),
    SE: getAnimalsLocation('SE'),
    SW: getAnimalsLocation('SW'),
  };
  console.log(animals);
}

module.exports = getAnimalMap;
getAnimalMap();
