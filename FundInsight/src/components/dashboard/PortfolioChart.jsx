import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data1Y = [
    { name: 'Jan', value: 100 }, { name: 'Feb', value: 105 }, { name: 'Mar', value: 102 },
    { name: 'Apr', value: 110 }, { name: 'May', value: 115 }, { name: 'Jun', value: 112 },
    { name: 'Jul', value: 120 }, { name: 'Aug', value: 125 }, { name: 'Sep', value: 122 },
    { name: 'Oct', value: 130 }, { name: 'Nov', value: 135 }, { name: 'Dec', value: 140 },
];

const data3Y = [
    { name: '2021', value: 80 }, { name: '2022', value: 100 }, { name: '2023', value: 140 },
];

const data5Y = [
    { name: '2019', value: 50 }, { name: '2020', value: 70 }, { name: '2021', value: 80 },
    { name: '2022', value: 100 }, { name: '2023', value: 140 },
];

const PortfolioChart = () => {
    const [timeRange, setTimeRange] = useState('1Y');

    const getChartData = () => {
        switch (timeRange) {
            case '1Y': return data1Y;
            case '3Y': return data3Y;
            case '5Y': return data5Y;
            default: return data1Y;
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-xl font-bold text-primary dark:text-white">Portfolio Value</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Total growth over time</p>
                </div>
                <div className="flex space-x-2 bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
                    {['1Y', '3Y', '5Y'].map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${timeRange === range
                                    ? 'bg-white dark:bg-slate-600 text-primary dark:text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={getChartData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(value) => `$${value}k`} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                            itemStyle={{ color: '#22c55e' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PortfolioChart;
