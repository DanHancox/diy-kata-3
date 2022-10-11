const numberToReversedDigits = (number) => {
    const newArray = number.split("").reverse().map(Number);
    return newArray;
};


module.exports = numberToReversedDigits;
