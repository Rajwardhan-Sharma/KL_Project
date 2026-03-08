import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
