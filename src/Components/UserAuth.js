
import React, { useState } from 'react';

const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toggleAuthMode = () => setIsLogin(!isLogin);

    const handleSubmit = () => {
        // Mock authentication logic
        alert(isLogin ? 'Logged in' : 'Registered');
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>
                {isLogin ? 'Login' : 'Register'}
            </button>
            <button onClick={toggleAuthMode}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
};

export default UserAuth;
