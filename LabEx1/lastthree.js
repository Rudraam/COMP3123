function lastThreeLettersMove(str) {
if (str.length < 3) return str;
return str.slice(-3) + str.slice(0, -3);
}