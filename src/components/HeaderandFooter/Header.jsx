import React, { useState } from 'react';
import { FaHome, FaUtensils, FaRegFileAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-green-600 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                <a className="text-3xl font-bold text-white no-underline" href="#">
                    BiteDelight
                </a>

                <div className="hidden lg:flex flex-grow justify-center">
                    <ul className="flex space-x-4 ">
                        <li>
                            <Link to={'/'} className='text-white hover:text-gray-200 flex items-center no-underline me-3 text-xl'>
                                <FaHome className="mr-2" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/view-recipe'} className='text-white hover:text-gray-200 flex items-center no-underline me-3 text-xl'>
                                <FaUtensils className="mr-2" /> View Items
                            </Link>
                        </li>
                        <li>
                            <Link to={'/form-recipe'} className='text-white hover:text-gray-200 flex items-center no-underline me-3 text-xl'>
                                <FaRegFileAlt className="mr-2" /> Form
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center">
                    <a className="text-white mx-2 text-2xl" href="#">
                        <FaFacebook />
                    </a>
                    <a className="text-white mx-2 text-2xl" href="#">
                        <FaInstagram />
                    </a>
                    <a className="text-white mx-2 text-2xl" href="#">
                        <FaTwitter />
                    </a>
                </div>

                <div className="lg:hidden">
                    <button
                        className={`bg-blue-500 text-white p-2 rounded ${isMenuOpen ? 'bg-blue-700' : 'bg-blue-500'}`}
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden">
                    <ul className="flex flex-col p-4 bg-green-700">
                        <li className="py-2">
                            <Link to={'/'} className='text-white hover:text-gray-200 flex items-center no-underline'>
                                <FaHome className="mr-2" /> Home
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to={'/view-recipe'} className='text-white hover:text-gray-200 flex items-center no-underline'>
                                <FaUtensils className="mr-2" /> View Items
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to={'/form-recipe'} className='text-white hover:text-gray-200 flex items-center no-underline'>
                                <FaRegFileAlt className="mr-2" /> Form
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Header;
