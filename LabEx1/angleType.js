function angleType(a, b, c) {
if (a + b + c !== 180 || a <= 0 || b <= 0 || c <= 0) {
return "invalid";
}
if (a === 90 || b === 90 || c === 90) {
return "right";
}
if (a > 90 || b > 90 || c > 90) {
return "obtuse";
}
return "acute";
}