function capitalizeFirstLetter(str) {
    if (str === null || str.length === 0) {
        return str;
    }
    const firstLetter = str.charAt(0).toUpperCase();
    const remainingLetters = str.slice(1);
    return firstLetter + remainingLetters;
}

const originalString = "hello world";
const capitalizedString = capitalizeFirstLetter(originalString);
console.log("Original: " + originalString);
console.log("Capitalized: " + capitalizedString);
