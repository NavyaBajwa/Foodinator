import React from 'react';

interface TitleRevealProps {
  className?: string; // Optional className prop
}

export const TitleReveal: React.FC<TitleRevealProps> = ({ className }) => {
  const text = "Foodinator 🥘 🍔 🍜";

  return (
    <h1 className={`overflow-hidden font-serif text-4xl font-bold text-black-600 ${className}`}>
      {text.match(/./gu)!.map((char, index) => (
        <span
          className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};
  
  