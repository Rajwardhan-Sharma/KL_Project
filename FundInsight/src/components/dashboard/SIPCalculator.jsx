import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturnRate, setExpectedReturnRate] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const [investedAmount, setInvestedAmount] = useState(0);
    const [estimatedReturns, setEstimatedReturns] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        // Math logic for SIP Calculator
        // M = P × ({[1 + i]n - 1} / i) × (1 + i)
        const monthlyRate = expectedReturnRate / 12 / 100;
        const months = timePeriod * 12;

        const futureValue = monthlyInvestment *
            ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
            (1 + monthlyRate);

        const totalInvested = monthlyInvestment * months;

        setInvestedAmount(totalInvested);
        setTotalValue(futureValue);
        setEstimatedReturns(futureValue - totalInvested);
    }, [monthlyInvestment, expectedReturnRate, timePeriod]);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-primary dark:text-white mb-6">SIP Calculator</h3>

            <div className="space-y-6">
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Monthly Investment</label>
                        <span className="font-bold text-accent">{formatCurrency(monthlyInvestment)}</span>
                    </div>
                    <input
                        type="range"
                        min="500"
                        max="100000"
                        step="500"
                        value={monthlyInvestment}
                        onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                </div>

                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Expected Return Rate (p.a)</label>
                        <span className="font-bold text-accent">{expectedReturnRate}%</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        step="0.5"
                        value={expectedReturnRate}
                        onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                </div>

                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Time Period</label>
                        <span className="font-bold text-accent">{timePeriod} Years</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="40"
                        step="1"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Total Invested</p>
                        <p className="text-lg font-semibold text-primary dark:text-white">{formatCurrency(investedAmount)}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Est. Returns</p>
                        <p className="text-lg font-semibold text-green-500">{formatCurrency(estimatedReturns)}</p>
                    </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Total Value</p>
                    <p className="text-2xl font-bold text-primary dark:text-white">{formatCurrency(totalValue)}</p>
                </div>
                <button className="w-full mt-6 bg-accent hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-colors">
                    Start SIP Now
                </button>
            </div>
        </div>
    );
};

export default SIPCalculator;
