import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const validateForm = () => {  
        let valid = true;
        let errors = {};
        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errors.email = 'Invalid email address';
            valid = false;
        }
        if (!password) {
            errors.password = 'Password is required';
            valid = false;
        }
        setErrors(errors);
        return valid;
    };
    async function submit(e) {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const res = await axios.post("http://localhost:3001/login", { email, password });
            if (res.data.token && res.data.username) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.data.username); // Store the username
                navigate("/employees");
                window.location.reload();
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-14">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-4xl mb-6 text-center font-semibold text-gray-800">Log In</h1>
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <button onClick={() => navigate('/signup')} className="text-blue-600 hover:underline">Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
