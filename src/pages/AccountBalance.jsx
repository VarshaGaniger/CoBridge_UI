import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Landmark, ArrowLeft } from 'lucide-react';
import './AccountBalance.css';

const AccountBalance = () => {
    const navigate = useNavigate();

    return (
        <div className="ab-container">
            {/* Navbar */}
            <nav className="ab-nav">
                <div className="ab-nav-left">
                    <div className="ab-logo-box">
                        <Landmark size={20} color="black" />
                    </div>
                    <span className="ab-brand-name">Bank</span>
                    <div style={{ width: '24px' }}></div> {/* Spacer */}
                    <button className="ab-back-btn" onClick={() => navigate('/user-dashboard')}>
                        <ArrowLeft size={16} /> Back to Dashboard
                    </button>
                </div>
                <div className="ab-nav-right">
                </div>
            </nav>

            {/* Main Content */}
            <div className="ab-content">
                <div className="ab-card">
                    <div className="ab-header">
                        <h1 className="ab-title">Account Balance</h1>
                        <p className="ab-subtitle">View your current account balances</p>
                    </div>

                    <div className="ab-divider"></div>

                    {/* Empty State */}
                    <div className="ab-empty-state">
                        <p>No accounts found.</p>
                    </div>

                    {/* Total Balance (Optional Placeholder, can remain hidden or 0) */}
                    {/* 
                    <div className="ab-total-balance">
                        <span>Total Balance</span>
                        <span className="balance-amount">$0.00</span>
                    </div> 
                    */}
                </div>

                <div className="ab-security-note">
                    <span className="secure-icon">🛡️</span> Encrypted connection • Last updated just now
                </div>
            </div>

            <footer className="ab-footer">
                © Banking System. All rights reserved.
            </footer>
        </div>
    );
};

export default AccountBalance;
