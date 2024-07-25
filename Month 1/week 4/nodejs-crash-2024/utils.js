function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celsiustoFarenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// using commonJS approach
module.exports = {
    generateRandomNumber,
    celsiustoFarenheit,
};