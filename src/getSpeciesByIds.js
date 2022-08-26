const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  // seu código aqui
  const arraySpecies = [];
  if (ids === '') {
    return arraySpecies;
  }

  species.forEach((element) => {
    if (species.find(ids)) {
      arraySpecies.push(element);
    }
    return arraySpecies;
  });
}

module.exports = getSpeciesByIds;
  //  else {
  //   species.forEach((element) => {
  //     ids.forEach((elemento) => {
  //       if (element.id === elemento) {
  //         arraySpecies.push(element);
  //       }
  //     });
  //   });
  //   return arraySpecies;
  // }