import React, { useState } from 'react';
import { Users, Database, BarChart, Download, Settings, Edit, Trash2, UserPlus, CheckCircle } from 'lucide-react';
import { mockUsers } from '../data/mockData';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('users');
    const [users, setUsers] = useState(mockUsers);
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddUser = () => {
        const newUser = {
            id: Date.now(),
            name: `New User ${users.length + 1}`,
            role: "Investor",
            status: "Pending",
            joined: new Date().toISOString().split('T')[0]
        };
        setUsers([newUser, ...users]);
    };

    const handleApproveUser = (id) => {
        setUsers(users.map(u => u.id === id ? { ...u, status: "Active" } : u));
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(u => u.id !== id));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                    <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-3">Admin Menu</h2>
                    <nav className="space-y-1">
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'users' ? 'bg-accent/10 text-accent' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                        >
                            <Users className="h-5 w-5 mr-3" /> User Management
                        </button>
                        <button
                            onClick={() => setActiveTab('newUsers')}
                            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'newUsers' ? 'bg-accent/10 text-accent' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                        >
                            <UserPlus className="h-5 w-5 mr-3" /> New Registrations
                            {users.filter(u => u.status === 'Pending').length > 0 && (
                                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                    {users.filter(u => u.status === 'Pending').length}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('data')}
                            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'data' ? 'bg-accent/10 text-accent' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                        >
                            <Database className="h-5 w-5 mr-3" /> Fund Data Updates
                        </button>
                        <button
                            onClick={() => setActiveTab('analytics')}
                            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'analytics' ? 'bg-accent/10 text-accent' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                        >
                            <BarChart className="h-5 w-5 mr-3" /> System Analytics
                        </button>
                        <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <Settings className="h-5 w-5 mr-3" /> Settings
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow space-y-6">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-primary dark:text-white mb-2">Admin Dashboard</h1>
                        <p className="text-slate-600 dark:text-slate-400">Manage platform users, roles, and fund data configurations.</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl font-medium transition-colors text-sm border border-slate-200 dark:border-slate-700">
                        <Download className="h-4 w-4 mr-2" /> Export Report
                    </button>
                </div>

                {activeTab === 'users' && (
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-primary dark:text-white">User Management</h3>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search users by name or role..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent w-64"
                                />
                                <button
                                    onClick={handleAddUser}
                                    className="ml-4 px-4 py-2 bg-accent hover:bg-green-600 text-white rounded-lg font-medium transition-colors text-sm whitespace-nowrap"
                                >
                                    + Add New User (Simulate)
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-900/50">
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400">Name</th>
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400">Role</th>
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400">Status</th>
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400">Joined</th>
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map(user => (
                                        <tr key={user.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                                            <td className="py-4 px-6 font-medium text-primary dark:text-white">{user.name}</td>
                                            <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{user.role}</td>
                                            <td className="py-4 px-6">
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                    user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                        'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                                                    }`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-slate-600 dark:text-slate-400 text-sm">{user.joined}</td>
                                            <td className="py-4 px-6 text-right">
                                                <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 mr-3 transition-colors"><Edit className="h-4 w-4" /></button>
                                                <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"><Trash2 className="h-4 w-4" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'newUsers' && (
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-primary dark:text-white">Pending Registrations</h3>
                            <button
                                onClick={handleAddUser}
                                className="px-4 py-2 bg-accent hover:bg-green-600 text-white rounded-lg font-medium transition-colors text-sm whitespace-nowrap"
                            >
                                + Simulate Registration
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-900/50">
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400">Name</th>
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400">Role Request</th>
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400">Applied On</th>
                                        <th className="py-3 px-6 font-semibold text-sm text-slate-500 dark:text-slate-400 text-right">Review Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.filter(u => u.status === 'Pending').length === 0 ? (
                                        <tr>
                                            <td colSpan="4" className="py-8 text-center text-slate-500 dark:text-slate-400">
                                                No new user registrations pending review.
                                            </td>
                                        </tr>
                                    ) : (
                                        users.filter(u => u.status === 'Pending').map(user => (
                                            <tr key={user.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                                                <td className="py-4 px-6 font-medium text-primary dark:text-white">{user.name}</td>
                                                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-slate-600 dark:text-slate-400 text-sm">{user.joined}</td>
                                                <td className="py-4 px-6 text-right">
                                                    <button
                                                        onClick={() => handleApproveUser(user.id)}
                                                        className="inline-flex items-center px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors mr-2 cursor-pointer"
                                                    >
                                                        <CheckCircle className="h-4 w-4 mr-1.5" /> Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="inline-flex items-center px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-400 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-1.5" /> Reject
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'data' && (
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-center">
                        <Database className="h-16 w-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Fund Data Management</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-6">Import the latest NAV values and expense ratios from external APIs or upload CSV files directly.</p>
                        <div className="flex justify-center gap-4">
                            <button className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-green-600 transition-colors">Trigger API Sync</button>
                            <button className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600">Upload CSV</button>
                        </div>
                    </div>
                )}

                {activeTab === 'analytics' && (
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-6">System Analytics Overview</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Users</p>
                                <p className="text-3xl font-bold text-primary dark:text-white">1,248</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Active Sessions</p>
                                <p className="text-3xl font-bold text-primary dark:text-white">342</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">API Health</p>
                                <p className="text-3xl font-bold text-green-500">99.9%</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
