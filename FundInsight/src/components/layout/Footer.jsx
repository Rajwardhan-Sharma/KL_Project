import React from 'react';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="h-6 w-6 text-accent" />
                            <span className="font-bold text-xl text-white tracking-tight">FundInsight</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">
                            Empowering investors with intelligent mutual fund insights and data-driven portfolio management.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 space-x-2">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Mutual Funds</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">SIP Calculator</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Market Insights</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Risk Disclosure</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> support@fundinsight.com</li>
                            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +1 (800) 123-4567</li>
                            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> 123 Wall Street, NY 10005</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    <p className="mb-2"><strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance does not guarantee future returns. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market.</p>
                    <p>&copy; {new Date().getFullYear()} FundInsight. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
