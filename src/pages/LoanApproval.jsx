import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './LoanApproval.css';

const LoanApproval = () => {
    const navigate = useNavigate();

    return (
        <div className="la-container">
            {/* Header/Nav */}
            <div className="la-header-nav">
                <button className="la-back-btn" onClick={() => navigate('/admin-dashboard')}>
                    <ArrowLeft size={16} /> Back to Dashboard
                </button>
            </div>

            {/* Main Content */}
            <div className="la-content">
                <div className="la-page-header">
                    <h1 className="la-title">Loan Approval Management</h1>
                    <p className="la-subtitle">Review and process loan applications</p>
                </div>

                {/* Empty State */}
                <div className="la-empty-state-card">
                    <p>No pending loan applications.</p>
                </div>

                {/* Pagination Placeholder (Hidden for empty state usually, but can show inactive) */}
                {/* 
                <div className="la-pagination">
                   ...
                </div> 
                */}
            </div>
        </div>
    );
};

export default LoanApproval;
