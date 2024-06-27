import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-right">
        <div className="">Brand</div>
        <div className="">
          <a href="/Home" className="">Home</a>
          <a href="/job " className="">Job</a>
          <a href="/profile" className="">Profile</a>
          <a href="/profile1" className="">Profile1</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
