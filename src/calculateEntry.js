const data = require('../data/zoo_data');

function verifyAge(element, object) {
  const teste = object;
  if (element < 18) {
    teste.child += 1;
  } else if (element > 17 && element < 50) {
    teste.adult += 1;
  } else {
    teste.senior += 1;
  }
}

function countEntrants(entrants) {
  // seu código aqui
  if (entrants.length === 0 || entrants.length === undefined) {
    return 0;
  }
  const visitants = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    verifyAge(element.age, visitants);
  });
  return visitants;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) {
    return 0;
  }
  if (!entrants || !countEntrants(entrants)) {
    return 0;
  }
  const child = countEntrants(entrants).child * data.prices.child;
  const adult = countEntrants(entrants).adult * data.prices.adult;
  const senior = countEntrants(entrants).senior * data.prices.senior;
  return (child + adult + senior);
}

module.exports = { calculateEntry, countEntrants };
