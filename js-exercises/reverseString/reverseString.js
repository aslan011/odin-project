const reverseString = function(string) {
    let splitString = string.split("");
    let reverseString = splitString.reverse();
    let joinedString = reverseString.join("");
    return joinedString;}

module.exports = reverseString
