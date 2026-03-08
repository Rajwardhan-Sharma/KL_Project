import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, PenTool, Search } from 'lucide-react';
import { mockFunds } from '../data/mockData';

const AdvisorPanel = () => {
    const [activeTab, setActiveTab] = useState('chat');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary dark:text-white mb-2">Advisor Workspace</h1>
                <p className="text-slate-600 dark:text-slate-400">Connect with investors, answer queries, and publish educational content.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 mb-6">
                <div className="flex space-x-8">
                    <button
                        onClick={() => setActiveTab('chat')}
                        className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'chat' ? 'border-accent text-accent' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
                    >
                        <div className="flex items-center"><MessageSquare className="h-4 w-4 mr-2" /> Investor Chat</div>
                    </button>
                    <button
                        onClick={() => setActiveTab('recommend')}
                        className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'recommend' ? 'border-accent text-accent' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
                    >
                        <div className="flex items-center"><ThumbsUp className="h-4 w-4 mr-2" /> Recommend Funds</div>
                    </button>
                    <button
                        onClick={() => setActiveTab('blog')}
                        className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'blog' ? 'border-accent text-accent' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
                    >
                        <div className="flex items-center"><PenTool className="h-4 w-4 mr-2" /> Educational Blog</div>
                    </button>
                </div>
            </div>

            {activeTab === 'chat' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                    {/* Chat List */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                            <div className="relative">
                                <Search className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
                                <input type="text" placeholder="Search conversations..." className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {['Alice Smith', 'Bob Johnson', 'David Miller', 'Emma Davis'].map((name, i) => (
                                <div key={i} className={`p-4 border-b border-slate-100 dark:border-slate-700/50 cursor-pointer transition-colors ${i === 0 ? 'bg-accent/5 dark:bg-accent/10 border-l-4 border-l-accent' : 'hover:bg-slate-50 dark:hover:bg-slate-700/30 border-l-4 border-l-transparent'}`}>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-medium text-sm text-primary dark:text-white">{name}</h4>
                                        <span className="text-xs text-slate-400">10:42 AM</span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Should I switch from equity to debt right now?</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Active Chat */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                            <h4 className="font-bold text-primary dark:text-white">Alice Smith</h4>
                            <p className="text-xs text-slate-500">Investor • Portfolio Value: $140,250</p>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            <div className="flex justify-start">
                                <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-sm p-3 max-w-[80%] text-sm text-slate-700 dark:text-slate-300">
                                    Hi, I noticed the market has been volatile lately. Should I switch from equity to debt right now to protect my gains?
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-accent text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] text-sm">
                                    Hello Alice. Market volatility is normal. Since your goals are long-term, it's usually best not to try timing the market. However, if you're approaching a major financial milestone, we can rebalance your portfolio. Let me review your current asset allocation.
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-b-2xl">
                            <div className="flex gap-2">
                                <input type="text" placeholder="Type a message..." className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                                <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'recommend' && (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-6">Create Recommendation Plan</h3>
                    <div className="max-w-xl">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Select Investor</label>
                            <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent">
                                <option>Alice Smith</option>
                                <option>Bob Johnson</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Select Funds to Recommend</label>
                            <div className="space-y-2 max-h-48 overflow-y-auto p-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900">
                                {mockFunds.map(fund => (
                                    <label key={fund.id} className="flex items-center space-x-3 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                                        <input type="checkbox" className="w-4 h-4 text-accent border-slate-300 rounded focus:ring-accent" />
                                        <div>
                                            <p className="text-sm font-medium text-primary dark:text-white">{fund.name}</p>
                                            <p className="text-xs text-slate-500">{fund.category} • {fund.risk} Risk</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Recommendation Notes</label>
                            <textarea rows={4} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Explain why these funds fit their goals..."></textarea>
                        </div>
                        <button className="bg-accent text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">Send Recommendation</button>
                    </div>
                </div>
            )}

            {activeTab === 'blog' && (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                        <PenTool className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Publish an Article</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-6">Share your expertise on market trends or personal finance.</p>
                        <button className="bg-accent text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">Start Writing</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdvisorPanel;
