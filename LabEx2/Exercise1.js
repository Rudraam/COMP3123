const greeter = (myArray, counter) => {
    const greetText = 'Hello';

    for (const name of myArray.slice(0, counter)) {
        console.log(`${greetText} ${name}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
