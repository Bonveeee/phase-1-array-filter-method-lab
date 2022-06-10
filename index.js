// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  let result = drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
  return result;
}

function fuzzyMatch(drivers, likelyMatchName) {
  let result = drivers.filter(drivers=> drivers.slice(0, 1) === likelyMatchName.slice(0, 1));
  return result;
}

function matchName(drivers, name) {
   let results = drivers.filter(drivers => drivers.name === name);
   return results;
}
