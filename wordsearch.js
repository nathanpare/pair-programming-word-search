const {transpose} = require("./transpose");

const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return undefined;
    } 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const lettersTransposed = transpose(letters) 
    const verticalJoin = lettersTransposed.map(lsv => lsv.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (const lv of verticalJoin) {
        if (lv.includes(word)) return true
    }
    return false;
};

module.exports = wordSearch;
