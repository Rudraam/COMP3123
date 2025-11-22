import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const AppContent = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    return (
        <div className="App">
            <h1>Redux + JWT Demo</h1>
            {isAuthenticated ? <Dashboard /> : <Login />}
        </div>
    );
};

function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}

export default App;
