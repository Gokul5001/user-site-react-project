import React from "react";
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">
                    Hello {location.state?.id} and welcome to the home
                </h1>
            </div>
        </div>
    );
}

export default Home;


