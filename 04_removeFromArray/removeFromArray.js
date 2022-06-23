const removeFromArray = function(arr,...elements) {
    let i;
    elements.forEach(element => {
        i = arr.indexOf(element);
        if (i >= 0) {
            arr.splice(i,1);
        }
    });
    return arr;
}
// Do not edit below this line
module.exports = removeFromArray;
