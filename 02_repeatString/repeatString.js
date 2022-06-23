const repeatString = function(str,num) {
    const output = [];
    if (num >= 0) {
    for (let i = 0; i < num; i++) {
        output.push(str);
    };
    return output.join('');
} else {
    return 'ERROR';
}
};

// Do not edit below this line
module.exports = repeatString;
