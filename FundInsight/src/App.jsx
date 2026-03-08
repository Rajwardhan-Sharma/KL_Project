import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import InvestorDashboard from './pages/InvestorDashboard';
import ExploreFunds from './pages/ExploreFunds';
import FundDetails from './pages/FundDetails';
import AdminDashboard from './pages/AdminDashboard';
import AdvisorPanel from './pages/AdvisorPanel';
import AnalystPanel from './pages/AnalystPanel';
import Login from './pages/Login';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <Router>
            <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<InvestorDashboard />} />
                    <Route path="/explore" element={<ExploreFunds />} />
                    <Route path="/fund/:id" element={<FundDetails />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/advisor" element={<AdvisorPanel />} />
                    <Route path="/analyst" element={<AnalystPanel />} />
                </Routes>
            </Layout>
            <Toaster position="bottom-right" />
        </Router>
    );
}

export default App;
