import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MyAccount() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch user details using the stored token
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:3001/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-6">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-bold mb-4">My Account Details</h2>
                        {userData ? (
                            <div>
                                <p className="text-gray-700"><strong>Username:</strong> {userData.username}</p>
                                <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
                                {/* Add more details as needed */}
                            </div>
                        ) : (
                            <p>Loading user data...</p>
                        )}
                    </div>
                    <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
                        <Link to="/" className="text-blue-500 font-semibold hover:text-blue-600">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
