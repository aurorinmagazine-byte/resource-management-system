import React, { useState, useEffect } from 'react';

export default function AuraDashboard() {
  const [value, setValue] = useState(0);
  const target = 14203.12;

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prev => (prev < target ? +(prev + 113.42).toFixed(2) : target));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#09090b', color: '#f4f4f5', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #27272a', paddingBottom: '20px' }}>
        <h1 style={{ letterSpacing: '2px', fontSize: '1.5rem' }}>AURA EXECUTIVE | SOVEREIGN RECOVERY</h1>
        <p style={{ color: '#a1a1aa' }}>March 31, 2026 - Boardroom Live Status</p>
      </header>
      
      <main style={{ marginTop: '60px', textAlign: 'center' }}>
        <div style={{ padding: '60px', border: '1px solid #27272a', borderRadius: '8px', display: 'inline-block' }}>
          <h2 style={{ fontSize: '1rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Total Audit Recovery</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '20px 0', color: '#fff' }}>
            ${value.toLocaleString()}
          </div>
          <div style={{ color: '#22c55e', fontSize: '0.9rem' }}>● SYSTEM OPERATIONAL - 1,500 ENTRIES SCANNED</div>
        </div>
      </main>

      <footer style={{ marginTop: '100px', fontSize: '0.8rem', color: '#3f3f46' }}>
        2% DINOSAUR RELIEF TAX APPLIED | SOUND AND BEYOND
      </footer>
    </div>
  );
}
