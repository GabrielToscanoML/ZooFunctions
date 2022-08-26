const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  let result = {

  };

  data.employees.filter((funcionario) => {
    if (funcionario.firstName === employeeName) {
      result = funcionario;
    }
    if (funcionario.lastName === employeeName) {
      result = funcionario;
    }
    return result;
  });

  return result;
}

module.exports = getEmployeeByName;
