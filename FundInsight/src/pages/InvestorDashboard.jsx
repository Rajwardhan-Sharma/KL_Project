import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import PortfolioChart from '../components/dashboard/PortfolioChart';
import SIPCalculator from '../components/dashboard/SIPCalculator';
import { mockTransactions, mockFunds } from '../data/mockData';

const InvestorDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary dark:text-white mb-2">Welcome back, Alice!</h1>
                <p className="text-slate-600 dark:text-slate-400">Here's what is happening with your portfolio today.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Portfolio Value</p>
                            <h2 className="text-3xl font-bold text-primary dark:text-white mt-1">$140,250.00</h2>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                            <Wallet className="h-6 w-6 text-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center text-sm">
                        <span className="flex items-center font-medium text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-md">
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                            +12.5%
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 ml-2">vs last year</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Invested</p>
                            <h2 className="text-3xl font-bold text-primary dark:text-white mt-1">$115,000.00</h2>
                        </div>
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                            <TrendingUp className="h-6 w-6 text-indigo-500" />
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        Across 5 Mutual Funds
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Returns</p>
                            <h2 className="text-3xl font-bold text-green-500 mt-1">+$25,250.00</h2>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-xl">
                            <ArrowUpRight className="h-6 w-6 text-green-500" />
                        </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-4">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '22%' }}></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Column */}
                <div className="lg:col-span-2 space-y-8">
                    <PortfolioChart />

                    {/* Recent Transactions */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-primary dark:text-white">Recent Transactions</h3>
                            <button className="text-sm font-medium text-accent hover:text-green-600 transition-colors">View All</button>
                        </div>
                        <div className="space-y-4">
                            {mockTransactions.map((tx) => (
                                <div key={tx.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-full ${tx.type === 'Buy' || tx.type === 'SIP' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {tx.type === 'Buy' || tx.type === 'SIP' ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownRight className="h-5 w-5" />}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary dark:text-white">{tx.fund}</h4>
                                            <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                <Clock className="h-3 w-3 mr-1" /> {tx.date} • {tx.type}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-bold ${tx.type === 'Buy' || tx.type === 'SIP' ? 'text-green-500' : 'text-red-500'}`}>
                                            {tx.type === 'Buy' || tx.type === 'SIP' ? '+' : '-'}${tx.amount}
                                        </p>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${tx.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                            }`}>
                                            {tx.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">
                    <SIPCalculator />

                    {/* Watchlist */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Watchlist</h3>
                        <div className="space-y-4">
                            {mockFunds.slice(0, 3).map((fund) => (
                                <div key={fund.id} className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0">
                                    <div>
                                        <h4 className="font-medium text-primary dark:text-white text-sm truncate max-w-[150px]">{fund.name}</h4>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">{fund.category}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-sm text-primary dark:text-white">${fund.nav}</p>
                                        <p className="text-xs text-green-500">+{fund.returns["1Y"]}% /yr</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                            Explore More Funds
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorDashboard;
