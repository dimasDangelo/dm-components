import React from 'react';

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px', color: "red" }}>
      {label }
    </button>
  );
};