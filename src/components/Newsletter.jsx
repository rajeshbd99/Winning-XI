import React, { useState } from 'react';
import heroBg from '../assets/bg-shadow.png';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            localStorage.setItem('subscribedEmail', email);
            alert('Subscribed successfully!');
        }
    };

    return (
        <div className='p-4 backdrop-blur-xl bg-white/30 border rounded-2xl max-w-5xl mx-auto mt-32 md:mt-16'>
            <div className="bg-white bg-hero-pattern bg-cover bg-center text-gray-800 py-8 max-w-5xl mx-auto rounded-xl" style={{ backgroundImage: `url(${heroBg})` }}>
                <h2 className="text-center text-2xl font-bold mb-4 p-1">Subscribe to our Newsletter</h2>
                <p className='text-center text-base mb-3'>Get the latest updates and news right in your inbox!</p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-center px-5">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 border rounded-lg md:rounded-none md:rounded-s-lg border-gray-300 outline-none text-black"
                    />
                    <button
                        onClick={handleSubscribe}
                        className="bg-yellow-400 rounded-lg md:rounded-none md:rounded-e-lg text-black px-4 py-2 hover:bg-yellow-500"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
