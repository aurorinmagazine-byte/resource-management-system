import React from 'react';
import { useEffect, useState } from 'react';

const DashboardView = () => {
  const [counter, setCounter] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);

  useEffect(() => {
    // Animate counter
    const targetAmount = 14203.12;
    const duration = 2000; // 2 seconds
    const stepTime = 20;
    const steps = Math.round(duration / stepTime);
    const increment = targetAmount / steps;
    let currentAmount = 0;

    const interval = setInterval(() => {
      currentAmount = Math.min(currentAmount + increment, targetAmount);
      setCounter(currentAmount);
      if (currentAmount === targetAmount) clearInterval(interval);
    }, stepTime);

    // Calculate processing fee 2%
    setProcessingFee((targetAmount * 0.02).toFixed(2));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-zinc-400 p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <div className="text-xl mb-2">Total Amount: ${counter.toFixed(2)}</div>
      <div className="text-xl mb-2">Processing Fee (2%): ${processingFee}</div>
      <div className="audit-log overflow-y-scroll h-48 border border-gray-500 p-2">
        <h2 className="text-lg font-semibold mb-2">Audit Log</h2>
        {/* Example static log entries */}
        <div>Log Entry 1</div>
        <div>Log Entry 2</div>
        <div>Log Entry 3</div>
        <div>Log Entry 4</div>
        <div>Log Entry 5</div>
      </div>
    </div>
  );
};

export default DashboardView;
