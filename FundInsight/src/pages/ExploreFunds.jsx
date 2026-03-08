import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, ChevronRight, TrendingUp } from 'lucide-react';
import { mockFunds } from '../data/mockData';

const ExploreFunds = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedRisk, setSelectedRisk] = useState('All');

    const categories = ['All', 'Equity', 'Debt', 'Index'];
    const risks = ['All', 'Low', 'Moderate', 'High'];

    const filteredFunds = mockFunds.filter(fund => {
        const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || fund.category === selectedCategory;
        const matchesRisk = selectedRisk === 'All' || fund.risk === selectedRisk;
        return matchesSearch && matchesCategory && matchesRisk;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary dark:text-white mb-2">Explore Mutual Funds</h1>
                <p className="text-slate-600 dark:text-slate-400">Discover and analyze top-performing funds to build your wealth.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-6 text-primary dark:text-white font-semibold">
                            <SlidersHorizontal className="h-5 w-5" />
                            <h2>Filters</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Category</h3>
                                <div className="space-y-2">
                                    {categories.map(category => (
                                        <label key={category} className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category}
                                                checked={selectedCategory === category}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="w-4 h-4 text-accent border-slate-300 focus:ring-accent"
                                            />
                                            <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Risk Level</h3>
                                <div className="space-y-2">
                                    {risks.map(risk => (
                                        <label key={risk} className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="risk"
                                                value={risk}
                                                checked={selectedRisk === risk}
                                                onChange={(e) => setSelectedRisk(e.target.value)}
                                                className="w-4 h-4 text-accent border-slate-300 focus:ring-accent"
                                            />
                                            <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">{risk}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow">
                    <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center mb-6">
                        <Search className="h-5 w-5 text-slate-400 mx-3" />
                        <input
                            type="text"
                            placeholder="Search funds by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-0 text-primary dark:text-white placeholder-slate-400 py-2 outline-none"
                        />
                    </div>

                    <div className="space-y-4">
                        {filteredFunds.length > 0 ? (
                            filteredFunds.map((fund, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={fund.id}
                                    className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-accent/50 transition-all group"
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-bold text-primary dark:text-white group-hover:text-accent transition-colors">
                                                    <Link to={`/fund/${fund.id}`}>{fund.name}</Link>
                                                </h3>
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${fund.risk === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' :
                                                        fund.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30' :
                                                            'bg-green-100 text-green-700 dark:bg-green-900/30'
                                                    }`}>
                                                    {fund.risk} Risk
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30">
                                                    {fund.category}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                                <div>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">NAV</p>
                                                    <p className="font-semibold text-primary dark:text-white">${fund.nav}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">1Y Return</p>
                                                    <p className="font-semibold text-green-500 flex items-center">
                                                        <TrendingUp className="h-3 w-3 mr-1" /> {fund.returns["1Y"]}%
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">3Y Return</p>
                                                    <p className="font-semibold text-slate-700 dark:text-slate-300">{fund.returns["3Y"]}%</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Expense Ratio</p>
                                                    <p className="font-semibold text-slate-700 dark:text-slate-300">{fund.expenseRatio}%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-auto mt-4 md:mt-0">
                                            <Link
                                                to={`/fund/${fund.id}`}
                                                className="w-full md:w-auto inline-flex justify-center items-center px-6 py-2.5 text-sm font-medium rounded-xl text-white bg-accent hover:bg-green-600 shadow-sm transition-colors"
                                            >
                                                Invest <ChevronRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <Filter className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-primary dark:text-white mb-2">No funds found</h3>
                                <p className="text-slate-500 dark:text-slate-400">Try adjusting your filters or search term.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreFunds;
