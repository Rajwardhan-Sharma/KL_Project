import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Download, TrendingUp, AlertCircle, RefreshCw } from 'lucide-react';
import { mockFunds } from '../data/mockData';

const dataMarketTrend = [
    { month: 'Jan', Equity: 4000, Debt: 2400 },
    { month: 'Feb', Equity: 3000, Debt: 1398 },
    { month: 'Mar', Equity: 2000, Debt: 8000 },
    { month: 'Apr', Equity: 2780, Debt: 3908 },
    { month: 'May', Equity: 1890, Debt: 4800 },
    { month: 'Jun', Equity: 2390, Debt: 3800 },
    { month: 'Jul', Equity: 3490, Debt: 4300 },
];

const AnalystPanel = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-primary dark:text-white mb-2">Data Analyst Interface</h1>
                    <p className="text-slate-600 dark:text-slate-400">Advanced visualization and system performance metrics.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl font-medium transition-colors text-sm border border-slate-200 dark:border-slate-700">
                        <RefreshCw className="h-4 w-4 mr-2" /> Sync API
                    </button>
                    <button className="flex items-center px-4 py-2 bg-accent text-white rounded-xl font-medium hover:bg-green-600 transition-colors text-sm shadow-sm">
                        <Download className="h-4 w-4 mr-2" /> Export RAW Data
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Total Inflows (YTD)", val: "$45.2M", icon: <TrendingUp className="text-green-500 h-5 w-5" /> },
                    { title: "Avg Expense Ratio", val: "0.82%", icon: <AlertCircle className="text-blue-500 h-5 w-5" /> },
                    { title: "Data Feed Latency", val: "42ms", icon: <RefreshCw className="text-slate-500 h-5 w-5" /> },
                    { title: "API Warnings", val: "2", icon: <AlertCircle className="text-yellow-500 h-5 w-5" /> },
                ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.title}</p>
                            {item.icon}
                        </div>
                        <p className="text-2xl font-bold text-primary dark:text-white">{item.val}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-6">Platform Investment Trends</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataMarketTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <RechartsTooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }} />
                                <Legend verticalAlign="top" height={36} iconType="circle" />
                                <Line type="monotone" dataKey="Equity" stroke="#22c55e" strokeWidth={3} dot={false} />
                                <Line type="monotone" dataKey="Debt" stroke="#3b82f6" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-6">AUM by Category (Demo)</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={[
                                { name: 'Equity', val: 8000 },
                                { name: 'Debt', val: 3000 },
                                { name: 'Index', val: 2000 },
                                { name: 'Hybrid', val: 2780 }
                            ]}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <RechartsTooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }} />
                                <Bar dataKey="val" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-primary dark:text-white mb-6">Recent Anomaly Reports</h3>
                <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-700/50 rounded-xl flex items-start gap-4">
                        <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-400">High NAV Variance detected</h4>
                            <p className="text-sm text-yellow-600 dark:text-yellow-500 mt-1">Fund "Stable Growth Shield" reported a NAV jump of 5.2% in one day (expected &lt;1% for Debt class). Pending manual review.</p>
                            <button className="mt-3 text-sm font-medium text-yellow-700 dark:text-yellow-300 hover:underline">Review Data Source</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AnalystPanel;
