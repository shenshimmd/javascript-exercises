const reverseString = function(word) {
    let reverse = word.split("");
    let reversed = "";
    for(let i = 0; i <reverse.length; i++){
        reversed = reversed + reverse[(reverse.length - i - 1)];
    }
    return reversed;
};
//or return word.split("").reverse().join("");
// Do not edit below this line
module.exports = reverseString;
