import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, TrendingUp, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Explore Funds', path: '/explore' },
        { name: 'Admin', path: '/admin' },
        { name: 'Advisor', path: '/advisor' },
        { name: 'Analyst', path: '/analyst' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center gap-2">
                            <TrendingUp className="h-6 w-6 text-accent" />
                            <span className="font-bold text-xl text-primary dark:text-white tracking-tight">FundInsight</span>
                        </NavLink>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-slate-600 dark:text-slate-300'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <Link to="/login" className="bg-accent hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                            Login
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 absolute w-full left-0">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-accent' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="flex items-center justify-between px-3 py-2">
                            <span className="text-slate-600 dark:text-slate-300 font-medium">Dark Mode</span>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                            >
                                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                        </div>
                        <div className="px-3 pt-2">
                            <Link to="/login" onClick={() => setIsOpen(false)} className="block text-center w-full bg-accent hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
