const findTheOldest = function(people) {
    const ages = people.map((e) => {
        if ('yearOfDeath' in e) {
            return e.yearOfDeath - e.yearOfBirth;
        } else {
            const d = new Date();
            return d.getFullYear() - e.yearOfBirth;
        }
    });
    const oldest = ages.indexOf(Math.max(...ages));
    return people[oldest];
};
// Do not edit below this line
module.exports = findTheOldest;
