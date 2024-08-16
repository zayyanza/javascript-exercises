const palindromes = function (string) {
    const punctuationArray = ['.', ',', '!', '?', ';', ':', '-', '_',
         '(', ')', '[', ']', '{', '}', "'", '"', '/', '\\', '|', '@', '#', '$', '%', '^', '&', '*', '+', '=', '<', '>', '`', '~'];
    let splitted = string.toLowerCase().split("");
    let filtered = splitted.filter(function (char) {
        return !punctuationArray.includes(char) && char !== " ";
    })
    let reversed = [...filtered].reverse();
    return filtered.join("") === reversed.join("");
}

// Do not edit below this line
module.exports = palindromes;
