const removeFromArray = function(...args) {
    let argArray = args[0];
    let uniqueArray = [];
    argArray.forEach((item) => {
        if (!args.includes(item)) {
            uniqueArray.push(item);
        }
    })
    return uniqueArray
}

module.exports = removeFromArray
