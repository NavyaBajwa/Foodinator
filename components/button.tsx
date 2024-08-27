// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-20 py-2 bg-custom-purple text-white squared-full rounded hover:bg-custom-hover-purple align-center"
    >
      {children}
    </button>
  );
};

export default Button;