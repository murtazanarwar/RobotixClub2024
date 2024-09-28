import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-amber-400 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-800">
                ROBOTIX CLUB NITRR
              </a>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a>
              <a href="/post" className="text-gray-600 hover:text-gray-800">Blog</a>
              <a href="/sign-up" className="text-gray-600 hover:text-gray-800">Register</a>
            </div>
            <div className="flex md:hidden">
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" type="button">
                {/* Icon for mobile menu */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;