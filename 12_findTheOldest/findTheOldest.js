const findTheOldest = obj => (obj.reduce((prev, current) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    
    let prevAge = currentYear - prev.yearOfBirth;
    if (prev.yearOfDeath) {
        prevAge = prev.yearOfDeath - prev.yearOfBirth 
    }
    
    let currentAge = currentYear - current.yearOfBirth;
    if (current.yearOfDeath) {
        currentAge = current.yearOfDeath - current.yearOfBirth 
    }

    return prevAge > currentAge ? prev : current;
}));

// Do not edit below this line
module.exports = findTheOldest;
