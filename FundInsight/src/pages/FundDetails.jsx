import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts';
import { ShieldAlert, ArrowLeft, TrendingUp, User, FileText, ArrowRightLeft } from 'lucide-react';
import { mockFunds } from '../data/mockData';

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

const FundDetails = () => {
    const { id } = useParams();
    const fund = mockFunds.find(f => f.id === id) || mockFunds[0]; // fallback for demo

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
                <Link to="/explore" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-accent mb-4 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-1" /> Back to Funds
                </Link>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold text-primary dark:text-white">{fund.name}</h1>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${fund.risk === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' :
                                    fund.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30' :
                                        'bg-green-100 text-green-700 dark:bg-green-900/30'
                                }`}>
                                {fund.risk} Risk
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                {fund.category} Option
                            </span>
                            <span>•</span>
                            Managed by {fund.fundManager}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex-1 md:flex-none inline-flex justify-center items-center px-6 py-3 text-sm font-medium rounded-xl text-primary dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-colors">
                            <ArrowRightLeft className="h-4 w-4 mr-2 text-slate-400" /> Compare
                        </button>
                        <button className="flex-1 md:flex-none inline-flex justify-center items-center px-8 py-3 text-sm font-medium rounded-xl text-white bg-accent hover:bg-green-600 shadow-sm transition-colors">
                            Invest Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Stats Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Current NAV</p>
                    <p className="text-2xl font-bold text-primary dark:text-white">${fund.nav}</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">1Y Return</p>
                    <p className="text-2xl font-bold text-green-500 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-1" /> {fund.returns["1Y"]}%
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">3Y Return</p>
                    <p className="text-2xl font-bold text-primary dark:text-white">{fund.returns["3Y"]}%</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Expense Ratio</p>
                    <p className="text-2xl font-bold text-primary dark:text-white">{fund.expenseRatio}%</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content (Charts & Details) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Performance Chart */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Historical Performance</h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={fund.history} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorNav" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(val) => `$${val}`} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                                        itemStyle={{ color: '#22c55e' }}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorNav)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Top Holdings */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Top Holdings</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-200 dark:border-slate-700">
                                        <th className="py-3 px-4 font-semibold text-sm text-slate-500 dark:text-slate-400">Company</th>
                                        <th className="py-3 px-4 font-semibold text-sm text-slate-500 dark:text-slate-400 text-right">Allocation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fund.holdings.map((holding, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 dark:border-slate-700/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="py-3 px-4 font-medium text-primary dark:text-white flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-accent"></div>
                                                {holding.company}
                                            </td>
                                            <td className="py-3 px-4 font-semibold text-right text-primary dark:text-white">
                                                {holding.allocation}%
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Risk, Allocation, Manager) */}
                <div className="space-y-8">
                    {/* Risk Meter */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-center">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-6 text-left">Risk Meter</h3>
                        <div className="relative inline-block w-48 h-24 overflow-hidden">
                            {/* Semi-Circle SVG */}
                            <svg viewBox="0 0 100 50" className="w-full h-full transform">
                                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="15" strokeLinecap="round" className="dark:stroke-slate-700" />
                                <path d="M 10 50 A 40 40 0 0 1 50 10" fill="none" stroke="#22c55e" strokeWidth="15" strokeLinecap="round" className={fund.risk === 'Low' ? 'block' : 'hidden'} />
                                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f59e0b" strokeWidth="15" strokeLinecap="round" className={fund.risk === 'Moderate' ? 'block' : 'hidden'} />
                                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#ef4444" strokeWidth="15" strokeLinecap="round" className={fund.risk === 'High' ? 'block' : 'hidden'} />
                            </svg>
                        </div>
                        <p className="mt-4 font-bold text-lg text-primary dark:text-white">{fund.risk} Risk</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            Investors understand that their principal will be at {fund.risk.toLowerCase()} risk.
                        </p>
                    </div>

                    {/* Asset Allocation */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Asset Allocation</h3>
                        <div className="h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={fund.assetAllocation}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {fund.assetAllocation.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                                        itemStyle={{ color: '#f8fafc' }}
                                    />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#64748b' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Fund Manager */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Fund Manager</h3>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                                <User className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                            </div>
                            <div>
                                <p className="font-semibold text-primary dark:text-white">{fund.fundManager}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Managing since 2018</p>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/5 transition-colors flex justify-center items-center">
                            <FileText className="h-4 w-4 mr-2" /> View Scheme Documents
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FundDetails;
