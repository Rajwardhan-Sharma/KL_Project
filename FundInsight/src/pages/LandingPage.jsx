import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Users, ArrowRight, PieChart, BarChart3, LineChart } from 'lucide-react';
import { mockStats } from '../data/mockData';

const LandingPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative bg-slate-50 dark:bg-slate-900 overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-200 dark:from-slate-800 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="text-5xl md:text-6xl font-extrabold text-primary dark:text-white tracking-tight mb-6"
                        >
                            Smart Investing for a <span className="text-accent">Brighter Future</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
                        >
                            Discover high-performing mutual funds, track your portfolio with advanced analytics, and achieve your financial goals with FundInsight.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                to="/explore"
                                className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-accent hover:bg-green-600 shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                            >
                                Start Investing <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/dashboard"
                                className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-xl text-primary dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all duration-300"
                            >
                                View Dashboard
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-4 gap-8"
                    >
                        {[
                            { label: "Total Investors", value: mockStats.totalInvestors, icon: <Users className="h-8 w-8 text-accent mb-4" /> },
                            { label: "Assets Managed", value: mockStats.assetsUnderManagement, icon: <PieChart className="h-8 w-8 text-accent mb-4" /> },
                            { label: "Avg Return Rate", value: mockStats.avgReturnRate, icon: <TrendingUp className="h-8 w-8 text-accent mb-4" /> },
                            { label: "Active Funds", value: mockStats.activeFunds, icon: <LineChart className="h-8 w-8 text-accent mb-4" /> }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-center">{stat.icon}</div>
                                <h3 className="text-3xl font-bold text-primary dark:text-white mb-2">{stat.value}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Educational Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">Why Invest in Mutual Funds?</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Mutual funds offer a professionally managed, diversified approach to investing, making it accessible for both beginners and experienced investors.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    >
                        {[
                            {
                                title: "Professional Management",
                                description: "Expert fund managers analyze markets and select securities to align with the fund's objective, maximizing your potential returns.",
                                icon: <ShieldCheck className="h-10 w-10 text-accent" />
                            },
                            {
                                title: "Diversification",
                                description: "Spread your risk across various asset classes, industries, and companies, reducing the impact of any single underperforming asset.",
                                icon: <PieChart className="h-10 w-10 text-accent" />
                            },
                            {
                                title: "Liquidity & Access",
                                description: "Start investing with small amounts through SIPs and enjoy the flexibility to buy or sell your mutual fund units on any business day.",
                                icon: <BarChart3 className="h-10 w-10 text-accent" />
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="p-4 bg-green-50 dark:bg-slate-700/50 inline-block rounded-xl mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary dark:text-white mb-4">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to grow your wealth?</h2>
                    <p className="text-slate-300 text-lg mb-10">Join millions of investors who trust FundInsight for their financial journey.</p>
                    <Link
                        to="/explore"
                        className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-primary bg-accent hover:bg-green-400 hover:scale-105 transition-all duration-300"
                    >
                        Explore Funds Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
