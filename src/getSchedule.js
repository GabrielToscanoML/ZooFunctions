const data = require('../data/zoo_data');

function createObject() {
  const obj = {
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
    Monday: {},
  };
  // completeObject(obj);
  return obj;
}

function getSchedule(scheduleTarget) {
  // seu código aqui

  if (!scheduleTarget) {
    return createObject();
  }

  const animal = data.species.find((element) => (element.name === scheduleTarget));
  return animal.availability;
}

module.exports = getSchedule;
console.log(getSchedule());

// Tuesday: {
//   officeHour: `Open from ${hours.Tuesday.open} until ${hours.Tuesday.close}`,
//   exibithion: getAnimals(Tuesday),
// },
// Wednesday: {
//   officeHour: `Open from ${hours.Wednesday.open} until ${hours.Wednesday.close}`,
//   exibithion: getAnimals(Wednesday),
// },
// Thursday: {
//   officeHour: `Open from ${hours.Thursday.open} until ${hours.Thursday.close}`,
//   exibithion: getAnimals(Thursday),
// },
// Friday:{
//   officeHour: `Open from ${hours.Friday.open} until ${hours.Friday.close}`,
//   exibithion: getAnimals(Friday),
// },
// Saturday: {
//   officeHour: `Open from ${hours.Saturday.open} until ${hours.Saturday.close}`,
//   exibithion: getAnimals(Saturday),
// },
// Sunday: {
//   officeHour: `Open from ${hours.Sunday.open} until ${hours.Sunday.close}`,
//   exibithion: getAnimals(Sunday),
// },
// Monday: {
//   officeHour: `Open from ${hours.Monday.open} until ${hours.Monday.close}`,
//   exibithion: getAnimals(Monday),
// },
