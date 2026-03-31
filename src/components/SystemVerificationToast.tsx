import React from 'react';

const SystemVerificationToast = ({ isVisible, message, riskDistribution, successMetrics }) => {
    if (!isVisible) return null;

    return (
        <div className="toast">
            <h2>Audit Completion Notification</h2>
            <p>{message}</p>
            <div className="metrics">
                <h3>Success Metrics</h3>
                <ul>
                    {successMetrics.map((metric, index) => (
                        <li key={index}>{metric}</li>
                    ))}
                </ul>
            </div>
            <div className="risks">
                <h3>Risk Distribution</h3>
                <ul>
                    {riskDistribution.map((risk, index) => (
                        <li key={index}>{risk}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SystemVerificationToast;
