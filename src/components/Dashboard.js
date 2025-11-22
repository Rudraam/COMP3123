import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions';

const Dashboard = () => {
    // 0. State: Access state from store
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {user}!</p>
            <p>Your Token: {token}</p>
            <p>This is a protected route.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
