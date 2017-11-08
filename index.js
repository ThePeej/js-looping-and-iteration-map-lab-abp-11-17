// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = drivers.map(function(name) {return name.toLowerCase()});
  //console.log(lowerDrivers);
  return lowerDrivers;
}

function nameToAttributes(drivers) {
  let sortedDrivers = []
  let sortedNames = []
  for (let i = 0; i < drivers.length; i++) {
    const name = drivers[i] //name will iterate through each element in 'drivers' array

    //console.log(name)
    //debugger;

    for (let x = 0; x < name.length; x++) {
      const letter = name[x]; //letter will iterate through each letter per name of 'drivers' array
      let first = [];
      let last = [];
      //console.log(letter);
      //debugger;

      //checks to see if current letter is a space, then knows proper index of current name element for slicing apart first and last name
      if (letter === " ") {

        first = name.slice(0,x); //first is the letters up to the space
        last = name.slice(x+1); //last is the letters after (and not including) the space
        sortedNames = Object.assign({}, { firstName: `${first}`}, { lastName: `${last}`})
        //sortedNames.firstName = first; //creating object key pairs bro!
        //sortedNames.lastName = last;
        //console.log(first);
        //console.log(last);
        //console.log(sortedNames);
        sortedDrivers.push(sortedNames);
        ///console.log(sortedDrivers)
        ///debugger;
      }
    }
  }
  console.log(sortedDrivers)
  ///debugger;
  return sortedDrivers
}

/*
for (const name of drivers) {
  const space = " ";
  find index where space is
  first = array up to but not including
  last= array after space
  newArr.firstName = drivers.map(function(first) {return first})
  newArr.lastName = drivers.map(function(last) {return last})
  */

function attributesToPhrase(drivers) {
  let phrase = [];
  let  driverName = drivers.map(function(driver) {return driver.name});
  let driverHometown = drivers.map(function(driver) {return driver.hometown});
  ///console.log(driverName);
  ///console.log(driverHometown);
  for (let i = 0; i < driverName.length; i++) {
    phrase.push(`${driverName[i]} is from ${driverHometown[i]}`)
    ///console.log(phrase)
  }
  return phrase
}
