// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = drivers.map(function(name) {return name.toLowerCase()});
  console.log(lowerDrivers);
  return lowerDrivers;
}

function nameToAttributes(drivers) {
  for (let i = 0; i < drivers.length; i++) {
    const name = drivers[i]
    ///console.log(name)
    ///debugger;

    for (let x = 0; x < name.length; x++) {
      const letter = name[x];
      ///console.log(letter);
      ///debugger;
      if (letter = " ") {
        
      }
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

  }
}

function attributesToPhrase(drivers) {
  let phrase = [];
  let  driverName = drivers.map(function(driver) {return driver.name});
  let driverHometown = drivers.map(function(driver) {return driver.hometown});
  console.log(driverName);
  console.log(driverHometown);
  for (let i = 0; i < driverName.length; i++) {
    phrase.push(`${driverName[i]} is from ${driverHometown[i]}`)
    console.log(phrase)
  }
  return phrase
}
