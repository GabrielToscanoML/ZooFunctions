const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees.filter((manager) =>
    manager.managers.includes(managerId)).map((person) =>
    `${person.firstName} ${person.lastName}`);
}
module.exports = { isManager, getRelatedEmployees };
