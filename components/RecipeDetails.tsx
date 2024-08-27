import React from 'react';

interface RecipeDetailsProps {
  details: any;
}

export default function RecipeDetails({ details }: RecipeDetailsProps) {
  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.summary}</p>
      {/* Add more details as needed */}
    </div>
  );
}