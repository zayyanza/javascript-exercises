const findTheOldest = function(people) {
    let oldest = people.reduce((oldest, person) => {
        let currentYear = new Date().getFullYear();
        let ageOfPerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        let ageOfOldest = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return ageOfPerson > ageOfOldest ? person : oldest;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
