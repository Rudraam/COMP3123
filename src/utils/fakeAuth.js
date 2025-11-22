export const fakeAuth = {
    login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'user' && password === 'password') {
                    // Simulate a JWT token
                    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fake.token';
                    resolve({ user: username, token });
                } else {
                    reject('Invalid credentials');
                }
            }, 1000); // Simulate network delay
        });
    },
};
