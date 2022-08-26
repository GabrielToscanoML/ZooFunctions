const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const resultado = [];
  species.filter((element) => {
    ids.forEach((elemento) => {
      if (element.id === elemento) {
        resultado.push(element);
      }
    });
    return resultado;
  });
  return resultado;
}
module.exports = getSpeciesByIds;
