import React from 'react';

export default function Banner() {
  return (
    <header
      style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #0b6cf5, #2c3e50)',
        color: 'white',
        textAlign: 'center',
        borderRadius: '0 0 16px 16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Xingue-Lingue Tech Store</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', opacity: 0.9 }}>
        Encontre os melhores produtos originais de tecnologia (ou que pelo menos pareçam originais)
      </p>
    </header>
  );
}
