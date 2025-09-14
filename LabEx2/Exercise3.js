const capital = ([first, ...rest]) => 
    first.toUpperCase() + rest.join('');


const colors = ['red','green','blue']

const capitalizedColors = colors.map(color => capital(color));

console.log(capitalizedColors)