const generateRandomNumber = (numDigits) => {
  let result = "";
  for (let i = 0; i < numDigits; i++) {
    const digit = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    result += digit;
  }
  return result;
};

module.exports = generateRandomNumber;