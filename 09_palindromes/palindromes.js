const palindromes = function (str) {
    const inStr = str.replace(/[^A-Za-z]/g,'').toLowerCase();
    const revStr = inStr.split('').reverse().join('');
    return (inStr === revStr);
};
// Do not edit below this line
module.exports = palindromes;
