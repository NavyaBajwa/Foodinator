import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


interface AccordionItemProps {
  title: string;
  content: {
    imageUrl: string;
    sourceUrl: string;
  };
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-border-colour padding-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 hover:bg-custom-accordion-purple focus:outline-none"
      >
        <h3 className="text-base font-sansSerif text-black flex justify-between items-center">
          {title}
          <span className='pl-4'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
        </h3>
      </button>
      {isOpen && (
        <div className="p-4 text-black">
          <a href={content.sourceUrl} target="_blank" rel="noopener noreferrer">
            <img src={content.imageUrl} alt={title} className="w-full h-auto rounded-md" />
          </a>
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    title: string;
    content: {
      imageUrl: string;
      sourceUrl: string;
    };
  }>;
  isCompact: boolean;
  selectionMode: 'single' | 'multiple'

}

const Accordion: React.FC<AccordionProps> = ({ items, isCompact=false, selectionMode='single' }) => {
  return (
    <div className="bg-gray-50 rounded-md w-full max-w-lg mx-auto">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;

