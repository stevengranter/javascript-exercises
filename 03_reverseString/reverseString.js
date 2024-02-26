const reverseString = function (word) {
    let charArray = []
    for (letter in word) {
        let char = word.at(letter)
        console.log(char)
        charArray.unshift(char)
    }
    return (charArray.join(''))
}

reverseString("smile")

// Do not edit below this line
module.exports = reverseString
