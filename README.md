# React Redux and JWT Demo

This application demonstrates the implementation of Redux for state management and a simulated JWT (JSON Web Token) authentication flow in a React application.

## Concepts Demonstrated

### Redux
The application uses the following Redux concepts:
1.  **State**: The single source of truth for the application (authentication status, user info, token).
2.  **Store**: Holds the application state.
3.  **Reducer**: Specifies how the application's state changes in response to actions (`authReducer`).
4.  **Action**: Payloads of information that send data from the application to the store (`LOGIN_SUCCESS`, `LOGOUT`).
5.  **Dispatch**: The method used to send actions to the store.
6.  **Subscribe**: A listener that runs whenever an action is dispatched (used here to log state changes).

### JWT (JSON Web Token)
-   **Simulation**: The `fakeAuth` utility simulates an API call that returns a JWT upon successful login.
-   **Storage**: The token is stored in the Redux state (in a real app, it might also be stored in localStorage/cookies).
-   **Protected Routes**: The Dashboard is only accessible when a valid token is present in the state.

## How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the application:
    ```bash
    npm start
    ```

## Usage

1.  **Login**: Enter `user` as the username and `password` as the password.
2.  **Dashboard**: Upon success, you will be redirected to the Dashboard, which displays your username and the simulated token.
3.  **Logout**: Click the Logout button to clear the state and return to the login screen.
