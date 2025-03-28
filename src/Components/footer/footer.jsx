import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                
                {/* Brand & Short Description */}
                <div>
                    <h2 className="text-2xl font-bold text-white">ShopEase</h2>
                    <p className="mt-2 text-gray-400">
                        Your one-stop shop for all the latest fashion and electronics. Quality guaranteed!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Shop</a></li>
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-xl font-semibold text-white">Customer Service</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                        <li><a href="#" className="hover:text-white transition">Return Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                        <li><a href="#" className="hover:text-white transition">Support</a></li>
                    </ul>
                </div>

                {/* Newsletter & Socials */}
                <div>
                    <h3 className="text-xl font-semibold text-white">Subscribe</h3>
                    <p className="mt-2 text-gray-400">Get the latest deals & updates in your inbox.</p>
                    <div className="mt-3 flex">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full p-2 rounded-l bg-gray-800 border border-gray-700 text-white outline-none"
                        />
                        <button className="bg-blue-600 px-4 py-2 rounded-r text-white font-medium hover:bg-blue-500 transition">
                            Subscribe
                        </button>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} ECOMM. All Rights Reserved.
            </div>
        </footer>
    );
}

export default footer;
