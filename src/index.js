function factorial_1(n) {
    if (n === 0n || n === 1n) {
        return 1n;
    }
    if (n > 0n) {
        return n * factorial_1(n - 1n);
    }
}

function factorial_2(n) {
    if (n === 0n || n === 1n) {
        return 1n;
    }
    if (n > 0n) {
        return n * factorial_2(n - 2n);
    }
}

module.exports = function zeros(expression) {
    const factorials = expression.split("*");
    const result = factorials.reduce((acc, str) => {
        if (str.endsWith("!!")) {
            const str2 = str.substr(0, str.length - 2);
            return acc * BigInt(factorial_2(BigInt(str2)));
        }

        const str1 = str.substr(0, str.length - 1);
        const factorialValue = factorial_1(BigInt(str1));
        return acc * BigInt(factorialValue);
    }, BigInt(1));

    const resultString = String(result);
    const resultArray = resultString.split("").reverse();
    return resultArray.findIndex(value => value !== "0");
};
