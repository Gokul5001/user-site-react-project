import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', username: '' });

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

        if (!username) {
            errors.username = 'Username is required';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    async function submit(e) {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const res = await axios.post("http://localhost:3001/signup", { email, password, username });
            if (res.data === "exist") {
                alert("User already exists");
            } else {
                alert("Signup successful. Please login.");
                localStorage.setItem('username', username); 
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-14">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-4xl mb-6 text-center font-semibold text-gray-800">Sign Up</h1>
                <form onSubmit={submit} className="space-y-6">
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    <input
                        type="submit"
                        value="Signup"
                        className="w-full bg-blue-500 text-white py-3 rounded hover:bg-indigo-600 transition duration-300"
                    />
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">Already have an account? </span>
                    <button onClick={() => navigate('/login')} className=" text-blue-500 hover:underline">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
